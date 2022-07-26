import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportantComponent } from './important/important.component';
import { InboxComponent } from './inbox/inbox.component';
import { SentComponent } from './sent/sent.component';

const routes: Routes = [
  {
    path:'',
    component:InboxComponent
  },
  {
    path:'inbox',
    component:InboxComponent
  },
  {
    path:'sent',
    component:SentComponent
  },
  {
    path:'important',
    component:ImportantComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
