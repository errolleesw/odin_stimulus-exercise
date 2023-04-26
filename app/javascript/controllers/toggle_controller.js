import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "dropdown" ]

  connect() {
    console.log("Hello, Toggle!", this.element)
  }

  toggle() {
    const dropdown = this.dropdownTarget
    // toggle the "show" class to show/hide the dropdown menu. The show class needs to be defined in the CSS
    dropdown.classList.toggle("show") 
    // console.log(`Greetings, ${dropdown.element}!` )
  }
}
