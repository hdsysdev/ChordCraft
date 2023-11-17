import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chords } from '../model/chords.model';

@Injectable({
  providedIn: 'root'
})
export class ChordService {
  private chordsJsonUrl = 'assets/js/chords.json';

  constructor(private httpClient: HttpClient) { }

  getChords$(): Observable<Chords> {
    return this.httpClient.get<Chords>(this.chordsJsonUrl);
  }
}
