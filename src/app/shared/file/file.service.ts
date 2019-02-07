import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class FileService {
  public API = '//localhost:8080';
  public FILE_API = this.API + '/file';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.FILE_API);
  }
  get(id: string) {
    return this.http.get(this.FILE_API + '/' + id);
  }

  save(file: any): Observable<any> {
    let result: Observable<Object>;
    if (file['href']) {
      console.log(file);
      result = this.http.put(file.href, file);
    } else {
      result = this.http.post(this.FILE_API, file);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }

}
