import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
@Input() show!:boolean;
@Output() emitshow:EventEmitter<boolean>=new EventEmitter();
@Output() emitrepeat:EventEmitter<boolean>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onclickhide(flag:boolean){
    this.show=false;
    this.emitshow.emit(flag)
    this.emitrepeat.emit(flag)
    
  }
}
