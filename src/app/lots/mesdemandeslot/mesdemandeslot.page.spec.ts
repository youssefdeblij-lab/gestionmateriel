import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MesdemandeslotPage } from './mesdemandeslot.page';

describe('MesdemandeslotPage', () => {
  let component: MesdemandeslotPage;
  let fixture: ComponentFixture<MesdemandeslotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesdemandeslotPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MesdemandeslotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
