class JSModal {
  constructor(dialogSelector) {
    this.dialog = document.querySelector(dialogSelector);
    this.closeButton = this.dialog.querySelector(".dialog-close-button");
    this.iframe = this.dialog.querySelector(".modal-iframe");

    this.initEvents();
  }

  // Inicializar eventos
  initEvents() {
    this.closeButton.addEventListener("click", () => this.close());
  }

  open(url = null) {
    if (this.iframe && url) {
      this.iframe.src = url;
    }
    this.dialog.showModal();
  }

  close() {
    this.dialog.close();
    if (this.iframe) {
      this.iframe.src = "";
    }
  }

  setSize(size) {
    const sizeClasses = [
      "dialog--sm",
      "dialog--md",
      "dialog--lg",
      "dialog--xl",
    ];

    sizeClasses.forEach((sizeClass) => this.dialog.classList.remove(sizeClass));

    if (sizeClasses.includes(`dialog--${size}`)) {
      this.dialog.classList.add(`dialog--${size}`);
    } else {
      console.warn(
        `El tamaño "${size}" no es válido. Usa uno de estos valores: sm, md, lg, xl.`
      );
    }
  }
}
