import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  users: Array<{ name: string; email: string }> = [];

  constructor(private http: HttpClient) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const { name, email, password } = form.value;
      this.http.post('http://localhost:3000/users', { name, email, password }).subscribe((user: any) => {
        this.users.push(user);
        form.reset();
      });
    }
  }
}
