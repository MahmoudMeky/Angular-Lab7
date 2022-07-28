import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/_services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  allUsers: any = { data: [] };
  currentPage!: number;

  buttonsDisabled: any = {
    prev: false,
    next: false
  }

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.getUsersByPage(1)
  }

  getUsersByPage(page: number = 1) {

    this.userService.getUsers(page).subscribe((data: any) => this.allUsers = data);
    this.currentPage = page;
  }

  navButtons(page: number, event: Event) {

    if ((event.target as HTMLInputElement).classList.contains("disabled")) {
      return
    }

    this.getUsersByPage(page)
  }

}
