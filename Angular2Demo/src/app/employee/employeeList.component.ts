import { Component } from "@angular/core";
import { IEmployee, Employee } from "./employee";
import { EmployeeService } from "./employee.service";

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css'],
    providers: [EmployeeService]
})

export class EmployeeListComponent {

    employees: IEmployee[];
    selectedEmployeeCountRadioButton: string = 'All';

    constructor(private _employeeService: EmployeeService) {
        this.employees = _employeeService.getEmployees();
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