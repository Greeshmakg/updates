import { Component, OnInit } from '@angular/core';
import {AgGridModule} from 'ag-grid-angular/main';
import {FormControl} from '@angular/forms';

@Component({
	templateUrl: 'my-project.component.html',
	styleUrls: ['my-project.component.scss']
})

export class MyProjectComponent implements  OnInit {
	private gridApi;
	private gridColumnApi;
	private rowSelection;
	date = new FormControl(new Date());
	
	columnDefs = [
		{headerName: "Name", field: "name", width: 200, filter: "agTextColumnFilter", floatingFilterComponentParams: { suppressFilterButton: true }},
		{headerName: "Updates", field: "updates", width: 300, suppressFilter: true},
		{headerName: "Comments", field: "comments", width: 300, suppressFilter: true},
		{headerName: "Merges", field: "merges", width: 300, filter: "agTextColumnFilter", floatingFilterComponentParams: { suppressFilterButton: true }}
	];
	rowData = [
		{name: "Sam", updates: "Completed 9 stories", comments: "New user stories to be started after 2 days", merges: "#34345, #565656"},
		{name: "Ram", updates: "", comments: "Waiting for the approval of user story", merges: "#34345, #565656, #578679"},
		{name: "Annie", updates: "Implementation of backend data", comments: "", merges:""}
	];
	defaultColDef = { editable: true };
	onGridReady = (params) => {
			this.gridApi = params.api;
			this.gridColumnApi = params.columnApi;
		}
	createNewRowData =() => {
	  var newData = {
		make: "",
		model: "",
		price: ""
	  };
	  return newData;
	}
	newUpdate = () => {
		var newItem = this.createNewRowData();
		var res = this.gridApi.updateRowData({ add: [newItem] });
	}
	getBooleanValue = (cssSelector) => {
		console.log("GOG");
	}
	onBtExport = () => {
		var params = {
		  fileName: "Project Status"
		};
		this.gridApi.exportDataAsCsv(params);
	}
	ngOnInit(){
	console.log(this.date);
	}
} 