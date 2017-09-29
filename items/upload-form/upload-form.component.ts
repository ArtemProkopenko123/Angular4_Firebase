
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { UploadService } from '../shared/upload.service';
import { Upload } from '../shared/upload';
import * as _ from "lodash";

import { ItemService } from '../shared/item.service';
import { Item } from '../shared/item';

@Component({
  selector: 'upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent implements OnInit {

  selectedFiles: FileList;
  currentUpload: Upload;
  items: FirebaseListObservable<Item[]>;
  constructor(
    private upSvc: UploadService,
    private itemSvc: ItemService) { }

  ngOnInit() {
    this.items = this.itemSvc.getItemsList();
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  uploadSingle() {
    let file = this.selectedFiles.item(0);
    var itemsId:string = (<HTMLInputElement>document.getElementById('itemId')).value;
    if(itemsId){
      this.currentUpload = new Upload(file);
      this.currentUpload.items = itemsId;
      this.upSvc.pushUpload(this.currentUpload);
    } else {
      alert("Choise item");
    }
  }
/*
  uploadMulti() {
    let files = this.selectedFiles
    if (_.isEmpty(files)) return;

    let filesIndex = _.range(files.length)
    _.each(filesIndex, (idx) => {
      this.currentUpload = new Upload(files[idx]);
      this.upSvc.pushUpload(this.currentUpload)}
    )
  }
*/

}