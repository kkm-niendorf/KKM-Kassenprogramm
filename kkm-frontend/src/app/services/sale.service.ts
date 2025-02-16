import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SaleDetails {
  id?: string;
  sellernumber: string;
  summaryprice: string;
}

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  private apiUrl = 'http://localhost:8080/api/kkm/saledetails';

  constructor(private http: HttpClient) {}

  getSales(): Observable<SaleDetails[]> {
    return this.http.get<SaleDetails[]>(this.apiUrl);
  }

  addSale(sale: SaleDetails): Observable<SaleDetails> {
    return this.http.post<SaleDetails>(`${this.apiUrl}/addsaledetails`, sale);
  }

  updateSale(id: string, sale: SaleDetails): Observable<SaleDetails> {
    return this.http.put<SaleDetails>(`${this.apiUrl}/updatesaledetail/${id}`, sale);
  }

  deleteSale(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
