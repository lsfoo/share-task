import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { ScrollingModule } from '@angular/cdk/scrolling'
import { A11yModule } from '@angular/cdk/a11y'
import { CdkTableModule } from '@angular/cdk/table'
import { CdkTreeModule } from '@angular/cdk/tree'
import { DragDropModule } from '@angular/cdk/drag-drop'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import 'hammerjs'
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    A11yModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,

    ScrollingModule,
    A11yModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,

    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
