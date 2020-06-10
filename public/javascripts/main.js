window.addEventListener("DOMContentLoaded", () => {
  const pageTopBtn = document.querySelector(".scroll_top");
  pageTopBtn.style.opacity = "0"; // default opacity:0
  pageTopBtn.style.visibility = "hidden"; // default hidden

  function getScrolled() {
    return window.pageYOffset !== undefined
      ? window.pageYOffset
      : document.documentElement.scrollTop;
  }

  window.onscroll = function () {
    if (getScrolled() >= 800) {
      pageTopBtn.style.transitionDuration = "0.6s";
      pageTopBtn.style.opacity = "1";
      pageTopBtn.style.visibility = "visible";
      console.log("visible");
    } else {
      pageTopBtn.style.transitionDuration = "0.6s";
      pageTopBtn.style.opacity = "0";
      pageTopBtn.style.visibility = "hidden";
      console.log("hidden");
    }
  };

  pageTopBtn.addEventListener("click", () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
});

// tingle.js
window.addEventListener("DOMContentLoaded", () => {
  var modal = new tingle.modal({
    footer: false,
    stickyFooter: false,
    closeMethods: ["overlay", "button", "escape"],
    closeLabel: "Close",
    cssClass: ["custom-class-1", "custom-class-2"],
    onOpen: function () {
      console.log("modal open");
    },
    onClose: function () {
      console.log("modal closed");
    },
    beforeClose: function () {
      // here's goes some logic
      // e.g. save content before closing the modal
      return true; // close the modal
      return false; // nothing happens
    },
  });
  //const items = document.querySelectorAll(
  //  ".contents-item, .contents-item2, .contents-item3, .contents-item4, .contents-item5, .contents-item6, .contents-item7, .contents-item8"
  //);
  const images = document.querySelectorAll(".image");
  Array.from(images).forEach((item) => {
    item.addEventListener("click", () => {
      modal.setContent(
        `<div class="tingle-modal-box__image">${item.outerHTML}</div>
        <div class="tingle-modal-box__section">
        <h2>Jerry fish</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        commodo consequat. </p>
        <div class="tingle-modal-box__section_footer">
        <div class="left"><div class="heart-icon">♡</div><p class="likes">1,000</p></div>
        <div class="right"><p class="date">Friday, 2 Sep 2016</p></div>
        </div>`
      );
      modal.open();
    });
  });
});
