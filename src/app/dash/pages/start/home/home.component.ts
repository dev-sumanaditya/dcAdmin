import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('queries') agGrid: AgGridAngular;

  constructor() { }

  ngOnInit() {
  }

  private gridApi;
  private gridColumnApi;
  private ischanged:boolean = false;

  columnDefs = [
        {headerName: 'Id', field: 'id', sortable: true, filter: true, checkboxSelection: true },
        {headerName: 'Name', field: 'name', sortable: true, filter: true },
        {headerName: 'E-mail', field: 'email', sortable: true, filter: true},
        {headerName: 'Contact', field: 'contact', sortable: true, filter: true},
        {headerName: 'Type', field: 'type', sortable: true, filter: true},
        {headerName: 'size', field: 'size', sortable: true, filter: true},
        {headerName: 'Job', field: 'job', sortable: true, filter: true},
        {headerName: 'Enterprise', field: 'enterprise', sortable: true, filter: true},
        {headerName: 'Company Name', field: 'cname', sortable: true, filter: true},
        {headerName: 'Query', field: 'query', sortable: true, filter: true},
        {headerName: 'Country', field: 'country', sortable: true, filter: true}
  ];

  rowData = [
        { id: 1, name: 'Aditya Suman', email: 'sumanaditya@gmail.com', contact: '1234567890', type: 'Website', size: 'small', job: 'Contract', enterprise: 'No', cname:'DeltaCodes Inc.', query: 'this is some query', country: 'India'},
        { id: 1, name: 'Abhishek Singh', email: 'asingh@gmail.com', contact: '9989998899', type: 'Mobile app', size: 'medium', job: 'small', enterprise: 'Yes', cname:'DeltaCodes Inc.', query: 'this is some query', country: 'India'},
        { id: 1, name: 'Aditya Suman', email: 'sumanaditya@gmail.com', contact: '1234567890', type: 'Website', size: 'small', job: 'Contract', enterprise: 'No', cname:'DeltaCodes Inc.', query: 'this is some query', country: 'India'},
        { id: 1, name: 'Abhishek Singh', email: 'asingh@gmail.com', contact: '9989998899', type: 'Mobile app', size: 'medium', job: 'small', enterprise: 'Yes', cname:'DeltaCodes Inc.', query: 'this is some query', country: 'India'},
        { id: 1, name: 'Aditya Suman', email: 'sumanaditya@gmail.com', contact: '1234567890', type: 'Website', size: 'small', job: 'Contract', enterprise: 'No', cname:'DeltaCodes Inc.', query: 'this is some query', country: 'India'},
        { id: 1, name: 'Abhishek Singh', email: 'asingh@gmail.com', contact: '9989998899', type: 'Mobile app', size: 'medium', job: 'small', enterprise: 'Yes', cname:'DeltaCodes Inc.', query: 'this is some query', country: 'India'},
        { id: 1, name: 'Aditya Suman', email: 'sumanaditya@gmail.com', contact: '1234567890', type: 'Website', size: 'small', job: 'Contract', enterprise: 'No', cname:'DeltaCodes Inc.', query: 'this is some query', country: 'India'},
        { id: 1, name: 'Abhishek Singh', email: 'asingh@gmail.com', contact: '9989998899', type: 'Mobile app', size: 'medium', job: 'small', enterprise: 'Yes', cname:'DeltaCodes Inc.', query: 'this is some query', country: 'India'},
        { id: 1, name: 'Aditya Suman', email: 'sumanaditya@gmail.com', contact: '1234567890', type: 'Website', size: 'small', job: 'Contract', enterprise: 'No', cname:'DeltaCodes Inc.', query: 'this is some query', country: 'India'},
        { id: 1, name: 'Abhishek Singh', email: 'asingh@gmail.com', contact: '9989998899', type: 'Mobile app', size: 'medium', job: 'small', enterprise: 'Yes', cname:'DeltaCodes Inc.', query: 'this is some query', country: 'India'},
        { id: 1, name: 'Aditya Suman', email: 'sumanaditya@gmail.com', contact: '1234567890', type: 'Website', size: 'small', job: 'Contract', enterprise: 'No', cname:'DeltaCodes Inc.', query: 'this is some query', country: 'India'},
        { id: 1, name: 'Abhishek Singh', email: 'asingh@gmail.com', contact: '9989998899', type: 'Mobile app', size: 'medium', job: 'small', enterprise: 'Yes', cname:'DeltaCodes Inc.', query: 'this is some query', country: 'India'},
        { id: 1, name: 'Aditya Suman', email: 'sumanaditya@gmail.com', contact: '1234567890', type: 'Website', size: 'small', job: 'Contract', enterprise: 'No', cname:'DeltaCodes Inc.', query: 'this is some query', country: 'India'},
        { id: 1, name: 'Abhishek Singh', email: 'asingh@gmail.com', contact: '9989998899', type: 'Mobile app', size: 'medium', job: 'small', enterprise: 'Yes', cname:'DeltaCodes Inc.', query: 'this is some query', country: 'India'},
        { id: 1, name: 'Aditya Suman', email: 'sumanaditya@gmail.com', contact: '1234567890', type: 'Website', size: 'small', job: 'Contract', enterprise: 'No', cname:'DeltaCodes Inc.', query: 'this is some query', country: 'India'},
        { id: 1, name: 'Abhishek Singh', email: 'asingh@gmail.com', contact: '9989998899', type: 'Mobile app', size: 'medium', job: 'small', enterprise: 'Yes', cname:'DeltaCodes Inc.', query: 'this is some query', country: 'India'},
        { id: 1, name: 'Aditya Suman', email: 'sumanaditya@gmail.com', contact: '1234567890', type: 'Website', size: 'small', job: 'Contract', enterprise: 'No', cname:'DeltaCodes Inc.', query: 'this is some query', country: 'India'},
        { id: 1, name: 'Abhishek Singh', email: 'asingh@gmail.com', contact: '9989998899', type: 'Mobile app', size: 'medium', job: 'small', enterprise: 'Yes', cname:'DeltaCodes Inc.', query: 'this is some query', country: 'India'},
        { id: 1, name: 'Aditya Suman', email: 'sumanaditya@gmail.com', contact: '1234567890', type: 'Website', size: 'small', job: 'Contract', enterprise: 'No', cname:'DeltaCodes Inc.', query: 'this is some query', country: 'India'},
        { id: 1, name: 'Abhishek Singh', email: 'asingh@gmail.com', contact: '9989998899', type: 'Mobile app', size: 'medium', job: 'small', enterprise: 'Yes', cname:'DeltaCodes Inc.', query: 'this is some query', country: 'India'},
        { id: 1, name: 'Aditya Suman', email: 'sumanaditya@gmail.com', contact: '1234567890', type: 'Website', size: 'small', job: 'Contract', enterprise: 'No', cname:'DeltaCodes Inc.', query: 'this is some query', country: 'India'},
        { id: 1, name: 'Abhishek Singh', email: 'asingh@gmail.com', contact: '9989998899', type: 'Mobile app', size: 'medium', job: 'small', enterprise: 'Yes', cname:'DeltaCodes Inc.', query: 'this is some query', country: 'India'},
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
