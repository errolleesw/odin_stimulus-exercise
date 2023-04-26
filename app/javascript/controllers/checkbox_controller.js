import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "checkboxContainer" ]

  highlight() {
    this.checkboxContainerTarget.classList.toggle("highlight", this.element.checked);
  }
}
