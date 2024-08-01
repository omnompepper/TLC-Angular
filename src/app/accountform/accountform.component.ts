import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { Account } from '../models/account';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-accountform',
  standalone: true,
  imports: [FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule],
  templateUrl: './accountform.component.html',
  styleUrl: './accountform.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountformComponent {
  
  constructor( private accountService: AccountService, private router:Router){ }

  account = new Account(10,"",0);
  error?: string;

  onSubmit(){
    this.accountService.saveAccount(this.account).subscribe({
      next: value => {
        this.account = new Account(0,"",0);
        this.router.navigate(['accounts']);
      },
      error: error => this.error = error
    });
  }

  protected readonly value = signal('');

  protected onInput(event: Event) {
    this.value.set((event.target as HTMLInputElement).value);
  }
}
