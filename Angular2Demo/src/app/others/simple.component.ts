import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'simple',
    template: `You entered {{simpleInput | uppercase}}`
})

export class SimpleComponent implements OnChanges {
    ngOnChanges(changes: SimpleChanges): void {
        for (let propertyName in changes) {
            let change = changes[propertyName];
            let current = JSON.stringify(change.currentValue);
            let previous = JSON.stringify(change.previousValue);
            console.log(` ${propertyName} current: ${current}, preivious: ${previous} `)
        }
    }
    @Input() simpleInput: string;
}