import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalBasics } from "./pages/signal-basics/signal-basics";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SignalBasics],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_21_features');
}
