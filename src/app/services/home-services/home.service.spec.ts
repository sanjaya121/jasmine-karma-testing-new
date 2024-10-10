import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HomeService } from './home.service';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from 'src/app/components/home/home.component';
describe('HomeService', () => {
  let service: HomeService;
  let httpTestingController : HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
     
      providers:[HomeService]
    });
    service = TestBed.inject(HomeService);
    httpTestingController=TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Ensure that there are no outstanding requests
    // httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    
  });

  it('should get Data from Api',()=>{
    const mockData = {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      };
    service.getData().subscribe(data=>{
      expect(data).toEqual(mockData);
    })
  })
});
