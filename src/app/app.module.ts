import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule, Routes } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { MovingBlockComponent } from './moving-block/moving-block.component';
import { DynamicGridComponent } from './dynamic-grid/dynamic-grid.component';
import { GridBlockComponent } from './dynamic-grid/grid-block.component';
import { HomeComponent } from './home/home.component';
@NgModule({
    declarations: [ AppComponent, ListComponent, MovingBlockComponent, DynamicGridComponent, GridBlockComponent, HomeComponent ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        BrowserAnimationsModule,
        FormsModule,
        MatGridListModule,
        MatTabsModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
