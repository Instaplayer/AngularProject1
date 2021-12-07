import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsectionComponent } from './comment-section.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
  declarations: [CommentsectionComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule
  ],
  exports: [CommentsectionComponent]
})
export class CommentsectionModule { }
