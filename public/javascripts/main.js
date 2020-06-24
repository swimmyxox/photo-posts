window.addEventListener("DOMContentLoaded", () => {
  const pageTopBtn = document.querySelector(".btn-ScrollTop");
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

const handleFavorite = (event) => {
  event.preventDefault();
  let favorite = document.querySelector(".likes").innerHTML;
  const heartCheckbox = document.getElementById("heart_checkbox");

  if (heartCheckbox.checked) {
    favorite--;
    heartCheckbox.checked = false;
    document.querySelector(".likes").innerHTML = favorite;
    document.querySelector(".heart-icon").style.color = "#fff";
  } else {
    favorite++;
    heartCheckbox.checked = true;
    document.querySelector(".likes").innerHTML = favorite;
    document.querySelector(".heart-icon").style.color = "#e2154d";
  }
};

// tingle.js
window.addEventListener("DOMContentLoaded", () => {
  var modal = new tingle.modal({
    footer: false,
    stickyFooter: false,
    closeMethods: ["overlay", "button", "escape"],
    closeLabel: "Close",
    cssClass: ["custom-class-1", "custom-class-2"],
    onOpen: function () {
      document
        .querySelector(".heart-icon")
        .addEventListener("click", handleFavorite);
    },
    onClose: function () {
      document
        .querySelector(".heart-icon")
        .removeEventListener("click", handleFavorite);
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
    ".contents_item, .contents_item2, .contents_item3, .contents_item4, .contents_item5, .contents_item6, .contents_item7, .contents_item8"
  );

  Array.from(items).forEach((item) => {
    item.addEventListener("click", () => {
      const image = item.querySelector("img");
      const title = item.querySelector(".title");
      const text = item.querySelector(".text");
      let likes = Math.floor(Math.random() * 9999 + 1);
      const date = item.querySelector("time");
      modal.setContent(
        `<div class="tingle-modal-box__image">${image.outerHTML}</div>
        <div class="tingle-modal-box__section">
          <h2 class="section__title">${title.innerHTML}</h2>
          <p class="section__text">${text.innerHTML}</p>
          <div class="section__status">
            <div class="favorite">
              <div class="heart-icon">
                <label id="favorite" for="heart_checkbox">
                <input type="checkbox" id="heart_checkbox">
                <i class="material-icons md-24">favorite</i>
                </label>
              </div>
              <p class="likes">${likes}</p>
            </div>
            <div class="date">
              <time>${date.innerHTML}</time>
            </div>
          </div>
        </div>`
      );
      modal.open();
    });
  });
});
