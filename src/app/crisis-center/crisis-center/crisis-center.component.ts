import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-crisis-center',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './crisis-center.component.html',
  styleUrl: './crisis-center.component.css'
})
export class CrisisCenterComponent {

}
