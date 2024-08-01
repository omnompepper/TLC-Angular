import { Component, OnInit, ViewChild } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [MatCardModule, MatSortModule, MatTableModule],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css',
})
export class AccountsComponent implements OnInit {
  public accounts = new MatTableDataSource();
  public displayedColumns: string[] = ['id', 'name', 'balance'];

  constructor(private accountService: AccountService) {}

  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getAccounts();
  }

  ngAfterViewInit() {
    this.accounts.sort = this.sort;
  }

  getAccounts(): void {
    this.accountService.getAccounts().subscribe((accounts: any) => {
      this.accounts = new MatTableDataSource(accounts);
    });
  }
}