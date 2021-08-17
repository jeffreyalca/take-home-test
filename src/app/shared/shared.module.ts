import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

import * as fromComponents from './components';
import * as fromPipes from './pipes';

@NgModule({

  declarations: [
    ...fromComponents.components,
    ...fromPipes.pipes,
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatChipsModule,
    MatIconModule
    // MatFormField,
  ],

  exports: [
    ...fromComponents.components,
    ...fromPipes.pipes,
    FormsModule
  ],

  providers: [
    ...fromPipes.pipes
  ],
})

export class SharedModule { }
