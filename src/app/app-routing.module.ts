import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadPageComponent } from './upload-page/upload-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { TreeExplorerComponent } from './tree-explorer/tree-explorer.component';
const routes: Routes = [
  { path: 'upload', component:  UploadPageComponent },
  { path: 'history', component:  HistoryPageComponent },
  { path: 'tree', component:  TreeExplorerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
