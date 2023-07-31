import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerApiServiceService {
  apiurl ="https://localhost:7278/api"

  constructor(private http: HttpClient) { }

  getCustomer(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiurl}/Customers`)
  }

  getCustomerById(id: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiurl}/Customers/${id}`)
  }

  addCustomer(post: any): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiurl}/Customers`, post)
  }

  updateCustomer(id: number, post: any): Observable<any[]> {
    return this.http.put<any[]>(`${this.apiurl}/Customers/${id}`, post)
  }

  deleteCustomer(id: string,): Observable<any[]> {
    return this.http.delete<any[]>(`${this.apiurl}/Customers?id=${id}`)
  }

}
