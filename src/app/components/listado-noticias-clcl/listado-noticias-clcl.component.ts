import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clcl-listado-noticias-clcl',
  templateUrl: './listado-noticias-clcl.component.html',
  styleUrls: ['./listado-noticias-clcl.component.css']
})
export class ListadoNoticiasClclComponent implements OnInit {
  @Input() listNoticias: any;

  constructor() { }

  ngOnInit(): void {
  }

}
