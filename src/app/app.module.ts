import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstTestComponent } from './first-test/first-test.component';
import { SecondTestComponent } from './second-test/second-test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThreeTestComponent } from './three-test/three-test.component';
import { StyleBrothersDirective } from './style-brothers.directive';
import { MyPipePipe } from './my-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstTestComponent,
    SecondTestComponent,
    ThreeTestComponent,
    StyleBrothersDirective,
    MyPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
