import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { MovingBlockComponent } from './moving-block/moving-block.component';
import { DynamicGridComponent } from 'src/app/dynamic-grid/dynamic-grid.component';
import { AppComponent } from 'src/app/app.component';
import { HomeComponent } from 'src/app/home/home.component';

const routes: Routes = [
    { path: 'moving-block', component: MovingBlockComponent },
    { path: 'list', component: ListComponent },
    { path: 'dynamic-grid', component: DynamicGridComponent },
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
