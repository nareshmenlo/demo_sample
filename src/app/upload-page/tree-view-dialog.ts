import { Component, Inject, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from "../data.service";
import { Subscription } from 'rxjs';

@Component({
    selector: 'tree-view-dialog',
    templateUrl: 'tree-view-dialog.html',
})
export class UploadPageComponentDialog {

    constructor(public dialogRef: MatDialogRef<UploadPageComponentDialog>, public dataService: DataService) { }
    fileName: string = '';
    onOkButton: boolean = false;
    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit() {
        this.onOkButton = false;
    }

    receiveFileName($event) {
        this.fileName = $event
        this.onOkButton = true;        
    }

    onOkClick() {
        this.dataService.updateSelectedFileName(this.fileName);
        this.dialogRef.close();
    }

}