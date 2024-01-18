import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CabezaComponent } from './components/cabeza/cabeza.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';
import { PiernasComponent } from './components/piernas/piernas.component';
import { PiesComponent } from './components/pies/pies.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,CabezaComponent,CuerpoComponent, PiernasComponent, PiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'yokai';
}
