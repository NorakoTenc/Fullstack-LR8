import { Component } from '@angular/core';
import { LambdadeltaComponentComponent } from "./lambdadelta-component/lambdadelta-component.component";
import { BernkastelComponentComponent } from "./bernkastel-component/bernkastel-component.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [LambdadeltaComponentComponent, BernkastelComponentComponent,RouterOutlet]
})
export class AppComponent {
  title = 'LR7';

  onClick() {
    alert('Кнопка натиснута!');
  }
}
