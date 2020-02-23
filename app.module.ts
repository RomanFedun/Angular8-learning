import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {MultByPipe} from './pipes/mult-by.pipes';
import { ExMarksPipe } from './pipes/ex-marks.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { PostFormComponent } from './post-form/post-form.component';

@NgModule({
  declarations: [
   AppComponent,
    MultByPipe,
    ExMarksPipe,
    FilterPipe,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
