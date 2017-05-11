import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-import-gatekeeper',
    templateUrl: './import-gatekeeper.component.html',
    styleUrls: ['./import-gatekeeper.component.scss']
})
export class ImportGatekeeperComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    public fileChange($event) {
        this.readFile($event.target)
    }

    public readFile(inputValue) {
        const file: File = inputValue.files[0];
        const myReader: FileReader = new FileReader();

        myReader.onloadend = function (e) {
            console.log(myReader.result.split('\n'));
        }

        myReader.readAsText(file);
    }


}
