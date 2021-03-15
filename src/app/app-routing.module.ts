import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PostPageComponent} from './post-page/post-page.component';
import {PostDetailsComponent} from './post-details/post-details.component';
import {SearchComponent} from './search/search.component';

const routes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'posts', component: PostPageComponent},
  {path: 'posts/:id', component: PostDetailsComponent},

  {path: '**', redirectTo: 'search', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
