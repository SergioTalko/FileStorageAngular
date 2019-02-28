import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class FileService {
  public API = '//localhost:8080';
  public FILE_API = this.API + '/file/';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.FILE_API);
  }

  get(id: number) {
    return this.http.get(this.FILE_API + id);
  }

  save(file: any): Observable<any> {
    let result: Observable<Object>;
    if (file['id']) {
      result = this.http.put(file.FILE_API + file.id, file);
    } else {
      result = this.http.post(this.FILE_API, file);
    }
    return result;
  }


  createFile(file: any): Observable<any> {
    return this.http.post(this.FILE_API, file);
  }

  updateFile(file: any): Observable<any> {
    let result: Observable<Object>;
    result = this.http.put(this.FILE_API + file.id, file);
    return result;
  }

  deleteFile(id: number) {
    return this.http.delete(this.FILE_API + id);
  }

}
