import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AniTextComponent } from './ani-text.component';

describe('AniTextComponent', () => {
  let component: AniTextComponent;
  let fixture: ComponentFixture<AniTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AniTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AniTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
