(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    if (refs.modal.classList.contains("is-hidden")) {
      enableScroll();
    } else {
      disableScroll();
    }
  }

  function disableScroll() {
    if (!refs.modal.classList.contains("is-hidden")) {
      document.body.style.overflow = "hidden";
    }
  }

  function enableScroll() {
    document.body.style.overflow = "";
  }
})();
