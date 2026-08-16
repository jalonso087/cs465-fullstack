import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripListingComponent } from './trip-listing/trip-listing';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [TripListingComponent, CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Travlr Getaways Admin!');
}
