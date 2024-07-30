import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Account } from '../models/account';
import { Observable, of } from 'rxjs';
import { ACCOUNTS } from '../models/mock-acounts';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private messageService: MessageService) { }
  
  getAccounts(): Observable<Account[]> {
    const accounts = of(ACCOUNTS);
    this.messageService.add('Fetched accounts!');
    return accounts;
  }
}
