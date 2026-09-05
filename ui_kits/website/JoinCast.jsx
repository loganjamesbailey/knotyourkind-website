const React = window.React;

const POSITIONS = [
  { value: 'Drummer', label: 'Drummer' },
  { value: 'Guitarist', label: 'Guitarist' },
  { value: 'Bassist', label: 'Bassist' },
  { value: 'Sampler', label: 'Sampler' },
];

const ACCEPT = '.mp4,.mov,.webm,.mp3,.wav,.m4a,video/mp4,video/quicktime,video/webm,audio/mpeg,audio/wav,audio/x-wav,audio/mp4,audio/x-m4a';
const EXT_OK = /\.(mp4|mov|webm|mp3|wav|m4a)$/i;

function formAction(cfg) {
  const provider = (cfg && cfg.provider) || 'formsubmit';
  const to = (cfg && cfg.to) || 'jbaile07@me.com';
  if (provider === 'formspree' || provider === 'getform') return String(cfg.endpoint || '').trim();
  if (provider === 'web3forms') return 'https://api.web3forms.com/submit';
  return 'https://formsubmit.co/' + encodeURIComponent(to);
}

function formatBytes(n) {
  if (n < 1024) return n + ' B';
  if (n < 1024 * 1024) return (n / 1024).toFixed(1) + ' KB';
  return (n / (1024 * 1024)).toFixed(1) + ' MB';
}

function sentFromUrl() {
  try {
    return new URLSearchParams(window.location.search).get('sent') === '1';
  } catch (e) {
    return false;
  }
}

