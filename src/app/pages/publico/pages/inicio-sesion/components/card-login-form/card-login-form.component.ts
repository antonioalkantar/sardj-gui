import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-login-form',
  templateUrl: './card-login-form.component.html',
  styleUrls: ['./card-login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardLoginFormComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      username: [{ value: null, disabled: false }, [Validators.required]],
      password: [{ value: null, disabled: false }, [Validators.required]],
      recaptcha: [{ value: null, disabled: false }, []],
    });
  }
  iniciarSesion(): void {
    if (this.form.invalid) return;
    console.log(this.form.value);
  }
}
