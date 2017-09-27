import { FirebaseListObservable } from 'angularfire2/database';
import { Upload } from './../shared/upload';
import { UploadService } from './../shared/upload.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'uploads-list',
  templateUrl: './uploads-list.component.html',
  styleUrls: ['./uploads-list.component.css']
})


export class UploadsListComponent implements OnInit {

  uploads: FirebaseListObservable<Upload[]>;

  constructor(private upSvc: UploadService) {}

  ngOnInit() {
    this.uploads = this.upSvc.getUploads(); 
  }

}
