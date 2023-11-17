import { Component } from '@angular/core';
import {Key} from 'tonal';


@Component({
  selector: 'app-home',
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
