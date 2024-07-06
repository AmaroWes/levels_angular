import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunishEditComponent } from './punish-edit.component';

describe('PunishEditComponent', () => {
  let component: PunishEditComponent;
  let fixture: ComponentFixture<PunishEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PunishEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PunishEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
