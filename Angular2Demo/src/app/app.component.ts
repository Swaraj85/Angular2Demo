import { Component } from "@angular/core"

@Component({
  selector: 'my-app',
  template: `
                    <div>
                      <h1>{{ pageHeader ? pageHeader: 'No Header' }}</h1>
                      <h2>{{getFullName()}}</h2>
                      <img [src]='imagePath'/>
                      <my-employee></my-employee>
                      <span bind-innerHtml='pageHeader'></span>
                      <button [disabled]='isDisabled'>Click Me</button>
                      <button [disabled]='isDisabled'>Click Me twice</button>
                    </div>
                    `
})

export class AppComponent {
  pageHeader: string = 'This is page header';
  imagePath: string = 'http://www.pragimtech.com/Images/Logo.jpg';

  firstName: string = 'Tom';
  lastName: string = 'Hopkins';

  isDisabled: boolean= false;

  getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}