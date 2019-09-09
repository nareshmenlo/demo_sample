
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TreeModuleModule } from './tree-module/tree-module.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadPageComponent } from './upload-page/upload-page.component';
import { UploadPageComponentDialog } from './upload-page/tree-view-dialog';
import { HistoryPageComponent } from './history-page/history-page.component';
import { TreeExplorerComponent } from './tree-explorer/tree-explorer.component';



@NgModule({
  declarations: [
    AppComponent,
    UploadPageComponent,
    HistoryPageComponent,
    TreeExplorerComponent,
    UploadPageComponentDialog 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,    
    MatNativeDateModule,
    MatProgressBarModule,
    TreeModuleModule
  ],
  entryComponents: [UploadPageComponentDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
