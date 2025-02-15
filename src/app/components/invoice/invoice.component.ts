import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../service/invoice.service';
import { Invoice } from '../../models/invoice';
import { Item } from '../../models/item';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { ClientViewComponent } from '../client-view/client-view.component';
import { ListItemsComponent } from '../list-items/list-items.component';
import { RowItemComponent } from '../row-item/row-item.component';
import { TotalComponent } from '../total/total.component';
import { FormItemComponent } from '../form-item/form-item.component';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [InvoiceViewComponent,
     CompanyViewComponent,
     ClientViewComponent, 
     ListItemsComponent, 
     TotalComponent,
     FormItemComponent],
  templateUrl: './invoice.component.html'
})
export class InvoiceComponent implements OnInit {

  invoice!: Invoice;
  constructor(private service: InvoiceService){


  }
  ngOnInit(): void {
    
    this.invoice = this.service.getInvoice();
  }

  removeItem(id: number): void {
    this.invoice = this.service.remove(id);
  }

  addItem(item: Item) {
    this.invoice = this.service.save(item);

  }

}
