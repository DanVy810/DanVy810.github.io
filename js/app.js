const mobileIcon = document.getElementById("mobile-icon");
const header = document.getElementById("header");
mobileIcon.addEventListener("click", () => {
  const currentState = header.getAttribute("data-opened") === "true"
  header.setAttribute("data-opened", (!currentState).toString())
})
