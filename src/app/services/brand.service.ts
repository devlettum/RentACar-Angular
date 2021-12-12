import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl ="https://localhost:44323/api/";
  constructor(private httpClient: HttpClient) { }

  getBrands() : Observable<ListResponseModel<Brand>> {
    let newUrl = this.apiUrl +"brands/getall";
    return this.httpClient.get<ListResponseModel<Brand>>(newUrl);
  }
}
