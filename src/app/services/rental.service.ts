import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { RentalDetail } from '../models/rentalDetail';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:44323/api/';
  constructor(private httpClient: HttpClient) {}

  getRentalsDetails(): Observable<ListResponseModel<RentalDetail>> {
    let newUrl = this.apiUrl + 'rentals/getrentalsdetails';
    return this.httpClient.get<ListResponseModel<RentalDetail>>(newUrl);
  }
}
