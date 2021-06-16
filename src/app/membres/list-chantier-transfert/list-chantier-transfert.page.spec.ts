import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListChantierTransfertPage } from './list-chantier-transfert.page';

describe('ListChantierTransfertPage', () => {
  let component: ListChantierTransfertPage;
  let fixture: ComponentFixture<ListChantierTransfertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListChantierTransfertPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListChantierTransfertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
