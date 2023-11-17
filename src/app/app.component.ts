import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { KeyboardComponent } from './shared/keyboard/keyboard.component';
import { ChordDiagramComponent } from './shared/chord-diagram/chord-diagram.component';
import { HomeComponent } from './components/home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    KeyboardComponent, 
    ChordDiagramComponent, 
    HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CodeCraft';
}
