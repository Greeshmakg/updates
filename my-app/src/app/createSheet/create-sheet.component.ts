import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { urlManagerService } from '../urlManger.service';

@Component({
	templateUrl: 'create-sheet.component.html',
	styleUrls: ['create-sheet.component.scss']
})

export class CreateSheetComponent {
	createSheet: FormGroup;
	gridColumns = [];
	permissionsTo = [];
	columnName;
	constructor(fb: FormBuilder, private urlManger: urlManagerService){
		this.createSheet = fb.group ({
			fileName: new FormControl(),
			sheetColumns: new FormControl(),
			employeeName: new FormControl(),
		});
	}
	updateColumns = (value:string) => {
		if(value && this.gridColumns.indexOf(value) === -1) {
			this.gridColumns.push(value);
		}
	};
	updatePermissions = (value:string) => {
		if(value && this.permissionsTo.indexOf(value) === -1) {
			this.permissionsTo.push(value);
		}
	};
	addSheet = () => {
		let payLoad = {
			'name': 'My sheet',
			'columns': 'My Columns',
			'permissions': 'My permissions'
		}
		this.urlManger.createSheet(payLoad).subscribe(
			res => {
			console.log(res)
		});
	}
} 