import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Account } from '../models/account';
import { Observable, catchError } from 'rxjs';

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
    const url = this.buildUrl(AccountService.ACCOUNTS_PATH);
    return this.http.get<Account[]>(url);
  }

  getAccountById(id:number): Observable<Account>{
    const url = this.buildUrl(AccountService.ACCOUNTS_PATH) + '/' + id;
    return this.http.get<Account>(url);
  }

  saveAccount(account : Account): Observable<string> {
    this.log("Saving account with id:" + account.id + " name:" + account.name + " balance:" + account.balance);
    const url = this.buildUrl(AccountService.ACCOUNTS_PATH);
    return this.http.post<any>(url, account)
      .pipe(catchError(this.handleError));
  }

  /** Log an AccountService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`AccountService: ${message}`);
  }

  private buildUrl(path: string): string {
    return `${environment.baseUrl}${path}`
  }

  private handleError(error: any): Observable<never> {
    throw new Error('Oops!! Something went wrong!');
  }
}
