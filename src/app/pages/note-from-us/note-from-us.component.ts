import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {
  ThankYouForTheRsvpModalComponent
} from '../../components/modals/thank-you-for-the-rsvp-modal/thank-you-for-the-rsvp-modal.component';

@Component({
  selector: 'app-note-from-us',
  imports: [
    FormsModule,
    RouterLink,
    ThankYouForTheRsvpModalComponent
  ],
  templateUrl: './note-from-us.component.html',
  styleUrl: './note-from-us.component.css'
})
export class NoteFromUsComponent {
  attending: string = '';
  bringingGuest: string = '';

  isModalOpen: boolean = false;

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
