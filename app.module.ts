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
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ItemService } from './items/shared/item.service'
import { AngularFireModule } from 'angularfire2';
import { CreateComponent } from './items/create/create.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ItemDetailComponent,
    ItemFormComponent,
    PageNotFoundComponent,
    WelcomeComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
