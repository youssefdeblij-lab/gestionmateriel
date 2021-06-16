import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MondemandelotuniqPage } from './mondemandelotuniq.page';

describe('MondemandelotuniqPage', () => {
  let component: MondemandelotuniqPage;
  let fixture: ComponentFixture<MondemandelotuniqPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MondemandelotuniqPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MondemandelotuniqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
