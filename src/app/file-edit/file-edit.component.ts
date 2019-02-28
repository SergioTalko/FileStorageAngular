import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {FileService} from '../shared/file/file.service';
import {GiphyService} from '../shared/giphy/giphy.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-file-edit',
  templateUrl: './file-edit.component.html',
  styleUrls: ['./file-edit.component.css']
})
export class FileEditComponent implements OnInit, OnDestroy {

  file: any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private fileService: FileService,
              private giphyService: GiphyService) {
  }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.fileService.get(id).subscribe((file: any) => {
          if (file) {
            this.file = file;
            this.giphyService.get(file.name).subscribe(url => file.giphyUrl = url);
            console.log(this.file);
          } else {
            console.log(`File with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/file-list']);
  }

  save(form: NgForm) {
    this.fileService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  update(form: NgForm) {
    this.fileService.updateFile(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }


  remove(id: number) {
    this.fileService.deleteFile(id).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
    this.file = this.file.filter(item => item.id !== id);

  }
}
