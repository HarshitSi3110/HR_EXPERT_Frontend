import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
})
export class Login {
  form;
  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      password: ['', Validators.required],
    });
  }

submit() {
  if (this.form.invalid) return;

  this.loading = true;
  this.error = '';

  this.auth.login(this.form.value as any).subscribe({
    next: (res) => {
      this.auth.saveAuth(res.token, res.user);
      this.router.navigate(['/dashboard']);
    },
    error: (err) => {
      this.error = err.error?.message || 'Login failed';
      this.loading = false;
    },
  });
}


}
