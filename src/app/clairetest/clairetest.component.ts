import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatSortModule, MatSort, Sort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';

import { ViewChild } from '@angular/core';

import { Account } from '../models/account';

const ACCOUNT_DATA: Account[] = [
  { id: 1, name: 'Alice', balance: 10 },
  { id: 2, name: 'Bob', balance: 200 },
];

@Component({
  selector: 'app-clairetest',
  standalone: true,
  imports: [MatCardModule, MatSortModule, MatTableModule, MatSort, NgStyle],
  templateUrl: './clairetest.component.html',
  styleUrl: './clairetest.component.css',
})
export class ClairetestComponent implements OnInit {
  accounts: Account[] = [];
  public displayedColumns: string[] = ['id', 'name', 'balance'];
  public datasource = new MatTableDataSource(ACCOUNT_DATA);

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.datasource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts(): void {
    // this is normally where a service would be called
    // however we're just going to get some dummy data for now
    // for testing tables
    this.accounts = [
      { id: 1, name: 'Alice', balance: 10 },
      { id: 2, name: 'Bob', balance: 200 },
    ];
  }
}
