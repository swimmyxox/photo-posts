window.addEventListener("DOMContentLoaded", () => {
  const pageTopBtn = document.querySelector(".scroll_top");
  pageTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
