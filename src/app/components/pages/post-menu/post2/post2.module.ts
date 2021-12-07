import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post2Component } from './post2.component'
import { RouterModule, Routes } from '@angular/router';
import { CommentsectionModule } from 'src/app/components/comment-section/comment-section.module';


const routes: Routes = [

  {path: '', component: Post2Component}

]

@NgModule({
  declarations: [
    Post2Component
  ],

  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    CommentsectionModule
  ]
})
export class Post2Module { }
