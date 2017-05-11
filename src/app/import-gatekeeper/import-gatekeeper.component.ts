import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-import-gatekeeper',
    templateUrl: './import-gatekeeper.component.html',
    styleUrls: ['./import-gatekeeper.component.scss']
})
export class ImportGatekeeperComponent implements OnInit {

    @Input()
    public errMsg: string = ''

    @Output()
    public fileContents: EventEmitter<any[]> = new EventEmitter();

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

        myReader.onloadend = e => {
            this.fileContents.emit(myReader.result.split('\n'))
        }

        myReader.readAsText(file);
    }

}
