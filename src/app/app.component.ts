import { Component } from '@angular/core';
import { Icard } from './shared/modals/post';
import { postcardArr } from './shared/const/post';
import { Imobile } from './shared/modals/mobile';
import { mobileProducts } from './shared/const/mobile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'content';
  postArr:Array<Icard>=postcardArr;
  mobileArr:Array<Imobile>=mobileProducts;

  modalcontainer!:boolean;

  onremove(){
    this.modalcontainer=true;
  }

  emitshowflag(flag:boolean){
    this.modalcontainer=flag
  }

  emitrepeatflag(flag:boolean){
if(flag){
  
  console.log("call remove Api call")
}else{
  console.log('no Action')
}
  }




}
