import { Component } from "@angular/core";

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css']
})

export class EmployeeListComponent {

    employees: any[];

    selectedEmployeeCountRadioButton: string = 'All';

    constructor() {
        this.employees = [
            { code: 'emp01', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '01/25/1985' },
            { code: 'emp02', name: 'Tom2', gender: 'Male', annualSalary: 5500, dateOfBirth: '01/25/1985' },
            { code: 'emp03', name: 'Tom3', gender: 'Male', annualSalary: 5500, dateOfBirth: '01/25/1985' },
            { code: 'emp04', name: 'Tom4', gender: 'Female', annualSalary: 5500, dateOfBirth: '01/25/1985' },
            { code: 'emp05', name: 'Tom4', gender: 'Female', annualSalary: 5500, dateOfBirth: '01/25/1985' },
            { code: 'emp06', name: 'Tom4', gender: 'Female', annualSalary: 5500, dateOfBirth: '01/25/1985' }
        ];
    }

    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }

    getTotalEmployeesCount(): number {
        return this.employees.length;
    }

    getTotalMaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === 'Male').length;
    }

    getTotalFemaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === 'Female').length;
    }
}