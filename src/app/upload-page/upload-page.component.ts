import { Component, Inject, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UploadPageComponentDialog } from './tree-view-dialog';
import { DataService } from "../data.service";
import { Subscription } from 'rxjs';

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'app-upload-page',
  templateUrl: 'upload-page.component.html',
  styleUrls: ['upload-page.component.css'],
})
export class UploadPageComponent implements OnInit {

  public subscription: Subscription;
  color = 'green';
  mode = 'determinate';
  value = 0;
  bufferValue = 75;
  filename: string = '';
  uploadCompleted = false;
  uploadDisable = true;
  files: any = [];
  constructor(public dialog: MatDialog, public dataService: DataService) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(UploadPageComponentDialog, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.subscription = this.dataService.currentFileName.subscribe(filename => this.filename = filename);
      if(this.filename!=''){
        this.uploadDisable = false;        
      }            
      console.log(this.uploadDisable);
    });
  }

  uploadDocument() {
    setInterval(() => {
      if (this.value <= 100) {
        this.value = this.value + 20;
      }
      if (this.value == 100) {
        this.uploadCompleted = true;
        this.files.push(this.filename);
        this.dataService.updateUploadedFiles(this.files);
      }
    }, 1000);
  }

  ngOnInit() {
    this.filename = "";
    this.subscription = this.dataService.currentUploadedFiles.subscribe(files => this.files = files)
    // console.log(this.filename);
  }
}

