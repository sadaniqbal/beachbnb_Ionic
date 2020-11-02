import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/tab1/place.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceService } from 'src/app/tab1/place.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BookingService } from '../booking.service';


@Component({
  selector: 'app-createbooking',
  templateUrl: './createbooking.page.html',
  styleUrls: ['./createbooking.page.scss'],
})
export class CreatebookingPage implements OnInit {
  place: Place;
  id: String;
  form: FormGroup;
  constructor(
     private route: ActivatedRoute,
     private placeService: PlaceService,
     private bookingService: BookingService,
     private router: Router,

     ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('placeId');
    // console.log(this.id);
    this.place = this.placeService.getPlace(this.id);
    // console.log(this.place);
    this.form = new FormGroup({
      firstName: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      lastName: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      guestNumber: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      dateFrom: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      dateTo: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    });
  }
  onCreateBooking(){
    this.bookingService.addBooking(
      this.place.id,
      this.place.title,
      this.place.image,
      this.form.value.firstName,
      this.form.value.lastName,
      this.form.value.guestNumber,
      new Date(this.form.value.dateFrom),
      new Date(this.form.value.dateTo),
    )
    this.form.reset();
    this.router.navigate(['/booking']);
  }
}
