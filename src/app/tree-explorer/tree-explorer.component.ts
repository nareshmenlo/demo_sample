import {NestedTreeControl} from '@angular/cdk/tree';
import { Component } from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';


interface FileExplorer {
  name: string;
  children?: FileExplorer[];
}

const TREE_DATA: FileExplorer[] = [
  {
    name: 'root',
    children: [
      {
        name: 'dir1',
        children: [
          {
            name: 'dirx',
            children: [{name: 'file.ext'},
                       {name: 'file1.ext'},
            ]
          }, {name : "file2.ext"}
        ]
      }, {
        name: 'dir6',
        children: [
          {
            name: 'dir0',
            children: [{name: 'file7.ext'},
                       {name: 'file8.ext'},
                       {name: 'file9.ext'},
            ]
          }, 
          
        ]
      }, {name : "file10.ext"}
    ]
  },
];

@Component({
  selector: 'app-tree-explorer',
  templateUrl: './tree-explorer.component.html',
  styleUrls: ['./tree-explorer.component.css']
})
/*export class TreeExplorerComponent implements OnInit {*/

  export class TreeExplorerComponent {
    treeControl = new NestedTreeControl<FileExplorer>(node => node.children);
    dataSource = new MatTreeNestedDataSource<FileExplorer>();
  
    constructor() {
      this.dataSource.data = TREE_DATA;
    }
  
    hasChild = (_: number, node: FileExplorer) => !!node.children && node.children.length > 0;
  }