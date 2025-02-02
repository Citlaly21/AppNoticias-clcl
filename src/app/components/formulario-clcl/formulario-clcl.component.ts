import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-clcl-formulario-clcl',
  templateUrl: './formulario-clcl.component.html',
  styleUrls: ['./formulario-clcl.component.css']
})
export class FormularioClclComponent implements OnInit {

  @Output() parametrosSeleccionados = new EventEmitter<any>()

  categoriaSeleccionada = 'general'
  paisSeleccionado = 'mx'

  categorias: any[] = [
    {value: 'general', nombre: 'General'},
    {value: 'business', nombre: 'Negocios'},
    {value: 'entretaiment', nombre: 'Entretenimiento'},
    {value: 'health', nombre: 'Salud'},
    {value: 'science', nombre: 'Ciencia'},
    {value: 'sports', nombre: 'Deportes'},
    {value: 'tecnology', nombre: 'Tecnologia'},
  ];

  paises: any[] = [
    {value: 'ae', nombre: 'Emiratos Árabes Unidos'},
    {value: 'ar', nombre: 'Argentina'},
    {value: 'at', nombre: 'Austria'},
    {value: 'au', nombre: 'Australia'},
    {value: 'be', nombre: 'Bélgica'},
    {value: 'bg', nombre: 'Bulgaria'},
    {value: 'br', nombre: 'Brasil'},
    {value: 'ca', nombre: 'Canadá'},
    {value: 'ch', nombre: 'Suiza'},
    {value: 'cn', nombre: 'China'},
    {value: 'co', nombre: 'Colombia'},
    {value: 'cu', nombre: 'Cuba'},
    {value: 'cz', nombre: 'República Checa'},
    {value: 'de', nombre: 'Alemania'},
    {value: 'eg', nombre: 'Egipto'},
    {value: 'fr', nombre: 'Francia'},
    {value: 'gb', nombre: 'Reino Unido'},
    {value: 'gr', nombre: 'Grecia'},
    {value: 'hk', nombre: 'Hong Kong'},
    {value: 'hu', nombre: 'Hungría'},
    {value: 'id', nombre: 'Indonesia'},
    {value: 'ie', nombre: 'Irlanda'},
    {value: 'il', nombre: 'Israel'},
    {value: 'in', nombre: 'India'},
    {value: 'it', nombre: 'Italia'},
    {value: 'jp', nombre: 'Japón'},
    {value: 'kr', nombre: 'Corea del Sur'},
    {value: 'lt', nombre: 'Lituania'},
    {value: 'lv', nombre: 'Letonia'},
    {value: 'ma', nombre: 'Marruecos'},
    {value: 'mx', nombre: 'México'},
    {value: 'my', nombre: 'Malasia'},
    {value: 'ng', nombre: 'Nigeria'},
    {value: 'nl', nombre: 'Países Bajos'},
    {value: 'no', nombre: 'Noruega'},
    {value: 'nz', nombre: 'Nueva Zelanda'},
    {value: 'ph', nombre: 'Filipinas'},
    {value: 'pl', nombre: 'Polonia'},
    {value: 'pt', nombre: 'Portugal'},
    {value: 'ro', nombre: 'Rumania'},
    {value: 'rs', nombre: 'Serbia'},
    {value: 'ru', nombre: 'Rusia'},
    {value: 'sa', nombre: 'Arabia Saudita'},
    {value: 'se', nombre: 'Suecia'},
    {value: 'sg', nombre: 'Singapur'},
    {value: 'si', nombre: 'Eslovenia'},
    {value: 'sk', nombre: 'Eslovaquia'},
    {value: 'th', nombre: 'Tailandia'},
    {value: 'tr', nombre: 'Turquía'},
    {value: 'tw', nombre: 'Taiwán'},
    {value: 'ua', nombre: 'Ucrania'},
    {value: 'us', nombre: 'Estados Unidos'},
    {value: 've', nombre: 'Venezuela'},
    {value: 'za', nombre: 'Sudáfrica'}
  ];



  constructor() { }

  ngOnInit(): void {
  }

  buscarNoticia(){
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado,
    }
    this.parametrosSeleccionados.emit(PARAMETROS)
  }

  

}
