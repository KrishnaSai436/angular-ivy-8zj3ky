import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatCheckboxComponent } from './mat-checkbox/mat-checkbox.component';
import { MatEditorOneComponent } from './mat-editor-one/mat-editor-one.component';
import { MatInputComponent } from './mat-input/mat-input.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, MatCheckboxComponent, MatEditorOneComponent, MatInputComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
