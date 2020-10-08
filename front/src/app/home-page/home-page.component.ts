import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../user'; /* A modifier plus tard avec le back*/
import { UserService } from '../user.service'; /* A modifier plus tard avec le back*/

@Component({ templateUrl: 'home-page.component.html' })
export class HomePageComponent {
    loading = false;
    users: User[];

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });
    }
}
