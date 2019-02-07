import { Component, OnInit } from '@angular/core';
import { FileService } from '../shared/file/file.service';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {
  files: Array<any>;

  constructor(private fileService: FileService) {
  }

  ngOnInit() {
    this.fileService.getAll().subscribe(data => {
      this.files = data;
    });
  }
}
