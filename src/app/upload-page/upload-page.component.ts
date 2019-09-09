
import { Component, Inject, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UploadPageComponentDialog } from './tree-view-dialog';
/**
 * @title Dialog Overview
 */
@Component({
  selector: 'app-upload-page',
  templateUrl: 'upload-page.component.html',
  styleUrls: ['upload-page.component.css'],
})
export class UploadPageComponent implements OnInit {

  animal: string;
  namews: string;
  color = 'primary';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;
  filename: string = ''

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(UploadPageComponentDialog, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  ngOnInit() {
  }

}

