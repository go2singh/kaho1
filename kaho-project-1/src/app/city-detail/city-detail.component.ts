import { Component, OnInit, Input  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Cities } from '../cities';
import { CityService } from '../city.service';


@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {

  @Input() cities: Cities;

  constructor(
    private route: ActivatedRoute,
    private cityService: CityService,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.getCities();
  }

  getCities(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cityService.getCities(id)
      .subscribe(cities => this.cities = cities);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.cityService.updateCities(this.cities)
      .subscribe(() => this.goBack());
  }

}
