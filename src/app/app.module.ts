import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './shared/component/post/post.component';
import { ModalComponent } from './shared/component/modal/modal.component';
import { MobileComponent } from './shared/component/mobile/mobile.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ModalComponent,
    MobileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
