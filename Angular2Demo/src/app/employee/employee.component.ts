import { Component } from "@angular/core";

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html'
})

export class EmployeeComponent {
    firstName: string = 'Swaraj';
    lastName: string = 'Ghosh';
    gender: string = 'Male';
    age: number = 33;
}