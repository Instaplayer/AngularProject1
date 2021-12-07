import { Component, OnInit } from '@angular/core';
import { commentDataService } from 'src/app/services/comment-data';

@Component({
  selector: 'app-postpage',
  templateUrl: './postpage.component.html',
  styleUrls: ['./postpage.component.css']
})

export class PostpageComponent implements OnInit {
  posties: any;

  constructor(private dataservice: commentDataService) { }

  ngOnInit(): void {

    this.dataservice.getPostData().subscribe(result => this.posties = result)
    

  }

}
