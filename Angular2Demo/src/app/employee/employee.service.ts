import { Injectable } from "@angular/core";
import { IEmployee } from "./employee";

@Injectable()
export class EmployeeService{
    
    getEmployees(): IEmployee[]{
        return [
            { code: 'emp01', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '01/25/1985' },
            { code: 'emp02', name: 'Tom2', gender: 'Male', annualSalary: 5500, dateOfBirth: '01/25/1985' },
            { code: 'emp03', name: 'Tom3', gender: 'Male', annualSalary: 5500, dateOfBirth: '01/25/1985' },
            { code: 'emp04', name: 'Tom4', gender: 'Female', annualSalary: 5500, dateOfBirth: '01/25/1985' },
            { code: 'emp05', name: 'Tom4', gender: 'Female', annualSalary: 5500, dateOfBirth: '01/25/1985' },
            { code: 'emp06', name: 'Tom4', gender: 'Female', annualSalary: 5500, dateOfBirth: '01/25/1985' }
        ];
    }
}