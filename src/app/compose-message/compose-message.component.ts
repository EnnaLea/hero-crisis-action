import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compose-message',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './compose-message.component.html',
  styleUrl: './compose-message.component.css'
})
export class ComposeMessageComponent {
  details = '';
  message = '';
  sending = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  send() {
    this.sending = true;
    this.details = 'Sending Message...';

    setTimeout(() => {
      this.sending = false;
      this.closePopup();
    }, 1000);
  }

  cancel() {
    this.closePopup();
  }

  closePopup() {
    // Providing a `null` value to the named outlet
    // clears the contents of the named outlet
    this.router.navigate([{outlets: {popup: null}}], {relativeTo: this.route.parent});
  }
}
