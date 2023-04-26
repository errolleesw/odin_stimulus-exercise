import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "input", "message" ]

  static values = {
    limit: Number
  }

  initialize() {
    this.limitValue = 280;
  }

  connect() {
    // run the checklimit method every 100 ms
    this.interval = setInterval(() => {
      this.checkLimit();
    }, 100);
  }

  disconnect() {
    clearInterval(this.interval);
  }

  checkLimit() {
    const input = this.inputTarget
    const length = input.value.length;
    const remaining = this.limitValue - length;

    if (remaining >= 0) {
      this.messageTarget.textContent = `${remaining} characters remaining`;
    } else {
      this.messageTarget.textContent = `Exceeded by ${-remaining} characters`;
    }
  }
}
