import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MetaModule } from '../../services/meta.module';
import { SaleService } from '../../services/sale.service';
import { MatDialog } from '@angular/material/dialog';
import { EditSaleDialogComponent } from '../../components/edit-sale-dialog/edit-sale-dialog.component';
import { SellerDetails, SellerService } from '../../services/seller.service';

interface SaleDetails {
  id?: string;
  sellernumber: string;
  summaryprice: string;
}

@Component({
  selector: 'app-verkaufsprogramm',
  standalone: true,
  imports: [MetaModule],
  templateUrl: './verkaufsprogramm.component.html',
  styleUrl: './verkaufsprogramm.component.css',
  providers: [SaleService, SellerService]
})
export class VerkaufsprogrammComponent implements OnInit {
  sale: SaleDetails = { sellernumber: '', summaryprice: '' };
  sales: SaleDetails[] = [];
  sellers: SellerDetails[] = [];
  filteredSellers: SellerDetails[] = [];
  displayedColumns: string[] = ['sellernumber', 'summaryprice', 'actions'];


  constructor(
    private router: Router,
    private saleService: SaleService,
    private sellerService: SellerService,
    private dialog: MatDialog
  ) {}


  ngOnInit() {
    this.loadSales();
    this.loadSellers();
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  loadSales() {
    this.saleService.getSales().subscribe(data => {
      this.sales = data;
    });
  }

  loadSellers() {
    this.sellerService.getSellers().subscribe(data => {
      this.sellers = data;
      this.filteredSellers = data; // Initial alle Verkäufer anzeigen
    });
  }

  addSale() {
    // Konvertiere die Verkäufernummer zu einem String, um den Vergleich korrekt durchzuführen
    const sellerNumberAsString = this.sale.sellernumber.toString();

    // Überprüfe, ob die Verkäufernummer existiert, indem du sie mit den existierenden Verkäufernummern vergleichst
    const isValidSeller = this.sellers.some(seller => seller.sellernumber.toString() === sellerNumberAsString);

    if (!isValidSeller) {
      alert('Die eingegebene Verkäufernummer existiert nicht!');
      return;
    }

    this.saleService.addSale(this.sale).subscribe(() => {
      this.loadSales();
      this.sale = { sellernumber: '', summaryprice: '' };
    });
  }

  editSale(sale: SaleDetails) {
    const dialogRef = this.dialog.open(EditSaleDialogComponent, {
      width: '300px',
      data: { ...sale }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.saleService.updateSale(result.id, result).subscribe(() => {
          this.loadSales();
        });
      }
    });
  }

  deleteSale(id: string) {
    if (confirm('Möchtest du diesen Eintrag wirklich löschen?')) {
      this.saleService.deleteSale(id).subscribe(() => {
        this.loadSales();
      });
    }
  }
}
