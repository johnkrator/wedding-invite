import {Component} from '@angular/core';
import {
  HotelReservationModalComponent
} from '../../components/modals/hotel-reservation-modal/hotel-reservation-modal.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-email-template',
  imports: [
    HotelReservationModalComponent,
    RouterLink
  ],
  templateUrl: './email-template.component.html',
  styleUrl: './email-template.component.css'
})
export class EmailTemplateComponent {
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
