import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransfertaquisPage } from './transfertaquis.page';

describe('TransfertaquisPage', () => {
  let component: TransfertaquisPage;
  let fixture: ComponentFixture<TransfertaquisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransfertaquisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransfertaquisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
