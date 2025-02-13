import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-you-have-a-reservation-modal',
  imports: [NgIf],
  templateUrl: './you-have-a-reservation-modal.component.html',
  styleUrl: './you-have-a-reservation-modal.component.css'
})
export class YouHaveAReservationModalComponent {
  @Input() isOpen = false;
  @Output() closeModal = new EventEmitter<void>();

  onClose() {
    this.closeModal.emit();
  }

  onModalClick(event: Event) {
    event.stopPropagation();
  }
}
