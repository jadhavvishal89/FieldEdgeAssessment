import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomerApiServiceService } from 'src/app/Services/customer-api-service.service';
import { customer } from '../home/home.component';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(private CustomerApiServiceService: CustomerApiServiceService) { }

  //customerForm: FormGroup;
  private newCustomer: customer = new customer();

  preview: string = '';
  customerForm = new FormGroup({
    id: new FormControl(''),
    salutation: new FormControl(''),
    initials: new FormControl(''),
    firstname: new FormControl(''),
    firstname_ascii: new FormControl(''),
    gender: new FormControl(''),
    firstname_country_rank: new FormControl(''),
    firstname_country_frequency: new FormControl(''),
    lastname: new FormControl(''),
    lastname_ascii: new FormControl(''),
    lastname_country_rank: new FormControl(''),
    lastname_country_frequency: new FormControl(''),
    email: new FormControl('', Validators.required),
    password: new FormControl(''),
    country_code: new FormControl(''),
    country_code_alpha: new FormControl(''),
    country_name: new FormControl(''),
    primary_language_code: new FormControl(''),
    primary_language: new FormControl(''),
   // balance: new FormControl('', ),
    phone_Number: new FormControl(''),
    currency: new FormControl(''),
  });
  ngOnInit(): void {
    
  }
  
  status: string = "";
  save() {
    this.preview = JSON.stringify(this.customerForm.value);
    this.newCustomer = <customer>this.customerForm.value;
    this.CustomerApiServiceService.addCustomer(this.newCustomer).subscribe(() => this.status = "Added Successfully");
  }

}
