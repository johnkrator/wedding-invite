import { Component, inject, signal, DestroyRef, OnInit } from '@angular/core';
import { CurrencyPipe, NgIf } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ConfirmYourReservationModalComponent } from '../confirm-your-reservation-modal/confirm-your-reservation-modal.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HttpStatusCode } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RsvpService } from '../../../services/rsvp.service';
import {
  HotelDetail,
  HotelReservationRequest,
} from '../../../models/rvsp.model';
import { LocalStorageService } from '../../../services/storage/local-storage/local-storage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hotel-reservation-modal',
  imports: [FormsModule, ReactiveFormsModule, CurrencyPipe],
  templateUrl: './hotel-reservation-modal.component.html',
  styleUrl: './hotel-reservation-modal.component.css',
})
export class HotelReservationModalComponent {
  dialog = inject(MatDialog);
  rsvpService = inject(RsvpService);
  dialogRef = inject(MatDialogRef<ConfirmYourReservationModalComponent>);
  isSubmitting = signal<boolean>(false);
  selectedHotel = signal<HotelDetail>(Object.create(null));

  destroyRef = inject(DestroyRef);
  toast = inject(ToastrService);
  storage = inject(LocalStorageService);

  form = new FormGroup({
    hotelNumber: new FormControl(0, Validators.required),
    numberOfDays: new FormControl(0, Validators.required),
    amount: new FormControl(0, Validators.required),
  });

  hotels: HotelDetail[] = [
    { name: ' AZ Hotel, Okposi - 10,000', amount: 10000, key: 0 },
    { name: 'Super Nike - 25,000', amount: 25000, key: 1 },
    { name: 'Osborne La palm (old) - 30,000', amount: 30000, key: 2 },
    { name: 'Osborne La palm (new)- 45,000  ', amount: 45000, key: 3 },
  ];

  calculateAmount(): void {
    this.form.patchValue({
      amount: this.getAmount(
        Number(this.form.value.numberOfDays) ?? 0,
        Number(this.form.value.hotelNumber) ?? 0
      ),
    });
  }

  getAmount(numberOfDays: number, hotelNumber: number): number {
    const hotel: HotelDetail | undefined = this.hotels.find(
      (hotel) => hotel.key === hotelNumber
    );
    if (hotel) {
      let calculatedAmount: number = hotel.amount * numberOfDays;
      this.selectedHotel.set({ ...hotel, amount: calculatedAmount });
      return calculatedAmount;
    }
    return 0;
  }

  onClose() {
    this.dialogRef.close();
  }

  onModalClick(event: Event) {
    event.stopPropagation();
  }

  onSubmit() {
    this.isSubmitting.set(true);
    const model: HotelReservationRequest = {
      reserveAHotel: true,
      userId: this.storage.getItem('userId')!,
      hotelName: this.selectedHotel().name,
      amount: this.selectedHotel().amount,
      numberOfDays: Number(this.form.value.numberOfDays),
    };
    this.rsvpService
      .hotelReservation(model)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response) => {
          if (response.success && response.statusCode == HttpStatusCode.Ok) {
            this.storage.setItem('userId', response.userId);
            this.toast.success(
              response.message ?? 'We have received your details.'
            );
            this.dialog.open(ConfirmYourReservationModalComponent, {
              width: '700px',
              maxWidth: '90vw',
              maxHeight: '98vh',
            });
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

  onConfirmationClose() {
    this.dialogRef.close();
  }
}
