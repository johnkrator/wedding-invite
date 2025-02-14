import { Component, DestroyRef, inject, signal } from '@angular/core';
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
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HttpStatusCode } from '@angular/common/http';
import { PersonalInformationRequest } from '../../models/rvsp.model';

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
  destroyRef = inject(DestroyRef);

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
    phone: new FormControl('', [Validators.pattern('^[0-9]*$')]),
    password: new FormControl('', Validators.required),
    willAttend: new FormControl(true, Validators.required),
    comingWithAGuest: new FormControl(false, Validators.required),
    numberOfGuests: new FormControl(1, Validators.required),
    guestNames: new FormControl(''),
  });

  ngOnInit(): void {}

  get ctrls() {
    return this.form.controls;
  }

  submit(): void {
    if (!this.form.valid) return;
    this.isSubmitting.set(true);
    const model: PersonalInformationRequest = {
      ...this.form.value,
      guestNames: [
        this.form.value.guestNames ? this.form.value.guestNames.split(',') : '',
      ],
    };
    console.log(model);
    this.rsvpService
      .submitPersonalInformation(model)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response) => {
          this.isSubmitting.set(false);
          if (response.success && response.statusCode == HttpStatusCode.Ok) {
            this.openOrCloseModal();
          }
        },
        error: (error) => {
          this.isSubmitting.set(false);
          console.error(error);
        },
      });
  }

  openOrCloseModal(): void {
    this.isModalOpen.set(!this.isModalOpen());
  }
}
