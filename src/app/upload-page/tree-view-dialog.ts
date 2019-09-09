import { Component, Inject, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'tree-view-dialog',
    templateUrl: 'tree-view-dialog.html',
})
export class UploadPageComponentDialog {

    constructor(public dialogRef: MatDialogRef<UploadPageComponentDialog>) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}