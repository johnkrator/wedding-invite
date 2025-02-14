import { Component, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ThankYouForTheRsvpModalComponent } from '../../components/modals/thank-you-for-the-rsvp-modal/thank-you-for-the-rsvp-modal.component';
import { NgIf } from '@angular/common';
import { RsvpService } from '../../services/rsvp.service';

@Component({
  selector: 'app-note-from-us',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    ThankYouForTheRsvpModalComponent,
    NgIf,
  ],
  templateUrl: './note-from-us.component.html',
  styleUrl: './note-from-us.component.css',
})
export class NoteFromUsComponent {
  isModalOpen = signal<boolean>(false);
  isSubmitting = signal<boolean>(false);

  rsvpService = inject(RsvpService);

  form: FormGroup = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    willAttend: new FormControl(true, Validators.required),
    comingWithAGuest: new FormControl(false, Validators.required),
    numberOfGuests: new FormControl(1, Validators.required),
    guestName: new FormControl(''),
  });

  ngOnInit(): void {}

  get ctrls() {
    return this.form.controls;
  }

  submit(): void {
    this.isSubmitting.set(true);
    console.log(this.form.value);
    if (this.form.valid) {
      console.log(this.form.value);
      this.openOrCloseModal();
    }
  }

  openOrCloseModal(): void {
    this.isModalOpen.set(!this.isModalOpen());
  }
}
