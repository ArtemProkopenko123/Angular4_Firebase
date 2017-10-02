import { FormResultService } from './form/form-result/shared/form-result.service';
import { FormCreaterService } from './form/form-creater/shared/form-creater.service';
import { FormConstructorService } from './form/form-constructor/shared/form-constructor.service';
import { UploadsListComponent } from './items/uploads-list/uploads-list.component';
import { UploadDetailComponent } from './items/upload-detail/upload-detail.component';
import { UploadService } from './items/shared/upload.service';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AppRouterModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { firebaseConfig } from '../environments/firebaseConfig'
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { ItemFormComponent } from './items/item-form/item-form.component';
import { ItemService } from './items/shared/item.service'
import { AngularFireModule } from 'angularfire2';
import { CreateComponent } from './items/create/create.component';
import { ItemComponent } from './items/item/item.component';
import { UploadFormComponent } from './items/upload-form/upload-form.component';
import { UploadListPipe } from './items/shared/upload-list.pipe';
import { FormConstructorComponent } from './form/form-constructor/form-constructor.component';
import { FormCreaterComponent } from './form/form-creater/form-creater.component';
import { FormResultComponent } from './form/form-result/form-result.component';
import { FormResultDetailComponent } from './form/form-result/form-result-detail/form-result-detail.component';
import { FormResultsPipe, TestPipe } from './form/form-result/shared/form-results.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ItemDetailComponent,
    ItemFormComponent,
    PageNotFoundComponent,
    WelcomeComponent,
    CreateComponent,
    ItemComponent,
    UploadFormComponent,
    UploadDetailComponent,
    UploadsListComponent,
    UploadListPipe,
    FormConstructorComponent,
    FormCreaterComponent,
    FormResultComponent,
    FormResultDetailComponent,
    FormResultsPipe,
    TestPipe
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [ItemService, UploadService, FormConstructorService, FormCreaterService,FormResultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
