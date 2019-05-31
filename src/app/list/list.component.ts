import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: [ './list.component.css' ]
})
export class ListComponent {
    public nameList: Array<string> = [];
    public nameInput: string = '';

    addName() {
        this.nameList.push(this.nameInput);
        this.nameInput = '';
    }
}
