import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-login-form',
  templateUrl: './card-login-form.component.html',
  styleUrls: ['./card-login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardLoginFormComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      username: [{ value: null, disabled: false }, [Validators.required]],
      password: [{ value: null, disabled: false }, [Validators.required]],
      recaptcha: [{ value: null, disabled: false }, []],
    });
  }
  iniciarSesion(): void {
    this.router.navigate(['/privado'], { relativeTo: this.activatedRoute });
    // if (this.form.invalid) return;
    // console.log(this.form.value);
  }
}
