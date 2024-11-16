class JSModal {
  sizes = ["sm", "md", "lg", "xl", "2xl"];
  constructor(selector) {
    this.selector = selector;
    this.modal = document.querySelector(selector);
    this.openButton = document.querySelector(".jsmodal-open-button");
    this.closeButton = document.querySelector(".jsmodal-header__close-button");
    this.modalContent = this.modal.querySelector(".jsmodal-content");
    this.initListeners();
    this.initAttributes();
  }

  initListeners() {
    this.openButton.addEventListener("click", () => this.openModal());
    this.closeButton.addEventListener("click", () => this.closeModal());
  }

  initAttributes() {
    this.modal.setAttribute("role", "dialog");
    this.modal.setAttribute("aria-labelledby", "modaltitle");
    this.modal.setAttribute("aria-describedby", "Modal con información");
  }

  closeModal() {
    this.modal.classList.remove("jsmodal--open");
    const event = new Event("js-modal-close");
    window.dispatchEvent(event);
  }

  openModal() {
    this.modal.classList.add("jsmodal--open");
  }

  modalSize(size) {
    if (this.sizes.includes(size)) {
      this.modalContent.classList.add(`jsmodal-content--${size}`);
    }
  }
}
