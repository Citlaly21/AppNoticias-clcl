import { Component } from '@angular/core';
import { NoticiaClclService } from './services/noticia-clcl.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listNoticias: any[] = [];
  loading = false;

  constructor(private _noticiaClclService: NoticiaClclService){}

  buscarNoticias(parametros: any){
    
    this.loading = true;
    this.listNoticias = [];

    setTimeout(() => {
      this._noticiaClclService.getNoticias(parametros).subscribe(data=>{
        this.loading = false;
        this.listNoticias = data.articles;
      }, error => {
        console.log(error);
        this.loading = false;
      })
    }, 1000);
  }
}
