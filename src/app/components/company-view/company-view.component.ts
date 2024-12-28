import { Component, Input } from '@angular/core';
import { Invoice } from '../../models/invoice';
import { Company } from '../../models/company';

@Component({
  selector: 'company-view',
  standalone: true,
  imports: [],
  templateUrl: './company-view.component.html'
})
export class CompanyViewComponent {

  @Input() company: Company = new Company();

}
