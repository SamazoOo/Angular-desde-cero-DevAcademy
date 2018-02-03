import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  valueContador: number = 3;
  today: number = Date.now();

  public changeValueContador(value: number) {
    this.valueContador = value;
  }

}
