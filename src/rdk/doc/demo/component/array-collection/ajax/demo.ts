import {Component} from "@angular/core";
import {ArrayCollection, ServerSidePagingArray} from "../../../../../core/data/array-collection";
import {Http} from "@angular/http";

@Component({
    templateUrl: 'demo.html'
})
export class ArrayCollectionAjaxDemoComponent {
    consoleTexts = new ArrayCollection<string>();

    constructor(http: Http) {
        const ac = new ArrayCollection();
        ac.http = http;
        ac.fromAjax('src/rdk/doc/demo/component/array-collection/ajax/data.json');

        this.consoleAppend("list of our first core members:");
        ac.onAjaxComplete(() => {
            ac.forEach((author:any) => {
                this.consoleAppend("id: " + author.id + ", name=" + author.name);
            });
        });
    }

    private consoleAppend(msg: string): void {
        this.consoleTexts.push((this.consoleTexts.length + 1) + ': ' + msg);
    }
}