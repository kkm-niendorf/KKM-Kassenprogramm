import { Component, Inject } from '@angular/core';
import { MetaModule } from '../../services/meta.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SellerDetails } from '../../services/seller.service';

@Component({
  selector: 'app-editsellerdialog',
  standalone: true,
  imports: [MetaModule],
  templateUrl: './editsellerdialog.component.html',
  styleUrl: './editsellerdialog.component.css'
})
export class EditsellerdialogComponent {

  constructor(
    public dialogRef: MatDialogRef<EditsellerdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SellerDetails
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
