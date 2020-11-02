import { Component } from '@angular/core';
import { BookingService } from './booking.service';
import { Booking } from './booking.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage {
  loadedBookings: Booking[];
  constructor(private bookingService: BookingService) {
    
  }

  ionViewWillEnter() {
    this.loadedBookings = this.bookingService.booking;
  }
  OnRemoveBooking(bookingId:string) {
    this.bookingService.removeBooking(bookingId);
    this.loadedBookings = this.bookingService.booking;
    //To reload page ^
     
  }
}
