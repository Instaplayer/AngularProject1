import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainpageComponent } from './mainpage.component';

describe('MainpageComponent', () => {
  let component: MainpageComponent;
  let fixture: ComponentFixture<MainpageComponent>;

  var testObj: { changeValue: any; }, value = null;
  var valArray: number[] = []

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        MainpageComponent,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    testObj = {

      changeValue: function(newValue: any){
        value = newValue;
      }
    }

    spyOn(testObj,'changeValue');

    

    for(var x = 0; x < 3; x++)
    {
      valArray[x] = Math.floor(Math.random() * 300) + 1
      testObj.changeValue(valArray[x]);
    }

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be rendered properly', () => {
    expect(document.getElementsByTagName('P')[0].innerHTML).toBeTruthy();
  })

  it('tracks the function being called',() => {
    expect(testObj.changeValue).toHaveBeenCalled();
  })

  it("tracks all the arguments of its calls", function() {
    expect(testObj.changeValue).toHaveBeenCalledWith(valArray[0]);
    expect(testObj.changeValue).toHaveBeenCalledWith(valArray[1]);
    expect(testObj.changeValue).toHaveBeenCalledWith(valArray[2]);
  });

  it('tracks if function was called more that 2 times', () => {
    expect(testObj.changeValue.calls.count()).toBeGreaterThan(2);
  })

});
