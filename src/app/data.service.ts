import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private dataSource = new BehaviorSubject([]);
  currentUploadedFiles = this.dataSource.asObservable();

  private fileNameSource = new BehaviorSubject('');
  currentFileName = this.fileNameSource.asObservable();

  constructor() { }

  updateUploadedFiles(files) {
    this.dataSource.next(files)
  }

  updateSelectedFileName(fileName){
    this.fileNameSource.next(fileName);
  }

}