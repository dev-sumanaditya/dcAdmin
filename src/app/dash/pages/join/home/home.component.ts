import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('queries') agGrid: AgGridAngular;

  private gridApi;
  private gridColumnApi;
  private ischanged:boolean = false;


  columnDefs = [
    {headerName: 'Id', field: 'id', sortable: true, filter: true, checkboxSelection: true },
    {headerName: 'Name', field: 'name', sortable: true, filter: true },
    {headerName: 'E-mail', field: 'email', sortable: true, filter: true},
    {headerName: 'Contact', field: 'contact', sortable: true, filter: true},
    {headerName: 'Country', field: 'country', sortable: true, filter: true},
    {headerName: 'City', field: 'city', sortable: true, filter: true},
    {headerName: 'Field', field: 'field', sortable: true, filter: true},
    {headerName: 'Qualification', field: 'qualification', sortable: true, filter: true},
    {headerName: 'Experience', field: 'experience', sortable: true, filter: true},
    {headerName: 'Skills', field: 'skills', sortable: true, filter: true},
    {headerName: 'Resume', field: 'resume', sortable: true, filter: true}
  ];

  rowData = [
    { id: 1, name: 'Aditya Suman', email: 'sumanaditya@gmail.com', contact: '1234567890', country: 'India', city: 'Delhi', field: 'Computer Science', qualification: 'B.tech CSE', experience: '5', skills: 'Angular, Js, React, HTML', resume: 'resume.pdf'},
    { id: 1, name: 'Aman Singh rajput', email: 'singhaman@gmail.com', contact: '9988998899', country: 'Canada', city: 'something', field: 'Computer Science', qualification: 'B.tech EEE', experience: '10', skills: 'Angular, Js, React, HTML, RXJS, NGXS, Node.js', resume: 'resume.pdf'},
    { id: 1, name: 'John Doe', email: 'johndoe@gmail.com', contact: '9988667788', country: 'USA', city: 'something 2', field: 'Computer Science', qualification: 'B.tech Mech', experience: '3', skills: 'Angular, Js, React, HTML', resume: 'resume.pdf'},
    { id: 1, name: 'Aditya Suman', email: 'sumanaditya@gmail.com', contact: '1234567890', country: 'India', city: 'Delhi', field: 'Computer Science', qualification: 'B.tech CSE', experience: '5', skills: 'Angular, Js, React, HTML', resume: 'resume.pdf'},
    { id: 1, name: 'Aman Singh rajput', email: 'singhaman@gmail.com', contact: '9988998899', country: 'Canada', city: 'something', field: 'Computer Science', qualification: 'B.tech EEE', experience: '10', skills: 'Angular, Js, React, HTML, RXJS, NGXS, Node.js', resume: 'resume.pdf'},
    { id: 1, name: 'John Doe', email: 'johndoe@gmail.com', contact: '9988667788', country: 'USA', city: 'something 2', field: 'Computer Science', qualification: 'B.tech Mech', experience: '3', skills: 'Angular, Js, React, HTML', resume: 'resume.pdf'},
    { id: 1, name: 'Aditya Suman', email: 'sumanaditya@gmail.com', contact: '1234567890', country: 'India', city: 'Delhi', field: 'Computer Science', qualification: 'B.tech CSE', experience: '5', skills: 'Angular, Js, React, HTML', resume: 'resume.pdf'},
    { id: 1, name: 'Aman Singh rajput', email: 'singhaman@gmail.com', contact: '9988998899', country: 'Canada', city: 'something', field: 'Computer Science', qualification: 'B.tech EEE', experience: '10', skills: 'Angular, Js, React, HTML, RXJS, NGXS, Node.js', resume: 'resume.pdf'},
    { id: 1, name: 'John Doe', email: 'johndoe@gmail.com', contact: '9988667788', country: 'USA', city: 'something 2', field: 'Computer Science', qualification: 'B.tech Mech', experience: '3', skills: 'Angular, Js, React, HTML', resume: 'resume.pdf'},
    { id: 1, name: 'Aditya Suman', email: 'sumanaditya@gmail.com', contact: '1234567890', country: 'India', city: 'Delhi', field: 'Computer Science', qualification: 'B.tech CSE', experience: '5', skills: 'Angular, Js, React, HTML', resume: 'resume.pdf'},
    { id: 1, name: 'Aman Singh rajput', email: 'singhaman@gmail.com', contact: '9988998899', country: 'Canada', city: 'something', field: 'Computer Science', qualification: 'B.tech EEE', experience: '10', skills: 'Angular, Js, React, HTML, RXJS, NGXS, Node.js', resume: 'resume.pdf'},
    { id: 1, name: 'John Doe', email: 'johndoe@gmail.com', contact: '9988667788', country: 'USA', city: 'something 2', field: 'Computer Science', qualification: 'B.tech Mech', experience: '3', skills: 'Angular, Js, React, HTML', resume: 'resume.pdf'},
    { id: 1, name: 'Aditya Suman', email: 'sumanaditya@gmail.com', contact: '1234567890', country: 'India', city: 'Delhi', field: 'Computer Science', qualification: 'B.tech CSE', experience: '5', skills: 'Angular, Js, React, HTML', resume: 'resume.pdf'},
    { id: 1, name: 'Aman Singh rajput', email: 'singhaman@gmail.com', contact: '9988998899', country: 'Canada', city: 'something', field: 'Computer Science', qualification: 'B.tech EEE', experience: '10', skills: 'Angular, Js, React, HTML, RXJS, NGXS, Node.js', resume: 'resume.pdf'},
    { id: 1, name: 'John Doe', email: 'johndoe@gmail.com', contact: '9988667788', country: 'USA', city: 'something 2', field: 'Computer Science', qualification: 'B.tech Mech', experience: '3', skills: 'Angular, Js, React, HTML', resume: 'resume.pdf'},
    { id: 1, name: 'Aditya Suman', email: 'sumanaditya@gmail.com', contact: '1234567890', country: 'India', city: 'Delhi', field: 'Computer Science', qualification: 'B.tech CSE', experience: '5', skills: 'Angular, Js, React, HTML', resume: 'resume.pdf'},
    { id: 1, name: 'Aman Singh rajput', email: 'singhaman@gmail.com', contact: '9988998899', country: 'Canada', city: 'something', field: 'Computer Science', qualification: 'B.tech EEE', experience: '10', skills: 'Angular, Js, React, HTML, RXJS, NGXS, Node.js', resume: 'resume.pdf'},
    { id: 1, name: 'John Doe', email: 'johndoe@gmail.com', contact: '9988667788', country: 'USA', city: 'something 2', field: 'Computer Science', qualification: 'B.tech Mech', experience: '3', skills: 'Angular, Js, React, HTML', resume: 'resume.pdf'},
    { id: 1, name: 'Aditya Suman', email: 'sumanaditya@gmail.com', contact: '1234567890', country: 'India', city: 'Delhi', field: 'Computer Science', qualification: 'B.tech CSE', experience: '5', skills: 'Angular, Js, React, HTML', resume: 'resume.pdf'},
    { id: 1, name: 'Aman Singh rajput', email: 'singhaman@gmail.com', contact: '9988998899', country: 'Canada', city: 'something', field: 'Computer Science', qualification: 'B.tech EEE', experience: '10', skills: 'Angular, Js, React, HTML, RXJS, NGXS, Node.js', resume: 'resume.pdf'},
    { id: 1, name: 'John Doe', email: 'johndoe@gmail.com', contact: '9988667788', country: 'USA', city: 'something 2', field: 'Computer Science', qualification: 'B.tech Mech', experience: '3', skills: 'Angular, Js, React, HTML', resume: 'resume.pdf'},
    { id: 1, name: 'Aditya Suman', email: 'sumanaditya@gmail.com', contact: '1234567890', country: 'India', city: 'Delhi', field: 'Computer Science', qualification: 'B.tech CSE', experience: '5', skills: 'Angular, Js, React, HTML', resume: 'resume.pdf'},
    { id: 1, name: 'Aman Singh rajput', email: 'singhaman@gmail.com', contact: '9988998899', country: 'Canada', city: 'something', field: 'Computer Science', qualification: 'B.tech EEE', experience: '10', skills: 'Angular, Js, React, HTML, RXJS, NGXS, Node.js', resume: 'resume.pdf'},
    { id: 1, name: 'John Doe', email: 'johndoe@gmail.com', contact: '9988667788', country: 'USA', city: 'something 2', field: 'Computer Science', qualification: 'B.tech Mech', experience: '3', skills: 'Angular, Js, React, HTML', resume: 'resume.pdf'},
    { id: 1, name: 'Aditya Suman', email: 'sumanaditya@gmail.com', contact: '1234567890', country: 'India', city: 'Delhi', field: 'Computer Science', qualification: 'B.tech CSE', experience: '5', skills: 'Angular, Js, React, HTML', resume: 'resume.pdf'},
    { id: 1, name: 'Aman Singh rajput', email: 'singhaman@gmail.com', contact: '9988998899', country: 'Canada', city: 'something', field: 'Computer Science', qualification: 'B.tech EEE', experience: '10', skills: 'Angular, Js, React, HTML, RXJS, NGXS, Node.js', resume: 'resume.pdf'},
    { id: 1, name: 'John Doe', email: 'johndoe@gmail.com', contact: '9988667788', country: 'USA', city: 'something 2', field: 'Computer Science', qualification: 'B.tech Mech', experience: '3', skills: 'Angular, Js, React, HTML', resume: 'resume.pdf'},
    { id: 1, name: 'Aditya Suman', email: 'sumanaditya@gmail.com', contact: '1234567890', country: 'India', city: 'Delhi', field: 'Computer Science', qualification: 'B.tech CSE', experience: '5', skills: 'Angular, Js, React, HTML', resume: 'resume.pdf'},
    { id: 1, name: 'Aman Singh rajput', email: 'singhaman@gmail.com', contact: '9988998899', country: 'Canada', city: 'something', field: 'Computer Science', qualification: 'B.tech EEE', experience: '10', skills: 'Angular, Js, React, HTML, RXJS, NGXS, Node.js', resume: 'resume.pdf'},
    { id: 1, name: 'John Doe', email: 'johndoe@gmail.com', contact: '9988667788', country: 'USA', city: 'something 2', field: 'Computer Science', qualification: 'B.tech Mech', experience: '3', skills: 'Angular, Js, React, HTML', resume: 'resume.pdf'},
    { id: 1, name: 'Aditya Suman', email: 'sumanaditya@gmail.com', contact: '1234567890', country: 'India', city: 'Delhi', field: 'Computer Science', qualification: 'B.tech CSE', experience: '5', skills: 'Angular, Js, React, HTML', resume: 'resume.pdf'},
    { id: 1, name: 'Aman Singh rajput', email: 'singhaman@gmail.com', contact: '9988998899', country: 'Canada', city: 'something', field: 'Computer Science', qualification: 'B.tech EEE', experience: '10', skills: 'Angular, Js, React, HTML, RXJS, NGXS, Node.js', resume: 'resume.pdf'},
    { id: 1, name: 'John Doe', email: 'johndoe@gmail.com', contact: '9988667788', country: 'USA', city: 'something 2', field: 'Computer Science', qualification: 'B.tech Mech', experience: '3', skills: 'Angular, Js, React, HTML', resume: 'resume.pdf'},
    { id: 1, name: 'Aditya Suman', email: 'sumanaditya@gmail.com', contact: '1234567890', country: 'India', city: 'Delhi', field: 'Computer Science', qualification: 'B.tech CSE', experience: '5', skills: 'Angular, Js, React, HTML', resume: 'resume.pdf'},
    { id: 1, name: 'Aman Singh rajput', email: 'singhaman@gmail.com', contact: '9988998899', country: 'Canada', city: 'something', field: 'Computer Science', qualification: 'B.tech EEE', experience: '10', skills: 'Angular, Js, React, HTML, RXJS, NGXS, Node.js', resume: 'resume.pdf'},
    { id: 1, name: 'John Doe', email: 'johndoe@gmail.com', contact: '9988667788', country: 'USA', city: 'something 2', field: 'Computer Science', qualification: 'B.tech Mech', experience: '3', skills: 'Angular, Js, React, HTML', resume: 'resume.pdf'},
    { id: 1, name: 'Aditya Suman', email: 'sumanaditya@gmail.com', contact: '1234567890', country: 'India', city: 'Delhi', field: 'Computer Science', qualification: 'B.tech CSE', experience: '5', skills: 'Angular, Js, React, HTML', resume: 'resume.pdf'},
    { id: 1, name: 'Aman Singh rajput', email: 'singhaman@gmail.com', contact: '9988998899', country: 'Canada', city: 'something', field: 'Computer Science', qualification: 'B.tech EEE', experience: '10', skills: 'Angular, Js, React, HTML, RXJS, NGXS, Node.js', resume: 'resume.pdf'},
    { id: 1, name: 'John Doe', email: 'johndoe@gmail.com', contact: '9988667788', country: 'USA', city: 'something 2', field: 'Computer Science', qualification: 'B.tech Mech', experience: '3', skills: 'Angular, Js, React, HTML', resume: 'resume.pdf'},
    { id: 1, name: 'Aditya Suman', email: 'sumanaditya@gmail.com', contact: '1234567890', country: 'India', city: 'Delhi', field: 'Computer Science', qualification: 'B.tech CSE', experience: '5', skills: 'Angular, Js, React, HTML', resume: 'resume.pdf'},
    { id: 1, name: 'Aman Singh rajput', email: 'singhaman@gmail.com', contact: '9988998899', country: 'Canada', city: 'something', field: 'Computer Science', qualification: 'B.tech EEE', experience: '10', skills: 'Angular, Js, React, HTML, RXJS, NGXS, Node.js', resume: 'resume.pdf'},
    { id: 1, name: 'John Doe', email: 'johndoe@gmail.com', contact: '9988667788', country: 'USA', city: 'something 2', field: 'Computer Science', qualification: 'B.tech Mech', experience: '3', skills: 'Angular, Js, React, HTML', resume: 'resume.pdf'},
  ];

  public changed() {
    if(this.agGrid.api.getSelectedNodes().length > 0) {
      this.ischanged = true;
    } else {
      this.ischanged = false;
    }
  }


  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.name + ' ' + node.email).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

  onBtnExport() {
    var params = this.getParams();
    this.gridApi.exportDataAsCsv(params);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  public getParams() {
    return {
      suppressQuotes: '',
      columnSeparator: '',
      customHeader: '',
      customFooter: ''
    };
  }

}
