import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChantierSinglePage } from './chantier-single.page';

describe('ChantierSinglePage', () => {
  let component: ChantierSinglePage;
  let fixture: ComponentFixture<ChantierSinglePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChantierSinglePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChantierSinglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
