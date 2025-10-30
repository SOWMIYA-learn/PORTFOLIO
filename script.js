function handleContact(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("contact-status");

  if (!name || !email) {
    status.textContent = "Please enter your name and email.";
    return;
  }

  const subject = encodeURIComponent("Portfolio contact from " + name);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  
  // Open default mail app
  window.location.href = `mailto:sowmi162005@gmail.com?subject=${subject}&body=${body}`;
  status.textContent = "Opening your email app...";
}
