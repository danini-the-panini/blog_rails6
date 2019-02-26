import { Controller } from "stimulus"

export default class extends Controller {
  connect() {
    this.expand();
  }

  expand() {
    this.element.style.height = "";
    this.element.style.height = `${this.element.scrollHeight}px`;
  }
}
