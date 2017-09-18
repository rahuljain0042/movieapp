import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { MovieServiceService } from './movie-service.service';
import { FavouritesComponent } from './favourites/favourites.component';
import { MovieappComponent } from './movieapp/movieapp.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes:Routes =[
{
  path:'dashboard',
  component: DashboardComponent
},
{
   path:'search',
   component : ListComponent
 },
{
  path:'favourites',
  component:FavouritesComponent
},
{
  path: 'movieapp',
  component: MovieappComponent
},
{
  path:'del',
  component: FavouritesComponent
},
// {
//   path:'',
//    component:MovieappComponent
//  }
{
  path:'',
  redirectTo: '/dashboard',
  pathMatch:'full'
}
];
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListComponent,
    FavouritesComponent,
    MovieappComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MovieServiceService],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }
