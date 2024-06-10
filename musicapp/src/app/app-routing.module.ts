import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ListComponent } from './list/list.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  {path: "",component: LoginpageComponent},
  {path: "home",component: HomepageComponent,
    children:[
      {path: "", component: ChartComponent},
      {path: 'artist/male/all', component: ListComponent},
      {path:'artist/male/arjit', component: ListComponent},
      {path:'artist/male/atif-aslam', component: ListComponent},
      {path: 'artist/female/all', component: ListComponent},
      {path:'artist/female/shreya-ghosal', component: ListComponent},
      {path:'artist/female/neha-kakar', component: ListComponent},
      {path:'mood/happy', component: ListComponent},
      {path:'mood/sad', component: ListComponent},
      {path:'mood/party', component: ListComponent},
      {path:'songs/all', component: ListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
