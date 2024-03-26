import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormularioClclComponent } from './components/formulario-clcl/formulario-clcl.component';
import { ListadoNoticiasClclComponent } from './components/listado-noticias-clcl/listado-noticias-clcl.component';
import { NavbarClclComponent } from './components/navbar-clcl/navbar-clcl.component';
import { SpinnerClclComponent } from './shared/spinner-clcl/spinner-clcl.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioClclComponent,
    ListadoNoticiasClclComponent,
    NavbarClclComponent,
    SpinnerClclComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
