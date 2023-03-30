import { Component, OnInit } from '@angular/core';
import { ImageService } from './services/image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  _image:any;

  constructor(private image:ImageService){}

  ngOnInit(): void {
    this.image.getImages()
    .subscribe((response:any) => {
      this._image = response;
      console.log(this._image);
    })
  }
  title = 'Image-Upload';


}
