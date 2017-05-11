import {inject, TestBed} from '@angular/core/testing';

import {PointService} from './points-service.service';

describe('PointService', () => {
    let service;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PointService]
        });
    });

    beforeEach(inject([PointService], (srv: PointService) => {
        service = srv;
    }));

    it('should return empty observable when called getPoints', done => {
        service.getPoints().subscribe(p => {
            expect(p).toEqual([]);
            done();
        })
    })

    it('should add points and return all points', done => {
        const pointsToAdd = [
            {x: 1, y: 1},
            {x: 0, y: 1},
        ]

        service.addPoints(pointsToAdd).subscribe(p => {
            expect(p).toEqual(pointsToAdd);
            done();
        })
    })

    it('should add points twice and return all points', done => {
        const pointsToAdd = [
            {x: 1, y: 1},
            {x: 0, y: 1},
        ]

        service.addPoints(pointsToAdd)
        service.addPoints(pointsToAdd)

        service.getPoints().subscribe(p => {
            expect(p).toEqual([...pointsToAdd, ...pointsToAdd]);
            done();
        })
    })


});
