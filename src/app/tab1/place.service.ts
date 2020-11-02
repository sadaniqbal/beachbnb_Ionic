import { Injectable } from "@angular/core";
import { Place } from "./place.model";

@Injectable({
  providedIn: "root",
})
export class PlaceService {
  private _places: Place[] = [
    new Place(
      "p1",
      "Manhattan Mansion",
      "In the heart of New York City",
      "../../assets/images/nyc.jpg",
      149.99,
      new Date("2020-01-01"),
      new Date("2020-12-31"),
      "u1"
    ),
    new Place(
      "p2",
      "L'Amour Toujours",
      "A romantic place in Paris",
      "../../assets/images/paris.jpg",
      189.99,
      new Date("2020-01-01"),
      new Date("2020-12-31"),
      "u1"
    ),
    new Place(
      "p3",
      "The Foggy Palace",
      "Not your average city trip!",
      "../../assets/images/sanf.jpg",
      149.99,
      new Date("2020-01-01"),
      new Date("2020-12-31"),
      "u1"
    ),
  ];
  get places() {
    return [...this._places];
  }
  getPlace(id: String) {
    return { ...this._places.find((p) => p.id === id) };
  }
  addPlace(
    title: string,
    description: string,
    price: number,
    dateFrom: Date,
    dateTo: Date
  ) {
    const newPlace = new Place(
      Math.random().toString(),
      title,
      description,
      "../../assets/images/nyc.jpg",
      price,
      dateFrom,
      dateTo,
      "u1"
    );
    this._places.push(newPlace);
    console.log(this._places);
  }
  updateOffer(
    placeId: string,
    title: string,
    description: string,
    price: number,
    dateFrom: Date,
    dateTo: Date
  ) {
    const updatePlaceIndex = this._places.findIndex((p1) => p1.id === placeId);
    const oldPlace = this._places[updatePlaceIndex];
    this._places[updatePlaceIndex] = new Place(
      oldPlace.id,
      title,
      description,
      oldPlace.image,
      price,
      dateFrom,
      dateTo,
      oldPlace.userId
    );
  }
  removeOffer(id: string) {
    const position = this._places.findIndex((p) => p.id === id);
    this._places.splice(position, 1);
  }
  constructor() {}
}
