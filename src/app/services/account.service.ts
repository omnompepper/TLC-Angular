import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Account } from '../models/account';
import { Observable, catchError, of } from 'rxjs';
import { ACCOUNTS } from '../models/mock-acounts';

import { environment } from '../environments/environments';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private static readonly ACCOUNTS_PATH = '/accounts';

  constructor(private messageService: MessageService,
    private http: HttpClient) { }
  
  getAccounts(): Observable<Account[]> {
    this.log('Fetched accounts!');
    //return of(ACCOUNTS);
    const url = this.buildUrl(AccountService.ACCOUNTS_PATH);
    return this.http.get<Account[]>(url);
  }

  saveAccount(account : Account): void {
    const url = this.buildUrl(AccountService.ACCOUNTS_PATH);
    this.http.post<any>(url, account)
    .pipe(this.handleError);
  }

  /** Log an AccountService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`AccountService: ${message}`);
  }

  private buildUrl(path: string): string {
    return `${environment.baseUrl}${path}`
  }

  private handleError(error: any): Observable<never> {
    throw new Error('Oops!!');
  }

}
