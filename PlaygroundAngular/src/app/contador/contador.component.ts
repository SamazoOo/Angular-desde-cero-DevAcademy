import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  @Input() valueContador: number;
  @Output() changeValue: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  public incrementar(){
    this.valueContador++;
    this.onChangeValueContador();
  }

  public decrementar() {
    this.valueContador--;
    this.onChangeValueContador();
  }

  public onChangeValueContador() {
    this.changeValue.emit(this.valueContador);
  }

}
