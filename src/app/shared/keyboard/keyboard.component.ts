import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-keyboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.scss'
})
export class KeyboardComponent {
  @Input() numberOfOctaves: number = 1;
  @Output() notePressed: EventEmitter<string> = new EventEmitter()

  get keys(): string[] {
    // Generate an array of keys based on the number of octaves
    const allKeys = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const keys: string[] = [];

    for (let i = 0; i < this.numberOfOctaves; i++) {
      allKeys.forEach(key => {
        keys.push(key);
      });
    }

    return keys;
  }

  constructor() { }

  triggerNote(note: string) {
    this.notePressed.emit(note)
  }
}
