import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {GroupListComponent} from "./group-list/group-list.component";
import {RouterModule, Routes} from "@angular/router";
import {MdButtonModule, MdCardModule, MdIconModule, MdListModule, MdToolbarModule} from "@angular/material";
import {ChartModule} from "primeng/primeng";

const appRoutes: Routes = [
    {path: 'groups', component: GroupListComponent},
    {
        path: '',
        redirectTo: '/groups',
        pathMatch: 'full'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        GroupListComponent
    ],
    imports: [
        BrowserModule,
        MdToolbarModule,
        MdCardModule,
        MdButtonModule,
        MdListModule,
        MdIconModule,
        ChartModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
