import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunishDeleteComponent } from './punish-delete.component';

describe('PunishDeleteComponent', () => {
  let component: PunishDeleteComponent;
  let fixture: ComponentFixture<PunishDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PunishDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PunishDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
