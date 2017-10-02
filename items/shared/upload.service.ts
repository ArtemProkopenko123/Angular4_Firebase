
import { Injectable } from '@angular/core';
import { Upload } from './upload';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class UploadService {

  uploads: FirebaseListObservable<Upload[]> = null; //  list of uploads
  
  constructor(private db: AngularFireDatabase) { }

  private basePath:string = '/uploads';


  getUploads(query={}): FirebaseListObservable<Upload[]> {
    this.uploads = this.db.list(this.basePath, {
      query: query
    });
    return this.uploads
  }


  deleteUpload(upload: Upload) {
    this.deleteFileData(upload)
    .then( () => {
      this.deleteFileStorage(upload.name)
    })
    .catch(error => console.log(error))
  }

 // Save files
  pushUpload(upload: Upload) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
        // upload in progress
        let snap = snapshot as firebase.storage.UploadTaskSnapshot
        upload.progress = (snap.bytesTransferred / snap.totalBytes) * 100
      },
      (error) => {
        // upload failed
        console.log(error)
      },
      () => {
        // upload success
        upload.url = uploadTask.snapshot.downloadURL
        upload.name = upload.file.name
        upload.size = uploadTask.snapshot.totalBytes
        this.saveFileData(upload)
        return undefined
      }
    );
  }

// Writes the file details to the realtime db
  private saveFileData(upload: Upload) {
    this.db.list('/items/').update(upload.items, {picture:upload.url});
    this.uploads.push(upload);
  }

// Delete from BD
  private deleteFileData(upload: Upload) {
    return this.uploads.remove(upload.$key), this.db.list('/items/').update(upload.items, {picture: ''});
  }
// Delete from Storage
  private deleteFileStorage(name:string) {
    const storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).delete()
  }
}