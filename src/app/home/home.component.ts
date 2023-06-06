import { Component } from '@angular/core';
import { Router } from '@angular/router';          // added line

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  formData = {                          // added line
    name: '',
    password: ''
  };

  constructor(private router: Router) { }

  onSubmit() {                    
    if (this.formData.name === "admin" && this.formData.password === "admin") {
      this.router.navigate(['/welcome']);
    }
    else
    {
      alert("Invalid details");
    }
  }
}

