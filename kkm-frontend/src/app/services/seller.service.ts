import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


export interface SellerDetails {
    id: string;
    firstname: string;
    lastname: string;
    street: string;
    apartmentnumber: number;
    postleitzahl: string;
    city: string;
    emailadress: string;
    phonenumber: string;
    sellernumber: number;
}

@Injectable({
    providedIn: 'root'
})
export class SellerService {
    private sellerUrl = 'http://localhost:8080/api/kkm/sellerdetails';
    private addSellerUrl = 'http://localhost:8080/api/kkm/sellerdetails/addsellerdetails';
    private updateSellerUrl = 'http://localhost:8080/api/kkm/sellerdetails/updatesellerdetail';
    private deleteSellerUrl = 'http://localhost:8080/api/kkm/sellerdetails';

    constructor(private http: HttpClient) {}

    getSellers(): Observable<SellerDetails[]> {
        return this.http.get<SellerDetails[]>(this.sellerUrl);
    }

    addSeller(newSeller: SellerDetails): Observable<SellerDetails> {
        return this.http.post<SellerDetails>(this.addSellerUrl, newSeller);
    }

    updateSeller(id: string, seller: SellerDetails): Observable<SellerDetails> {
        return this.http.put<SellerDetails>(`${this.updateSellerUrl}/${id}`, seller);
    }

    deleteSeller(id: string): Observable<void> {
        return this.http.delete<void>(`${this.deleteSellerUrl}/${id}`)
    }
    


}