import { Component, OnInit } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { Account } from '../models/account';

@Component({
  selector: 'app-clairetest',
  standalone: true,
  imports: [MatCardModule, MatSortModule, MatTableModule],
  templateUrl: './clairetest.component.html',
  styleUrl: './clairetest.component.css'
})
export class ClairetestComponent implements OnInit{
  accounts: Account[] = [];
  public displayedColumns: string[] = ['id', 'name', 'balance'];

  
  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts(): void {
    // this is normally where a service would be called
    // however we're just going to get some dummy data for now
    // for testing tables
    this.accounts = [
      {id: 1, name: "Alice", balance: 10},
      {id:2, name: "Bob", balance: 200}
    ];
  }
}
