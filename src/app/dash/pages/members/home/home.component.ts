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
    {headerName: 'Username', field: 'username', sortable: true, filter: true },
    {headerName: 'E-mail', field: 'email', sortable: true, filter: true},
    {headerName: 'Contact', field: 'contact', sortable: true, filter: true},
    {headerName: 'Alternate Contact', field: 'contact2', sortable: true, filter: true},
    {headerName: 'Role', field: 'role', sortable: true, filter: true },
    {headerName: 'Description', field: 'desc', sortable: true, filter: true },
    {headerName: 'Last Active', field: 'active', sortable: true, filter: true },
  ];

  rowData = [
    { id: 1, name: 'Aditya Suman', username: 'suman_aditya', email: 'sumanaditya@gmail.com', contact: '1234567890', contact2: '1234352890', role: 'Admin', desc: 'null', active: 'Dec 12 | 9:20 PM' },
    { id: 1, name: 'Aman Singh', username: 'aman_singh22', email: 'amamamamaa@gmail.com', contact: '1234567890', contact2: '1234352890', role: 'Admin', desc: 'null', active: 'Dec 12 | 9:20 PM' },
    { id: 1, name: 'Aditya Suman', username: 'suman_aditya', email: 'sumanaditya@gmail.com', contact: '1234567890', contact2: '1234352890', role: 'Admin', desc: 'null', active: 'Dec 12 | 9:20 PM' },
    { id: 1, name: 'Aman Singh', username: 'aman_singh22', email: 'amamamamaa@gmail.com', contact: '1234567890', contact2: '1234352890', role: 'Admin', desc: 'null', active: 'Dec 12 | 9:20 PM' },
    { id: 1, name: 'Aditya Suman', username: 'suman_aditya', email: 'sumanaditya@gmail.com', contact: '1234567890', contact2: '1234352890', role: 'Admin', desc: 'null', active: 'Dec 12 | 9:20 PM' },
    { id: 1, name: 'Aman Singh', username: 'aman_singh22', email: 'amamamamaa@gmail.com', contact: '1234567890', contact2: '1234352890', role: 'Admin', desc: 'null', active: 'Dec 12 | 9:20 PM' },
    { id: 1, name: 'Aditya Suman', username: 'suman_aditya', email: 'sumanaditya@gmail.com', contact: '1234567890', contact2: '1234352890', role: 'Admin', desc: 'null', active: 'Dec 12 | 9:20 PM' },
    { id: 1, name: 'Aman Singh', username: 'aman_singh22', email: 'amamamamaa@gmail.com', contact: '1234567890', contact2: '1234352890', role: 'Admin', desc: 'null', active: 'Dec 12 | 9:20 PM' },
    { id: 1, name: 'Aditya Suman', username: 'suman_aditya', email: 'sumanaditya@gmail.com', contact: '1234567890', contact2: '1234352890', role: 'Admin', desc: 'null', active: 'Dec 12 | 9:20 PM' },
    { id: 1, name: 'Aman Singh', username: 'aman_singh22', email: 'amamamamaa@gmail.com', contact: '1234567890', contact2: '1234352890', role: 'Admin', desc: 'null', active: 'Dec 12 | 9:20 PM' },
    { id: 1, name: 'Aditya Suman', username: 'suman_aditya', email: 'sumanaditya@gmail.com', contact: '1234567890', contact2: '1234352890', role: 'Admin', desc: 'null', active: 'Dec 12 | 9:20 PM' },
    { id: 1, name: 'Aman Singh', username: 'aman_singh22', email: 'amamamamaa@gmail.com', contact: '1234567890', contact2: '1234352890', role: 'Admin', desc: 'null', active: 'Dec 12 | 9:20 PM' },
    { id: 1, name: 'Aditya Suman', username: 'suman_aditya', email: 'sumanaditya@gmail.com', contact: '1234567890', contact2: '1234352890', role: 'Admin', desc: 'null', active: 'Dec 12 | 9:20 PM' },
    { id: 1, name: 'Aman Singh', username: 'aman_singh22', email: 'amamamamaa@gmail.com', contact: '1234567890', contact2: '1234352890', role: 'Admin', desc: 'null', active: 'Dec 12 | 9:20 PM' },
    { id: 1, name: 'Aditya Suman', username: 'suman_aditya', email: 'sumanaditya@gmail.com', contact: '1234567890', contact2: '1234352890', role: 'Admin', desc: 'null', active: 'Dec 12 | 9:20 PM' },
    { id: 1, name: 'Aman Singh', username: 'aman_singh22', email: 'amamamamaa@gmail.com', contact: '1234567890', contact2: '1234352890', role: 'Admin', desc: 'null', active: 'Dec 12 | 9:20 PM' },
    { id: 1, name: 'Aditya Suman', username: 'suman_aditya', email: 'sumanaditya@gmail.com', contact: '1234567890', contact2: '1234352890', role: 'Admin', desc: 'null', active: 'Dec 12 | 9:20 PM' },
    { id: 1, name: 'Aman Singh', username: 'aman_singh22', email: 'amamamamaa@gmail.com', contact: '1234567890', contact2: '1234352890', role: 'Admin', desc: 'null', active: 'Dec 12 | 9:20 PM' },
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
