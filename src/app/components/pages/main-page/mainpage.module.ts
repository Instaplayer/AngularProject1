import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './mainpage.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

    {path: '', component: MainpageComponent}

]

@NgModule({
  declarations: [MainpageComponent],
  imports: [
    
    RouterModule.forChild(routes),
    CommonModule

  ]
})
export class MainpageModule { }
