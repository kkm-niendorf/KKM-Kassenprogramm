import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MetaModule } from '../../services/meta.module';
import { SellerDetails, SellerService } from '../../services/seller.service';
import { MatDialog } from '@angular/material/dialog';
import { EditsellerdialogComponent } from '../../components/editsellerdialog/editsellerdialog.component';


@Component({
  selector: 'app-sellerlist',
  standalone: true,
  imports: [MetaModule],
  templateUrl: './sellerlist.component.html',
  styleUrl: './sellerlist.component.css',
  providers: [SellerService]
})

export class SellerlistComponent implements OnInit {

  displayedColumns: string[] = ['Vorname', 'Nachname', 'Straße', 'Nummer', 'Postleitzahl', 'Wohnort', 'Email', 'Telefonnummer', 'Verkaufsnummer', 'Aktionen'];
  datasource: SellerDetails[] = [];
  constructor(private router: Router, private sellerService: SellerService, private dialog: MatDialog) {}

  ngOnInit() {
      this.sellerService.getSellers().subscribe((data) => {
        this.datasource = data;
      })
  }

  navigateTo(path: string){
    this.router.navigate([path])
  };

  updateSeller(element: SellerDetails) {
    this.sellerService.updateSeller(element.id, element).subscribe(() => {
      console.log('Daten erfolgreich aktualisiert.');
    });
  }
  

  editSeller(element: SellerDetails) {
    const dialogRef = this.dialog.open(EditsellerdialogComponent, {
      width: '400px',
      data: { ...element }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateSeller(result);
      }
    });
  }

  deleteSeller(id: string) {
    this.sellerService.deleteSeller(id).subscribe(() => {
      this.datasource = this.datasource.filter(seller => seller.id !== id);
      console.log('Eintrag erfolgreich gelöscht.');
    });
  }



}
