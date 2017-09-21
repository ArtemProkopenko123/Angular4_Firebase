import { CreateComponent } from './items/create/create.component';
import { WelcomeComponent } from './home/welcome.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: '',  redirectTo: '/home', pathMatch: 'full'},
    { path: 'items', component: ItemsListComponent },
    { path: 'items/create',component: CreateComponent},
    { path: 'home', component: WelcomeComponent},
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
}) 

export class AppRouterModule {}