import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';

const routes: Routes = [   
  {
    path: 'technology',
    component: FeedComponent,
    data: { category:'Technology' }
  } ,
  {
  path: '',
  component: FeedComponent,
  data: { category:'Science' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
