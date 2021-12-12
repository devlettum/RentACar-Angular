import { Component, OnInit } from '@angular/core';
import { RentalDetail } from 'src/app/models/rentalDetail';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css'],
})
export class RentalDetailComponent implements OnInit {
  constructor(private rentalService: RentalService) {}
  rentalDetails: RentalDetail[] = [];
  ngOnInit(): void {
    this.getRentalsDetails();
  }

  getRentalsDetails() {
    this.rentalService.getRentalsDetails().subscribe((response) => {
      this.rentalDetails = response.data;
    });
  }
}
