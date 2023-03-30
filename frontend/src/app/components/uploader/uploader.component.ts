import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

const URL = 'http://localhost:1234/api/image';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {
  uploader!: FileUploader;
  hasBaseDropZoneOver!: boolean;
  response!: string;

  constructor() {
    this.uploader = new FileUploader({
      url:URL,
      itemAlias: 'image'
    });
    this.hasBaseDropZoneOver = false;
    this.uploader.response
    .subscribe( res => this.response = res );
   }

  ngOnInit(): void {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    // this.uploader.onCompleteItem =
    // (item: any, response: any, status: any, headers: any) => {
    //   console.log('FileUpload:uploaded:', item, status, response);
    //   alert('File uploaded successfully');
    // }
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
}
