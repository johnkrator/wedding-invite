export interface ApiResponse {
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

export interface HotelReservationRequest {
  userId: string;
  reserveAHotel: boolean;
  hotelName: string;
  numberOfDays: number;
  amount: number;
}

export interface HotelDetail {
  name: string;
  amount: number;
  totalAmount?: number;
  numberOfDays?: number;
  key: number;
}
