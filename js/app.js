//ModalComic
const comicModalClose = document.querySelector(".modal__comic-close");
const modalContainerComic = document.querySelector(".modal__comic");

comicModalClose.addEventListener("click", (e) => {
  e.preventDefault();
  modalContainerComic.classList.add("modal__comic--hide");
});

//Modal Promo Presale
const presalepricesModalOpen = document.querySelectorAll(
  ".presaleprices__modal-open"
);
const presalepricesModalClose = document.querySelector(
  ".modal__presaleprices-close"
);
const modalContainerPresaleprices = document.querySelector(
  ".modal__container-presaleprices"
);

presalepricesModalOpen.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    modalContainerPresaleprices.classList.add(
      "modal__container-presaleprices--show"
    );
  });
});

presalepricesModalClose.addEventListener("click", (e) => {
  e.preventDefault();
  modalContainerPresaleprices.classList.remove(
    "modal__container-presaleprices--show"
  );
});

//Modal Promo Presale
const presalepromoModalOpen = document.querySelectorAll(
  ".presalepromo__modal-open"
);
const presalepromoModalClose = document.querySelector(
  ".modal__presalepromo-close"
);
const modalContainerPresalepromo = document.querySelector(
  ".modal__container-presalepromo"
);

presalepromoModalOpen.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    modalContainerPresalepromo.classList.add(
      "modal__container-presalepromo--show"
    );
  });
});

presalepromoModalClose.addEventListener("click", (e) => {
  e.preventDefault();
  modalContainerPresalepromo.classList.remove(
    "modal__container-presalepromo--show"
  );
});

//Modal Documents
const documentsModalOpen = document.querySelectorAll(".documents__modal-open");
const documentsModalClose = document.querySelector(".modal__documents-close");
const modalContainerDocuments = document.querySelector(
  ".modal__container-documents"
);

documentsModalOpen.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    modalContainerDocuments.classList.add("modal__container-documents--show");
  });
});

documentsModalClose.addEventListener("click", (e) => {
  e.preventDefault();
  modalContainerDocuments.classList.remove("modal__container-documents--show");
});

//Modal Game Play
const gameplayModalOpen = document.querySelectorAll(".gameplay__modal-open");
const gameplayModalClose = document.querySelector(".modal__gameplay-close");
const modalContainerGameplay = document.querySelector(
  ".modal__container-gameplay"
);

gameplayModalOpen.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    modalContainerGameplay.classList.add("modal__container-gameplay--show");
  });
});

gameplayModalClose.addEventListener("click", (e) => {
  e.preventDefault();
  modalContainerGameplay.classList.remove("modal__container-gameplay--show");
});

//Modal Coming Soon
const comingSoonModalOpen = document.querySelectorAll(
  ".comingsoon__modal-open"
);
const comingSoonModalClose = document.querySelector(".modal__comingsoon-close");
const modalContainerComingSoon = document.querySelector(
  ".modal__container-comingsoon"
);

comingSoonModalOpen.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    modalContainerComingSoon.classList.add("modal__container-comingsoon--show");
  });
});

comingSoonModalClose.addEventListener("click", (e) => {
  e.preventDefault();
  modalContainerComingSoon.classList.remove(
    "modal__container-comingsoon--show"
  );
});

//Menu Modal
const navIcon = document.querySelector(".btn__nav");
const navModal = document.querySelector(".modal__nav");
const navIconClose = document.querySelector(".modal__nav-close");

navIcon.addEventListener("click", (e) => {
  e.preventDefault();
  navModal.classList.add("modal__nav-container--show");
  document.body.classList.add("scroll-off");
});

navIconClose.addEventListener("click", (e) => {
  e.preventDefault();
  navModal.classList.remove("modal__nav-container--show");
  document.body.classList.remove("scroll-off");
});

function setHandleMenuItemClickOnMobile() {
  const elements = Array.from(document.querySelectorAll(".modal__nav a"));

  const modalCloseButton = document.querySelector(".modal__nav-close");

  elements.forEach((element) => {
    element.addEventListener(
      "click",
      () => {
        if (window.matchMedia("(min-width: 901px)").matches) return;

        const eventClick = new CustomEvent("click", {
          bubbles: true,
        });

        modalCloseButton && modalCloseButton.dispatchEvent(eventClick);
      },
      {
        passive: true,
      }
    );
  });
}

setHandleMenuItemClickOnMobile();

//Modal Presale (Count)
const presaleModalIcon = document.querySelector(".modal__presale-close");
const presaleModalCount = document.querySelector(".modal__presale");

presaleModalIcon.addEventListener("click", (e) => {
  e.preventDefault();
  presaleModalCount.classList.add("modal__presale--hide");
});

//Our Nfts Tabs
const icon = document.querySelectorAll(".ournfts__icon");
const tab = document.querySelectorAll(".ournfts__tabs-wrapper");

icon.forEach((cadaIcon, i) => {
  icon[i].addEventListener("click", () => {
    icon.forEach((cadaIcon, i) => {
      icon[i].classList.remove("active-tab");
      tab[i].classList.remove("active-tab");
    });
    icon[i].classList.add("active-tab");
    tab[i].classList.add("active-tab");
  });
});

// Team Slider Swiper
var swiper = new Swiper(".team__slide-content", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    980: {
      slidesPerView: 3,
    },
    1270: {
      slidesPerView: 4,
    },
  },
});

// Scroll Touch Desktop
touchScroll(".roadmap__grid");

function touchScroll($bind = "") {
  const slider = document.querySelector($bind);
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    cancelMomentumTracking();
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
    beginMomentumTracking();
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    var prevScrollLeft = slider.scrollLeft;
    slider.scrollLeft = scrollLeft - walk;
    velX = slider.scrollLeft - prevScrollLeft;
  });

  slider.addEventListener("wheel", (e) => {
    cancelMomentumTracking();
  });
}
// Scroll Drag
const drag = document.querySelector(".nodrag");
drag.ondragstart = () => {
  return false;
};

//Loader
var loader;

function loadNow(opacity) {
  if (opacity <= 0) {
    displayContent();
  } else {
    loader.style.opacity = opacity;
    window.setTimeout(function () {
      loadNow(opacity - 0.1);
    }, 50);
  }
}

function displayContent() {
  loader && (loader.style.display = "none");
  const contentElement = document.getElementById("content");

  contentElement && (contentElement.style.display = "block");
}

document.addEventListener("DOMContentLoaded", function () {
  loader = document.getElementById("loader");
  loadNow(3);
});

//Countdown
function initCountDown(deadline, elementId) {
  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const daysSpan = clock.querySelector(".days");
    const hoursSpan = clock.querySelector(".hours");
    const minutesSpan = clock.querySelector(".minutes");
    const secondsSpan = clock.querySelector(".seconds");

    let intervalId = setInterval(updateClock, 1000);

    function updateClock() {
      const t = getTimeRemaining(endtime);

      daysSpan && (daysSpan.innerHTML = t.days);
      hoursSpan && (hoursSpan.innerHTML = ("0" + t.hours).slice(-2));
      minutesSpan && (minutesSpan.innerHTML = ("0" + t.minutes).slice(-2));
      secondsSpan && (secondsSpan.innerHTML = ("0" + t.seconds).slice(-2));

      if (t.total <= 0) {
        clearInterval(intervalId);
      }
    }

    updateClock();
  }

  initializeClock(elementId, deadline);
}

//initCountDown("June 26 2022 06:00:00 UTC", "clockdiv1");
initCountDown("March 01 2024 00:00:00 UTC", "clockdiv2");
