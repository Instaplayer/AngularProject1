import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subpage1s1Component } from './subpage1s1.component'
import { RouterModule, Routes } from '@angular/router';
import { CommentsectionModule } from 'src/app/components/commentsection/commentsection.module';


const routes: Routes = [

  {path: '', component: Subpage1s1Component}

]

@NgModule({
  declarations: [
    Subpage1s1Component
  ],

  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    CommentsectionModule
  ]
})
export class Subpage1s1Module { }
