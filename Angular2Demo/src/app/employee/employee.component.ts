import { Component } from "@angular/core";

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
})

export class EmployeeComponent {
    columnSpan: number = 2;
    firstName: string = 'Swaraj';
    lastName: string = 'Ghosh';
    gender: string = 'Male';
    age: number = 33;

    showDeatils: boolean= false;

    toggleDetails(): void{
        this.showDeatils= !this.showDeatils;
    }
}