import { Component } from "@angular/core";

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls:['app/employee/employeeList.component.css']
})

export class EmployeeListComponent {
    employees: any[] = [
        { code: 'emp01', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '25/01/1985' },
        { code: 'emp02', name: 'Tom2', gender: 'Male', annualSalary: 5500, dateOfBirth: '25/01/1985' },
        { code: 'emp03', name: 'Tom3', gender: 'Male', annualSalary: 5500, dateOfBirth: '25/01/1985' },
        { code: 'emp04', name: 'Tom4', gender: 'Female', annualSalary: 5500, dateOfBirth: '25/01/1985' }
    ];
}