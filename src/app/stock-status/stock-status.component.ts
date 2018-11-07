import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stock-status',
  templateUrl: './stock-status.component.html'
})
export class StockStatusComponent implements OnChanges {
@Input() stock: number;
@Input() productid: number;
@Output() stockValueChange = new EventEmitter();
color = '';
txtColor = '';
updatedStockValue: number;
stockValueChanged() {
this.stockValueChange.emit({id: this.productid, updatedStockValue: this.updatedStockValue});
this.updatedStockValue = null;
}
  ngOnChanges() {
    if ( this.stock > 10) {
      this.color = 'green';
    } else {
      this.color = 'red';
    }
    this.txtColor = '#fff';
  }

}
