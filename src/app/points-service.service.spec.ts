import { TestBed, inject } from '@angular/core/testing';

import { PointsServiceService } from './points-service.service';
import {of} from 'rxjs/observable/of';

fdescribe('PointsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PointsServiceService]
    });
  });

  it('should return observable with previously set points', inject([PointsServiceService], (service: PointsServiceService) => {
  }));

});
