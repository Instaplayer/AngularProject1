import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post1Component } from './post1.component'
import { RouterModule, Routes } from '@angular/router';
import { CommentsectionModule } from 'src/app/components/comment-section/comment-section.module';


const routes: Routes = [

  {path: '', component: Post1Component}

]

@NgModule({
  declarations: [
    Post1Component
  ],

  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    CommentsectionModule
  ]
})
export class Post1Module { }
