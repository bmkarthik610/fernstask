import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users:any[]=[];

  constructor( private router: Router) { }

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem('users'));
  }
  Logout()
  {
    this.router.navigate(['login']);
  }
}
