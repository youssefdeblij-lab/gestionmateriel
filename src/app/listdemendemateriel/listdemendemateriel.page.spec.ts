import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListdemendematerielPage } from './listdemendemateriel.page';

describe('ListdemendematerielPage', () => {
  let component: ListdemendematerielPage;
  let fixture: ComponentFixture<ListdemendematerielPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListdemendematerielPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListdemendematerielPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
