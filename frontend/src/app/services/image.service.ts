import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const IMAGES_URL = 'http://localhost:1234/api/images'

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http:HttpClient) { }

  getImages():Observable<any>{
    return this.http.get<any>(IMAGES_URL)
  }
}
