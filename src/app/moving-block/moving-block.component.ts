import { Component, OnInit } from '@angular/core';

export interface Tile {
    color: string;
}

@Component({
    selector: 'app-moving-block',
    templateUrl: './moving-block.component.html',
    styleUrls: [ './moving-block.component.css' ]
})
export class MovingBlockComponent implements OnInit {
    i = 0;
    grids_index = [ 0, 2, 8, 6 ];
    constructor() {}

    ngOnInit() {
        this.tiles[0].color = 'black';
    }
    tiles: Tile[] = [
        { color: '' },
        { color: '' },
        { color: '' },
        { color: '' },
        { color: '' },
        { color: '' },
        { color: '' },
        { color: '' },
        { color: '' }
    ];
    resetTiles() {
        this.tiles = [
            { color: '' },
            { color: '' },
            { color: '' },
            { color: '' },
            { color: '' },
            { color: '' },
            { color: '' },
            { color: '' },
            { color: '' }
        ];
    }
    forward() {
        this.resetTiles();
        if (this.i <= 2) this.tiles[this.grids_index[++this.i]].color = 'black';
        else {
            this.i = 0;
            this.tiles[this.grids_index[this.i]].color = 'black';
        }
    }
    backward() {
        this.resetTiles();
        if (this.i > 0) this.tiles[this.grids_index[--this.i]].color = 'black';
        else {
            this.i = 3;
            this.tiles[this.grids_index[this.i]].color = 'black';
        }
    }
}
