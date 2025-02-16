import { Component, DestroyRef, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ThankYouForTheRsvpModalComponent } from '../../components/modals/thank-you-for-the-rsvp-modal/thank-you-for-the-rsvp-modal.component';
import { NgIf } from '@angular/common';
import { RsvpService } from '../../services/rsvp.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HttpStatusCode } from '@angular/common/http';
import { PersonalInformationRequest } from '../../models/rvsp.model';
import { ToastrService } from 'ngx-toastr';
import { ConfirmYourReservationModalComponent } from '../../components/modals/confirm-your-reservation-modal/confirm-your-reservation-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { HotelReservationModalComponent } from '../../components/modals/hotel-reservation-modal/hotel-reservation-modal.component';
import { LocalStorageService } from '../../services/storage/local-storage/local-storage.service';

@Component({
  selector: 'app-note-from-us',
  imports: [FormsModule, ReactiveFormsModule, RouterLink, NgIf],
  templateUrl: './note-from-us.component.html',
  styleUrl: './note-from-us.component.css',
})
export class NoteFromUsComponent {
  isSubmitting = signal<boolean>(false);

  rsvpService = inject(RsvpService);
  destroyRef = inject(DestroyRef);
  toast = inject(ToastrService);
  router = inject(Router);
  dialog = inject(MatDialog);
  storage = inject(LocalStorageService);

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
    phone: new FormControl('', [Validators.pattern("^\\+?[0-9]*$")]),
    willAttend: new FormControl(true, Validators.required),
    comingWithAGuest: new FormControl(false, Validators.required),
    numberOfGuests: new FormControl(0, Validators.required),
    guestNames: new FormControl(''),
  });

  ngOnInit(): void {}

  get ctrls() {
    return this.form.controls;
  }

  submit(): void {
    if (!this.form.valid) return;
    this.isSubmitting.set(true);
    let guestNames = this.form.value.guestNames
      ? this.form.value.guestNames.split(',')
      : [''];
    const model: PersonalInformationRequest = {
      ...this.form.value,
      numberOfGuests: guestNames.length,
      guestNames,
    };
    this.rsvpService
      .submitPersonalInformation(model)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response) => {
          this.isSubmitting.set(false);
          if (response.success && response.statusCode == HttpStatusCode.Ok) {
            this.storage.setItem('userId', response.userId);
            this.toast.success(
              response.message ?? 'We have received your details.'
            );
            this.openOrCloseModal();
          } else {
            this.isSubmitting.set(false);
            this.toast.error(
              response.message ??
                'We could not record your details, Please try again.'
            );
          }
        },
        error: (error) => {
          this.isSubmitting.set(false);
          this.toast.error(
            'An error occurred while submitting your RSVP, please make sure you filled all the field correctly and try again.'
          );
          console.error(error);
        },
      });
  }

  openOrCloseModal(): void {
    this.dialog
      .open(ThankYouForTheRsvpModalComponent, {
        width: '600px',
        maxWidth: '90vw',
        maxHeight: '98vh',
      })
      .afterClosed()
      .subscribe((action) => {
        if (action == true) {
          this.dialog
            .open(HotelReservationModalComponent, {
              width: '700px',
              maxWidth: '90vw',
              maxHeight: '98vh',
            })
            .afterClosed()
            .subscribe(() => {
              this.router.navigateByUrl('home');
            });
        } else {
          this.router.navigateByUrl('home');
        }
      });
  }
}
