import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ParentComponent } from './app/parent/parent.component';
import { FirstComponent } from './app/first/first.component';
import { SecondComponent } from './app/second/second.component';
import { ThirdComponent } from './app/third/third.component';
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: ParentComponent },
      { path: 'first', component: FirstComponent },
      { path: 'second', component: SecondComponent },
      { path: 'third', component: ThirdComponent },
    ]),
  ],
});