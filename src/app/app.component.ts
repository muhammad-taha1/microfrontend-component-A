import { Component } from '@angular/core';
import { MatSliderChange } from '@angular/material'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'component-A';


  max = 100;
  min = 0;
  thumbLabel = true;
  value = 0;

  onInputChange(event: MatSliderChange) {
    this.value = event.value;
  }
}
