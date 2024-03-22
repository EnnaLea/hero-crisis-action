import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from  './animation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [ slideInAnimation ]
})
export class AppComponent {
  title = 'hero-crisis-action';

    constructor(private contexts: ChildrenOutletContexts) {}
  
    getAnimationData() {
        return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
    }
}
