import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private httpClient: HttpClient) { }

  uploadFile(file: File):Observable<string>{
    
    const formData = new FormData();

    formData.append("file", file);
    
    return this.httpClient.post('http://localhost:9090/document/upload', formData,{responseType:'text'});
  }
}
