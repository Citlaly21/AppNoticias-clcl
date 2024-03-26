import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clcl-navbar-clcl',
  templateUrl: './navbar-clcl.component.html',
  styleUrls: ['./navbar-clcl.component.css']
})
export class NavbarClclComponent implements OnInit {
  @Input() titulo: string;

  constructor() { 
    this.titulo = ';'
  }
  
  ngOnInit(): void {
  }

}
