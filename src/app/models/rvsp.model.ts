export interface UserResponse {
  statusCode: number;
  message: string;
  userId: string;
  success: boolean;
}

export interface PersonalInformationRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  willAttend: boolean;
  comingWithAGuest: boolean;
  numberOfGuests: number;
  guestNames: string[];
}
