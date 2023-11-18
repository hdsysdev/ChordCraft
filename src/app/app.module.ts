import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ChordService } from './services/chord.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { KeyboardComponent } from './shared/keyboard/keyboard.component';
import { ChordDiagramComponent } from './shared/chord-diagram/chord-diagram.component';
import { HomeComponent } from './components/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { routes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    KeyboardComponent, 
    ChordDiagramComponent, 
    HomeComponent,
    ToolbarComponent
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes), 
    MatCardModule
  ],
  providers: [
    ChordService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
