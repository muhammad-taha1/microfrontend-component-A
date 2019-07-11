import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MatSliderChange } from '@angular/material';

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

  @Output() sliderEvent = new EventEmitter<number>();
  @Input() parentMessage = '';

  onInputChange(event: MatSliderChange) {
    this.value = event.value;
    this.sliderEvent.emit(this.value);
  }
}
