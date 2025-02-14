import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonalInformationRequest, UserResponse } from '../models/rvsp.model';

@Injectable({
  providedIn: 'root',
})
export class RsvpService {
  constructor(private http: HttpClient) {}

  submitPersonalInformation(
    data: PersonalInformationRequest
  ): Observable<UserResponse> {
    return this.http.post<UserResponse>('RSVP/Personal_Information', data);
  }
}
