import { UploadService } from './../shared/upload.service';
import { Upload } from './../shared/upload';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'upload-detail',
  templateUrl: './upload-detail.component.html',
  styleUrls: ['./upload-detail.component.css']
})
export class UploadDetailComponent {

  @Input() upload: Upload;
  
    constructor(private upSvc: UploadService) {}
  
    deleteUpload(upload) {
      this.upSvc.deleteUpload(this.upload)
    }
  
  }
