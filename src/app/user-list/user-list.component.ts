import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})


export class UserListComponent implements OnInit {
  users: Array<{ name: string; email: string }> = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:3000/users').subscribe((users: any) => {
      this.users = users;
    });
  }
  
}
