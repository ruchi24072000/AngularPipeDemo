import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeinServicesDemoComponent } from './pipein-services-demo.component';

describe('PipeinServicesDemoComponent', () => {
  let component: PipeinServicesDemoComponent;
  let fixture: ComponentFixture<PipeinServicesDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeinServicesDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipeinServicesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
