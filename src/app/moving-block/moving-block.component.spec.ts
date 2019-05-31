import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingBlockComponent } from './moving-block.component';

describe('MovingBlockComponent', () => {
  let component: MovingBlockComponent;
  let fixture: ComponentFixture<MovingBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovingBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovingBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
