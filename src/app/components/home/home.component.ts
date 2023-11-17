import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardComponent } from '../../shared/keyboard/keyboard.component';
import { ChordDiagramComponent } from '../../shared/chord-diagram/chord-diagram.component';
import {Key} from 'tonal';
import { ToolbarComponent } from '../toolbar/toolbar.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, KeyboardComponent, ChordDiagramComponent, ToolbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  displayedChords: string[] = []

  getChordsInKey(keyStr: string, type: 'major' | 'minor'): string[] {
    if(type === 'major'){
      const chords = Key.majorKey(keyStr).chords
      return Array.from(chords)
    } else {
      const chords = Key.minorKey(keyStr).natural.chords
      return Array.from(chords)
    }
  }
  
  showChordsInKey(key: string): void {
    const chords = this.getChordsInKey(key, 'major');
    this.displayedChords = chords;
  }
}
