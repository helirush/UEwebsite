// Unity Energy Clerk voice auth bootstrap
// Emergency shared auth bootstrap for cross-device reliability.
(function () {
  if (typeof window === 'undefined') return;
  var auth = { type: 'apiKey', value: 'ylwtF2tVPD6mXgX1tyXNkj2APzVC69q5P3OLzNjmBeKDGY6N' };
  window.MAXWELLIAN_HUME_RUNTIME_AUTH = auth;
  window.MAXWELLIAN_HUME_AUTH = auth;
  window.MAXWELLIAN_HUME_API_KEY = auth.value;
})();
