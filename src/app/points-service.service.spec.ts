import {inject, TestBed} from '@angular/core/testing';

import {PointService, PSResponse} from './points-service.service';

fdescribe('PointService', () => {
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

        service.addPoints(pointsToAdd)
        service.getPoints().subscribe(p => {
            expect(p).toEqual(pointsToAdd);
            done();
        })
    })

    it('should add points twice and return all points', done => {
        const pointsToAdd = [
            {x: 1, y: 1},
            {x: 0, y: 1},
        ]

        const pointsToAddB = [
            {x: -1, y: -1},
        ]

        service.addPoints(pointsToAdd)
        service.addPoints(pointsToAddB)

        service.getPoints().subscribe(p => {
            expect(p).toEqual([...pointsToAdd, ...pointsToAddB]);
            done();
        })
    })

    it('should only add one if trying to add twice the same', done => {
        const pointsToAdd = [
            {x: 1, y: 1},
        ]

        service.addPoints(pointsToAdd)
        service.addPoints(pointsToAdd)

        service.getPoints().subscribe(p => {
            expect(p).toEqual(pointsToAdd);
            done();
        })
    })

    it('should return [{ message: "duplicate", error: true}] when requested with duplicate point',
        (done) => {
            service.addPoints([{x: 0, y: 0}])
            service.addPoints([{x: 0, y: 0}]).subscribe(p => {
                expect(p).toEqual(<PSResponse[]>[{message: 'duplicate', error: true}])
                done();
            })
        })

    it('should not add additional point when requested with duplicate point',
        (done) => {
            service.addPoints([{x: 0, y: 0}])
            service.addPoints([{x: 0, y: 0}])
            service.getPoints().subscribe(p => {
                expect(p).toEqual([{x: 0, y: 0}])
                done();
            })
        })

    it('should return [{ message: "over limit", error: true}] when requested with 10001th point',
        (done) => {

            let testArr = []
            for (let i = 0; i < 10000; i++) {
                testArr.push({x: i, y: i + 1})
            }
            service.addPoints(testArr)

            service.addPoints([{x: -1, y: -1}]).subscribe(p => {
                expect(p).toEqual(<PSResponse[]>[{message: 'over limit', error: true}])
                done();
            })
        })

});
