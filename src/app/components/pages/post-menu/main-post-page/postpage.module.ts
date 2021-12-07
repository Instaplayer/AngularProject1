import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostpageComponent } from './postpage.component';
import { RouterModule, Routes } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { CommentsectionModule } from '../../../comment-section/comment-section.module'


let id = 1;

var routes: Routes = [

    {path: '', component: PostpageComponent},
    {path: '1',loadChildren: () => import('../post1/post1.module').then(n => n.Post1Module)},
    {path: '2',loadChildren: () => import('../post2/post2.module').then(n => n.Post2Module)}

]



@NgModule({
  declarations: [PostpageComponent],
  imports: [
    
    RouterModule.forChild(routes),
    CommonModule,
    MatDividerModule,
    MatListModule,
    FormsModule,
    CommentsectionModule

  ]
})
export class PostpageModule { }
