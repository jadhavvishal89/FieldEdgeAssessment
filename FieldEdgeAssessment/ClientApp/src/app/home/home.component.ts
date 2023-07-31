import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerApiServiceService } from 'src/app/Services/customer-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  customerlist: customer[] = [];
  status: string = "";
  constructor(private CustomerApiServiceService: CustomerApiServiceService, private router: Router) {

  }
  ngOnInit() {
    this.CustomerApiServiceService.getCustomer().subscribe((data: customer[])=> {
      this.customerlist = data;
    })
    console.log(this.customerlist);
  }
  delete(id: string) {
    if (confirm("Are sure to delete it?")) {
      this.CustomerApiServiceService.deleteCustomer(id).subscribe(() => this.status = "delete Successfully");
      this.ngOnInit();
    }
    
  }
  AddCustomer() {
    this.router.navigate(['addCustomer']);
  }

  update(id: string) {
    this.CustomerApiServiceService.deleteCustomer(id).subscribe(() => this.status = "Update Successfully");
  }
}
export class customer {
  id: string="";
  salutation: string = "";
  initials: string = "";
  firstname: string = "";
  firstname_ascii: string = "";
  gender: string = "";
  firstname_country_rank: string = "";
  firstname_country_frequency: string = "";
  lastname: string = "";
  lastname_ascii: string = "";
  lastname_country_rank: string = "";
  lastname_country_frequency: string = "";
  email: string = "";
  password: string = "";
  country_code: string = "";
  country_code_alpha: string = "";
  country_name: string = "";
  primary_language_code: string = "";
  primary_language: string = "";
  balance: number = 0;
  phone_Number: string = "";
  currency: string = "";
}
