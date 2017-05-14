import { TestBed, inject } from '@angular/core/testing';

import { SquaresService } from './squares.service';
import {PointService} from './points-service.service';

describe('SquaresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SquaresService, PointService]
    });
  });

  it('should ...', inject([SquaresService], (service: SquaresService) => {
    expect(service).toBeTruthy();
  }));
});
