import { Component } from '@angular/core';

@Component({
    selector: 'app-grid-block',
    template: `
    <div class="container">
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
    </div>
  `,
    styles: [
        `
    .grid-item {
      width: 25%;
      height: 100px;
      border: 1px solid red;
      min-height: 10px;
      min-width: 0px;
    }

    .container {
      display: flex;
    }
  `
    ]
})
export class GridBlockComponent {}
