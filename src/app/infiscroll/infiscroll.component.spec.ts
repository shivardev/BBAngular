import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiscrollComponent } from './infiscroll.component';

describe('InfiscrollComponent', () => {
  let component: InfiscrollComponent;
  let fixture: ComponentFixture<InfiscrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfiscrollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfiscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
