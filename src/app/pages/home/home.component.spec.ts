import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';
import { of } from 'rxjs';
import { ExchangeService } from 'src/app/services/exchange.service';
import { IExchange } from 'src/app/interfaces/exchange.interface';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  const mockService = {
    getExchange() {
      const resp: IExchange = {
        success: true,
        rates: {
          USD: 12
        }
      };
      return of( resp );
    }
  };
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ComponentsModule,
        FormsModule,
        HttpClientModule
      ],
      declarations: [
        HomeComponent
      ],
      providers: [
        DataService,
        {provide: ExchangeService, useValue: mockService}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
  });

  it('should create HomeComponent', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const homeComponent = fixture.debugElement.componentInstance;
    expect(homeComponent).toBeTruthy();
  });

  it('component variables should be assigned', () => {
    component.eu = 20;
    component.usd = 10;
    expect(component.eu).toBe(20);
    expect(component.usd).toBe(10);
  });

  it('dollar should be 12', () => {
    component.getDataFixerIO();
    expect(component.data.dollar).toBe(12);
    component.eu = 2;
    component.exchange();
    expect(component.usd).toBe(24);
  });

  it('2 eu should be 24 dollars', () => {
    component.getDataFixerIO();
    component.eu = 2;
    component.exchange();
    expect(component.usd).toBe(24);
  });
});
