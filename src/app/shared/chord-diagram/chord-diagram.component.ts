import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chord, SVGuitarChord } from 'svguitar';
import { MatCardModule} from '@angular/material/card';
import { KeyDisplayService } from '../../services/key-display.service';
import { Subject, takeUntil } from 'rxjs';
import { ChordService } from '../../services/chord.service';
import { Chords } from '../../model/chords.model';

@Component({
  selector: 'app-chord-diagram',
  templateUrl: './chord-diagram.component.html',
  styleUrl: './chord-diagram.component.scss'
})
export class ChordDiagramComponent implements OnInit, OnDestroy {
  @Input() chord: String = '';

  ngDestroy$ = new Subject();

  chart = new SVGuitarChord('#chart');

  chords?: Chords;

  constructor(
    private keyDisplayService: KeyDisplayService,
    private chordsService: ChordService,
  ){}

  ngOnInit(): void {
    this.loadChordsJSON();
    
    this.chart.configure({
      tuning: ['E', 'A', 'D', 'G', 'B', 'E'],
    }).draw()

    this.keyDisplayService.notePressed$.pipe(takeUntil(this.ngDestroy$)).subscribe(note => {
      this.chart.configure({
        tuning: ['E', 'A', 'D', 'G', 'B', 'E'],
      }).chord(this.generateChordDiagram(note, 'Major')).draw()
    })
  }

  loadChordsJSON(): void {
    this.chordsService.getChords$().subscribe(chordsJson => {
      this.chords = chordsJson;
    });
  }

  generateChordDiagram(note: string, chordType: string): Chord {
    const chordConfig: Chord = {
      fingers: [],
      barres: [],
      title: `${note} ${chordType}`,
      position: 1, // Default position
    };
  
    // Define the fingerings based on the chord type
    switch (chordType) {
      case 'Major':
        chordConfig.fingers = [
          [1, 2, '2'],
          [2, 3, { text: '3', color: '#F00', className: 'red' }],
          [3, 4, '4'],
          [4, 4, '4'],
          [5, 2, '2'],
          [6, 'x'],
        ];
        break;
  
      case 'Minor':
        chordConfig.fingers = [
          [1, 1, '1'],
          [2, 3, '3'],
          [3, 2, '2'],
          [4, 'x'],
          [5, 1, '1'],
          [6, 'x'],
        ];
        break;
  
      // Add more cases for other chord types as needed
  
      default:
        console.error(`Chord type ${chordType} not supported`);
        return chordConfig;
    }
  
    return chordConfig;
  }
  
  ngOnDestroy(): void {
    this.ngDestroy$.next(null);
    this.ngDestroy$.complete();
  }
}
