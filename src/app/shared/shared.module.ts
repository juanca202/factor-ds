import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { LayoutModule } from '@angular/cdk/layout';

import { CommonModule as FactorCommonModule } from 'factor-common';
import { InputsModule } from 'factor-inputs';
import { HighlightModule } from 'ngx-highlightjs';
import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';

export function hljsLanguages() {
  return [
    {name: 'typescript', func: typescript},
    {name: 'scss', func: scss},
    {name: 'xml', func: xml}
  ];
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    MatBottomSheetModule,
    FactorCommonModule.forRoot({ icon: { path: 'assets/factoricons/symbols', collection: 'factoricons-regular' } }),
    InputsModule,
    HighlightModule.forRoot({
      languages: hljsLanguages
    })
  ],
  exports: [
    FormsModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    MatBottomSheetModule,
    FactorCommonModule,
    InputsModule,
    HighlightModule
  ]
})
export class SharedModule { }
