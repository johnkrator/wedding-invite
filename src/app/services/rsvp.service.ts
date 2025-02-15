import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  HotelReservationRequest,
  PersonalInformationRequest,
  ApiResponse,
} from '../models/rvsp.model';

@Injectable({
  providedIn: 'root',
})
export class RsvpService {
  constructor(private http: HttpClient) {}

  submitPersonalInformation(
    data: PersonalInformationRequest
  ): Observable<ApiResponse> {
    return this.http.post<ApiResponse>('RSVP/Personal_Information', data);
  }

  hotelReservation(data: HotelReservationRequest): Observable<ApiResponse> {
    return this.http.post<ApiResponse>('RSVP/Hotel_Reservation', data);
  }
}
