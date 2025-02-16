import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SaleDetails } from '../../services/sale.service';
import { MetaModule } from '../../services/meta.module';

@Component({
  selector: 'app-edit-sale-dialog',
  standalone: true,
  imports: [MetaModule],
  templateUrl: './edit-sale-dialog.component.html',
  styleUrl: './edit-sale-dialog.component.css'
})
export class EditSaleDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<EditSaleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SaleDetails
  ) {}

  onSave() {
    this.dialogRef.close(this.data);
  }

  onCancel() {
    this.dialogRef.close();
  }

}
