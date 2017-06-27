import { Component, OnInit } from '@angular/core';
import { MdInputModule } from '@angular/material';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  position = 'below';

  constructor() { }

  ngOnInit() {
  }

}
