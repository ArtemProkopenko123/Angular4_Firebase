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
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [ItemService, UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }