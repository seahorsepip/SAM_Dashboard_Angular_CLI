import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {
    MdButtonModule, MdCardModule, MdGridListModule, MdIconModule, MdListModule,
    MdToolbarModule
} from '@angular/material';
import {ChartModule} from 'primeng/primeng';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        MdToolbarModule,
        MdCardModule,
        MdListModule,
        MdIconModule,
        MdButtonModule,
        ChartModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
