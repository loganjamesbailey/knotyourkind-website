/**
 * Audition form delivery — Knot Your Kind.
 *
 * Default: FormSubmit.co posts multipart (text + file) to jbaile07@me.com.
 * No API key. The first live submission emails James a confirmation link;
 * delivery does not start until that link is clicked.
 *
 * File cap is 10 MB to match FormSubmit's per-submission limit.
 *
 * To switch providers, edit the object below (do not commit secrets if the repo is public):
 *   Formspree:  provider: 'formspree', endpoint: 'https://formspree.io/f/YOUR_FORM_ID'
 *   Getform:    provider: 'getform',   endpoint: 'https://getform.io/f/YOUR_FORM_ID'
 *   Web3Forms:  provider: 'web3forms', accessKey: 'YOUR_ACCESS_KEY'
 *               (Web3Forms also needs a key from https://web3forms.com — leave blank until set)
 */
window.KYK_FORM = {
  to: 'jbaile07@me.com',
  provider: 'formsubmit',
  endpoint: '',
  accessKey: '',
  maxBytes: 10 * 1024 * 1024,
};
