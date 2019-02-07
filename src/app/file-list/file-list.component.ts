import { Component, OnInit } from '@angular/core';
import { FileService } from '../shared/file/file.service';
import { GiphyService } from '../shared/giphy/giphy.service';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {
  files: Array<any>;

  constructor(private fileService: FileService, private giphyService: GiphyService) {
  }

  ngOnInit() {
    this.fileService.getAll().subscribe(data => {
      this.files = data;
      for (const file of this.files) {
        this.giphyService.get(file.name).subscribe(url => file.giphyUrl = url);
      }
    });
  }
}
