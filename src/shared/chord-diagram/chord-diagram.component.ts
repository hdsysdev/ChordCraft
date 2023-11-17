import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SVGuitarChord } from 'svguitar';
//@ts-ignore
declare var jtab: any;

@Component({
  selector: 'app-chord-diagram',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chord-diagram.component.html',
  styleUrl: './chord-diagram.component.scss'
})
export class ChordDiagramComponent implements OnInit {
  chart = new SVGuitarChord('#chart')

  ngOnInit(): void {
    this.chart.draw()
  }

}
