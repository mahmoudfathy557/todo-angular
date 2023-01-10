import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFpundComponent } from './page-not-fpund.component';

describe('PageNotFpundComponent', () => {
  let component: PageNotFpundComponent;
  let fixture: ComponentFixture<PageNotFpundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotFpundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNotFpundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
