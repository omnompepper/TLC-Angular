import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Account } from '../models/account';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-accountform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './accountform.component.html',
  styleUrl: './accountform.component.css'
})
export class AccountformComponent {
  
  constructor( private accountService: AccountService){ 
  }

  account = new Account(10,"",0);
  error?: string;

  onSubmit(){
    this.accountService.saveAccount(this.account).subscribe({
      next: value => {
        //this.account = new Account(0,"",0);
      },
      error: error => this.error = error
    });
  }
}
