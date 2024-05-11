import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AniTextComponent } from './ani-text/ani-text.component';
import { InfiscrollComponent } from './infiscroll/infiscroll.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavBarComponent,AniTextComponent,InfiscrollComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BBAngular';
}
