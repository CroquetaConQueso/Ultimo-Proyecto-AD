<<<<<<< HEAD
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/layout/header/header';
=======
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/layout/header/header';
>>>>>>> 138c42e (Uwaaa)

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, Header],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  protected readonly title = signal('frontend');
}
=======
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hospital-frontend';
}
>>>>>>> 138c42e (Uwaaa)
