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

  // modal window contents setting
  const items = document.querySelectorAll(
    ".contents-item, .contents-item2, .contents-item3, .contents-item4, .contents-item5, .contents-item6, .contents-item7, .contents-item8"
  );

  Array.from(items).forEach((item) => {
    item.addEventListener("click", () => {
      const image = item.querySelector("img");
      const title = item.querySelector(".title");
      const text = item.querySelector(".text");
      const like = item.querySelector(".like");
      const date = item.querySelector("time");
      modal.setContent(
        `<div class="tingle-modal-box__image">${image.outerHTML}</div>
        <div class="tingle-modal-box__section">
          <h2>${title.innerHTML}</h2>
          <p>${text.innerHTML}</p>
          <div class="tingle-modal-box__section_footer">
            <div class="left">
              <div class="heart-icon">
                <label id="favorite" for="heart_checkbox">
                <input type="checkbox" id="heart_checkbox">
                <i class="material-icons md-24">favorite</i>
                </label>
              </div>
              <p class="likes">${like.innerHTML}</p>
            </div>
            <div class="right">
              <p class="date">${date.innerHTML}</p>
            </div>
          </div>
        </div>`
      );
      modal.open();

      document.querySelector(".heart-icon").onclick = function () {
        debugger;
        let favorite = document.querySelector(".likes").innerHTML;
        console.log("a", document.getElementById("heart_checkbox").checked);
        debugger;
        if (document.getElementById("heart_checkbox").checked == false) {
          favorite = ++favorite;
          document.querySelector(".likes").innerHTML = favorite;
          document.querySelector(".heart-icon").style.color = "#e2154d";
        } else {
          favorite--;
          document.querySelector(".likes").innerHTML = favorite;
          document.querySelector(".heart-icon").style.color = "#fff";
        }
      };
    });
  });
});
