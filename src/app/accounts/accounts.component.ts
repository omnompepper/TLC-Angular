import { Component, OnInit } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule, Sort } from '@angular/material/sort';

import { Account } from '../models/account';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [MatTableModule,
    MatSortModule],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent implements OnInit{
  public displayedColumns: string[] = ['id', 'name', 'balance'];
  
  accounts: Account[] = [];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts(): void {
    this.accountService.getAccounts()
    .subscribe((accounts: any) => {
      this.accounts = accounts;
    });
  }

  sortAccountData(sort: Sort) {
    const data = this.accounts.slice();
    if (!sort.active || sort.direction === '') {
      this.accounts = data;
      return;
    }

    this.accounts = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'id':
          return compare(a.id, b.id, isAsc);
        case 'balance':
          return compare(a.balance, b.balance, isAsc);
        default:
          console.log("default");
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}