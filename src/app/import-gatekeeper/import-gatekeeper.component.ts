import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PSResponse} from '../points-service.service';

@Component({
    selector: 'app-import-gatekeeper',
    templateUrl: './import-gatekeeper.component.html',
    styleUrls: ['./import-gatekeeper.component.scss']
})
export class ImportGatekeeperComponent implements OnInit {

    @Input()
    public importResponses: PSResponse[] = []

    @Output()
    public fileContents: EventEmitter<any[]> = new EventEmitter();

    public formatErrors: string[] = [];

    constructor() {
    }

    ngOnInit() {
    }

    public fileChange($event) {
        this.readFile($event.target)
    }

    private readFile(inputValue) {
        const file: File = inputValue.files[0];
        const myReader: FileReader = new FileReader();

        myReader
            .onloadend = e => {
            this.formatErrors = [];
            this.fileContents.emit(
                myReader
                    .result
                    .split('\n')
                    .filter(_ => _ !== '')
                    .filter(line => {
                        // Bad input lines are skipped
                        const [x, y, rest] = line.split(' ')

                        if (rest) {
                            this.formatErrors.push(`Line with [${x}, ${y}] is invalid`)
                            return false
                        } else {
                            return true;
                        }
                    })
                    .map(line => {
                        const [x, y] = line.split(' ')
                        return {x: +x, y: +y}
                    })
            )
        }

        myReader.readAsText(file);
    }

}
