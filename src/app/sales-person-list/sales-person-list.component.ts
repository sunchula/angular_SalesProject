import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

//create abn array of objects
salesPersonList: SalesPerson[] = [
  new SalesPerson("Anup","Kumar","anupkumar@gmail.com",50000),
  new SalesPerson("Praveen","Kumar","praveenKumar@gmail.com",70000),
  new SalesPerson("Archana","Kumari","archanakumari@gmail.com",60000),
  new SalesPerson("abc","abc","abc@gmail.com",80000)
];

  constructor() { }

  ngOnInit(): void {
  }

}
