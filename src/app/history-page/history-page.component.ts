import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Subscription, Observable } from 'rxjs';
@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {

  uploadedFiles: any = [];
  private subscription: Subscription;
  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.subscription = this.dataService.currentUploadedFiles.subscribe(files => this.uploadedFiles = files)
  }

  clearHistory() {
    this.uploadedFiles = [];
    this.dataService.updateUploadedFiles(this.uploadedFiles);
  }

  ngOnDestory() {
    this.subscription.unsubscribe();
  }

}
