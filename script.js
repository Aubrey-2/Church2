// Scroll to Top Button
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑ Top";
scrollBtn.id = "scrollTopBtn";
document.body.appendChild(scrollBtn);
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "30px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "5px";
scrollBtn.style.backgroundColor = "#4B2E83";
scrollBtn.style.color = "green";
scrollBtn.style.display = "none";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.zIndex = "1000";

window.onscroll = function () {
  scrollBtn.style.display =
    document.documentElement.scrollTop > 100 ? "block" : "none";
};
scrollBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Simple Form Validation
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (e) {
    const name = form.querySelector("#name");
    const email = form.querySelector("#email");
    const message = form.querySelector("#message");

    if (!name.value || !email.value || !message.value) {
      alert("Please fill in all fields before submitting.");
      e.preventDefault();
    }
  });
}

// Fade in on load
window.addEventListener("load", function () {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 2s";
  setTimeout(() => {
    document.body.style.opacity = "3";
  }, 150);
});