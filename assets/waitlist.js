// Early-access waitlist form: posts the email to the waitlist API (AWS) and shows the result inline.
(() => {
  const API = 'https://2pyui9xeod.execute-api.ap-south-1.amazonaws.com/signup';
  const form = document.getElementById('wl-form');
  if (!form) return;
  const msg = document.getElementById('wl-msg');
  const btn = form.querySelector('button');
  const show = (text, ok) => { msg.textContent = text; msg.className = 'wl-msg ' + (ok ? 'ok' : 'err'); };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = form.email.value.trim();
    if (!/^[^@\s]+@[^@\s]+\.[A-Za-z]{2,}$/.test(email)) return show('Please enter a valid email address.', false);
    btn.disabled = true;
    show('Adding you…', true);
    try {
      const res = await fetch(API, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, source: form.dataset.source || 'unknown', website: form.website.value })
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        show(data.already ? "You're already on the list ✅ We'll email you at launch." : "You're on the list ✅ We'll email you at launch.", true);
        form.email.value = '';
      } else if (data.error === 'invalid_email') {
        show('Please enter a valid email address.', false);
      } else {
        show('Something went wrong. Please try again in a minute.', false);
      }
    } catch (_) {
      show('Network error. Please check your connection and try again.', false);
    } finally {
      btn.disabled = false;
    }
  });
})();
