import { Component, OnInit } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Observable, of } from 'rxjs';

import { Account } from '../models/account';
import { AccountService } from '../services/account.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [UpperCasePipe, NgFor, NgIf, FormsModule],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent implements OnInit{
  accounts: Account[] = [];

  constructor(private accountService: AccountService,
    private messageService: MessageService) {}

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts(): void {
    this.accountService.getAccounts()
    .subscribe((accounts: any) => this.accounts = accounts);
  }

}