function JoinCast() {
  const { SheetFrame, TitleBlock, NotesList, Stamp, Field, Button } = window.KnotYourKindDesignSystem_e3a90c;
  const cfg = Object.assign(
    { to: 'jbaile07@me.com', provider: 'formsubmit', endpoint: '', accessKey: '', maxBytes: 10 * 1024 * 1024 },
    window.KYK_FORM || {}
  );
  const maxBytes = Number(cfg.maxBytes) > 0 ? Number(cfg.maxBytes) : 10 * 1024 * 1024;
  const action = formAction(cfg);
  const provider = (cfg.provider || 'formsubmit').toLowerCase();
  const configured =
    (provider === 'formsubmit' && !!cfg.to) ||
    ((provider === 'formspree' || provider === 'getform') && !!String(cfg.endpoint || '').trim()) ||
    (provider === 'web3forms' && !!String(cfg.accessKey || '').trim());

  const [fileError, setFileError] = React.useState('');
  const [fileLabel, setFileLabel] = React.useState('');
  const [blocked, setBlocked] = React.useState(false);
  const [sent] = React.useState(sentFromUrl);

  function onFileChange(e) {
    const file = e.target.files && e.target.files[0];
    setFileError('');
    setBlocked(false);
    if (!file) {
      setFileLabel('');
      return;
    }
    setFileLabel(file.name + ' — ' + formatBytes(file.size));
    if (!EXT_OK.test(file.name)) {
      setFileError('FILE MUST BE MP4, MOV, WEBM, MP3, WAV, OR M4A.');
      setBlocked(true);
      return;
    }
    if (file.size > maxBytes) {
      setFileError('FILE TOO LARGE. MAX ' + formatBytes(maxBytes) + '. COMPRESS THE CLIP AND TRY AGAIN.');
      setBlocked(true);
    }
  }

  function onSubmit(e) {
    if (!configured) {
      e.preventDefault();
      setFileError('FORM ENDPOINT IS NOT CONFIGURED. SEE FORM.CONFIG.JS.');
      return;
    }
    const fileInput = e.target.querySelector('input[type="file"]');
    const file = fileInput && fileInput.files && fileInput.files[0];
    if (!file) {
      e.preventDefault();
      setFileError('ATTACH A VIDEO OR AUDIO AUDITION.');
      setBlocked(true);
      return;
    }
    if (!EXT_OK.test(file.name) || file.size > maxBytes) {
      e.preventDefault();
      setBlocked(true);
      if (!EXT_OK.test(file.name)) setFileError('FILE MUST BE MP4, MOV, WEBM, MP3, WAV, OR M4A.');
      else setFileError('FILE TOO LARGE. MAX ' + formatBytes(maxBytes) + '.');
    }
  }

  const nextUrl = (typeof window !== 'undefined' ? window.location.origin : '') + '/?sent=1#join';

  return (
    <section id="join" className="kyk-slab-black" style={{ padding: '0 var(--space-5) var(--space-5)' }}>
      <SheetFrame>
        <window.SectionTitle label="Casting Call — Open Requisition" title="Join The Band" />
        <div className="kyk-join-grid">
          <div style={{ minWidth: 0 }}>
            <p className="kyk-caps" style={{ margin: '0 0 var(--space-3)', fontSize: 'var(--text-label)', color: 'var(--text-title)', lineHeight: 1.45 }}>
              Knot Your Kind — A Slipknot Experience is casting. We are currently looking for drummers, guitarists, a bassist, and a sampler.
            </p>
            <NotesList
              className="kyk-notes"
              notes={[
                'POSITIONS OPEN: DRUMMER. GUITARIST. BASSIST. SAMPLER.',
                'SUBMIT NAME, POSITION, AND ONE AUDITION CLIP (VIDEO OR AUDIO).',
                'MESSAGE IS OPTIONAL. KEEP IT SHORT.',
                'MAX FILE ' + formatBytes(maxBytes) + '. MP4 / MOV / WEBM / MP3 / WAV / M4A.',
              ]}
            />
            <Stamp angle={-5} style={{ marginTop: 'var(--space-4)' }}>Now Casting</Stamp>
          </div>
          <div style={{ minWidth: 0 }}>
            {sent ? (
              <p className="kyk-caps kyk-form-status" role="status" style={{ margin: 0, color: 'var(--kyk-red)', fontSize: 'var(--text-label)', lineHeight: 1.5 }}>
                Submission handed to the form relay. If this was the first send, jbaile07@me.com must confirm the activation email before auditions arrive.
              </p>
            ) : (
              <form
                className="kyk-audition-form"
                action={configured ? action : undefined}
                method="POST"
                encType="multipart/form-data"
                onSubmit={onSubmit}
              >
                {provider === 'formsubmit' && (
                  <>
                    <input type="hidden" name="_subject" value="Knot Your Kind audition" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value={nextUrl} />
                    <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="kyk-honey" aria-hidden="true" />
                  </>
                )}
                {provider === 'web3forms' && (
                  <>
                    <input type="hidden" name="access_key" value={cfg.accessKey || ''} />
                    <input type="hidden" name="subject" value="Knot Your Kind audition" />
                    <input type="hidden" name="from_name" value="Knot Your Kind audition" />
                    <input type="hidden" name="redirect" value={nextUrl} />
                  </>
                )}
                <input type="hidden" name="_gotcha" tabIndex={-1} autoComplete="off" className="kyk-honey" aria-hidden="true" />

                <Field label="Name" name="name" placeholder="YOUR NAME" required />
                <Field
                  label="Position"
                  name="position"
                  select
                  required
                  placeholder="SELECT POSITION"
                  options={POSITIONS}
                />
                <Field label="Message (optional)" name="message" textarea rows={3} placeholder="NOTES, CITY, AVAILABILITY" />
                <label className="kyk-file-field">
                  <span className="kyk-file-label">Audition — video or audio</span>
                  <input
                    type="file"
                    name="attachment"
                    accept={ACCEPT}
                    required
                    onChange={onFileChange}
                  />
                  <span className="kyk-file-meta">{fileLabel || 'MP4 / MOV / WEBM / MP3 / WAV / M4A · MAX ' + formatBytes(maxBytes)}</span>
                </label>
                {fileError ? (
                  <p className="kyk-form-error kyk-caps" role="alert">{fileError}</p>
                ) : null}
                {!configured ? (
                  <p className="kyk-form-error kyk-caps" role="alert">
                    Form backend is not configured. Set the provider in form.config.js. Submissions will not send.
                  </p>
                ) : null}
                <Button type="submit" variant="default" disabled={blocked || !configured}>Submit Audition</Button>
                <p className="kyk-caps" style={{ margin: '12px 0 0', fontSize: 'var(--text-dim)', color: 'var(--text-annotation)', lineHeight: 1.6 }}>
                  Routed to {cfg.to || 'jbaile07@me.com'} via {provider.toUpperCase()}. First FormSubmit send requires inbox confirmation.
                </p>
              </form>
            )}
            <TitleBlock title="CASTING, OPEN REQ" scale="NTS" sheet="5 OF 9" style={{ marginTop: 'var(--space-4)', alignSelf: 'flex-end' }} />
          </div>
        </div>
      </SheetFrame>
    </section>
  );
}

Object.assign(window, { JoinCast });
