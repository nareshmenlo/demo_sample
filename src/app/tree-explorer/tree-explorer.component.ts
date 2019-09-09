import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Output, EventEmitter } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree'; 3
import { DataService } from "../data.service";

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
            children: [{ name: 'file.txt' },
            { name: 'file1.txt' },
            ]
          }, { name: "file2.txt" }
        ]
      }, {
        name: 'dir6',
        children: [
          {
            name: 'dir0',
            children: [{ name: 'file7.txt' },
            { name: 'file8.txt' },
            { name: 'file9.txt' },
            ]
          },

        ]
      }, { name: "file10.txt" }
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
  fileName: string = ""
  treeControl = new NestedTreeControl<FileExplorer>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FileExplorer>();
  @Output() fileNameEvent = new EventEmitter<string>();

  hasListener: any[] = [];

  constructor(public dataService: DataService) {
    this.dataSource.data = TREE_DATA;
  }


  hasChild = (_: number, node: FileExplorer) => {
    return !!node.children && node.children.length > 0
  };

  nodeSelected(node) {
    this.fileName = node.name;
    this.fileNameEvent.emit(this.fileName)
  }

}
