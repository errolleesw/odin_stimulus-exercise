import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "name" ]

  connect() {
    // this.element.textContent = "Hello World!"
    console.log("Hello, Stimulus!", this.element)
  }

  greet() {
    const element = this.nameTarget
    const name = element.value
    console.log(`Greetings, ${name}!` )
  }
}
