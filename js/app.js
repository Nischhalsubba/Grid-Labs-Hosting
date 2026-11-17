// Keep the navbar sticky without cancelling (non-cancellable) scroll events.
function windowScroll() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  const isScrolled =
    document.body.scrollTop >= 50 ||
    document.documentElement.scrollTop >= 50;
  navbar.classList.toggle("is-sticky", isScrolled);
}

window.addEventListener("scroll", windowScroll, { passive: true });
windowScroll();

// Contact Form
function validateForm() {
  var name = document.forms["myForm"]["name"].value.trim();
  var email = document.forms["myForm"]["email"].value.trim();
  var subject = document.forms["myForm"]["subject"].value.trim();
  var comments = document.forms["myForm"]["comments"].value.trim();
  document.getElementById("error-msg").style.opacity = 0;
  document.getElementById("error-msg").innerHTML = "";
  if (name == "" || name == null) {
    document.getElementById("error-msg").innerHTML =
      "<div class='alert alert-warning'>*Please enter a Name*</div>";
    fadeIn();
    return false;
  }
  if (email == "" || email == null) {
    document.getElementById("error-msg").innerHTML =
      "<div class='alert alert-warning'>*Please enter a Email*</div>";
    fadeIn();
    return false;
  }
  if (subject == "" || subject == null) {
    document.getElementById("error-msg").innerHTML =
      "<div class='alert alert-warning'>*Please enter a Subject*</div>";
    fadeIn();
    return false;
  }
  if (comments == "" || comments == null) {
    document.getElementById("error-msg").innerHTML =
      "<div class='alert alert-warning'>*Please enter a Comments*</div>";
    fadeIn();
    return false;
  }
  // Static hosting has no form endpoint: open a real draft instead of silently
  // discarding the visitor's enquiry. The visitor must send it in their mail app.
  var body = ["Name: " + name, "Email: " + email, "", comments].join("\n");
  var mailto = "mailto:hello@gridlabs.com?subject=" + encodeURIComponent(subject)
    + "&body=" + encodeURIComponent(body);
  var status = document.getElementById("simple-msg");
  if (status) status.textContent = "Your email app will open with a draft. Send it there to complete your message.";
  window.location.href = mailto;
  return false;
}

function fadeIn() {
  var fade = document.getElementById("error-msg");
  var opacity = 0;
  var intervalID = setInterval(function () {
    if (opacity < 1) {
      opacity = opacity + 0.5;
      fade.style.opacity = opacity;
    } else {
      clearInterval(intervalID);
    }
  }, 200);
}
