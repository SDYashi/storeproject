import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MystoreServicesService {

  // private readonly baseUrl = '/apis';
  private readonly baseUrl = 'http://127.0.0.1:5000';
  constructor(private http: HttpClient) { }

  adddtestreportdata(test_report_formdata: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/ngbreports_api/v1/api/add_testreport`, { test_report_formdata});
  }
  adddtrcapacity(dtr_capacity_formdata: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/ngbreports_api/v1/api/add_dtr_capacity`, { dtr_capacity_formdata});
  }
  addcustomername(customer_name_formdata: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/ngbreports_api/v1/api/add_customer_name`, { customer_name_formdata});
  }
  getdtrcapacity(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/ngbreports_api/v1/api/get_all_dtr_capacity`);
  }
  gettestreport(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/ngbreports_api/v1/api/get_testreport`);
  }
  getsamplecode(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/ngbreports_api/v1/api/get_samplecode`);
  }
  getcustomername(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/ngbreports_api/v1/api/get_customer_name`);
  }

}
