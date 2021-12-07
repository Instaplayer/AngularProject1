import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = `Angublog`

  links = ['main', 'components'];
  activeLink = this.links[0]; // im not sure if thats a good idea. maybe it would be better to set the active link in the constructor

  constructor() { } // to delete if not used

  ngOnInit(): void { //same
  }

}
