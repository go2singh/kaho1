import { Component, OnInit } from '@angular/core';
import { Cities } from '../cities';
import { CityService } from '../city.service';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {


  city: Cities[];


  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.getCity();
  }
  getCity(): void {
    this.cityService.getCity()
    .subscribe(city => this.city = city);
  }

  add(title: string): void {
    title = title.trim();
    if (!title) { return; }
    this.cityService.addCities({ title } as Cities)
      .subscribe(cities => {
        this.city.push(cities);
      });
  }

  delete(cities: Cities): void {
    this.city = this.city.filter(h => h !== cities);
    this.cityService.deleteCities(cities).subscribe();
  }

}
