import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewofferPage } from './newoffer.page';

describe('NewofferPage', () => {
  let component: NewofferPage;
  let fixture: ComponentFixture<NewofferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewofferPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewofferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
