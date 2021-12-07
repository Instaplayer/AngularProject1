import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { commentDataService } from 'src/app/services/comment-data';
import { UserComment } from 'src/app/data/user-comment';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-commentsection',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss'],
})

export class CommentsectionComponent implements OnInit {

  hide = true;

  comment: string = "";
  nickname: string = "";
  commentSection: UserComment[] = [];

  constructor(public dataservice: commentDataService, private route: ActivatedRoute) { }

  onSubmit(form: NgForm){
    if(form.valid)
    {
      this.dataservice.postCommentForm(form.form.value as UserComment).subscribe();
      this.commentSection.push(form.form.value as UserComment);
    }

      
    form.form.reset();
  }

  ngOnInit(): void {

    this.dataservice.getCommentData().subscribe(result => this.commentSection = result);
  }

}
