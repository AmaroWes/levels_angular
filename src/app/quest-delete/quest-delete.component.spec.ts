import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestDeleteComponent } from './quest-delete.component';

describe('QuestDeleteComponent', () => {
  let component: QuestDeleteComponent;
  let fixture: ComponentFixture<QuestDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
