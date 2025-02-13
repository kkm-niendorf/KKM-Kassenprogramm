import { Component } from '@angular/core';
import { MetaModule } from '../../services/meta.module';
import { SellerDetails, SellerService } from '../../services/seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addseller',
  standalone: true,
  imports: [MetaModule],
  templateUrl: './addseller.component.html',
  styleUrl: './addseller.component.css',
  providers: [SellerService]
})


export class AddsellerComponent {

  newSeller: SellerDetails = {
    id: '',
    firstname: '',
    lastname: '',
    street: '',
    apartmentnumber: 0,
    postleitzahl: '',
    city: '',
    emailadress: '',
    phonenumber: '',
    sellernumber: 0
  };

  constructor(private sellerService: SellerService, private router: Router) {}

  onSubmit() {
    this.sellerService.addSeller(this.newSeller).subscribe((addedSeller) => {
      console.log('Neuer Verkäufer hinzugefügt:', addedSeller);
      // Weiterleitung zur Sellerlist-Component nach erfolgreichem Hinzufügen
      this.router.navigate(['/seller']);
    });
  }

  navigateTo(path: string){
    this.router.navigate([path])
  };

}
