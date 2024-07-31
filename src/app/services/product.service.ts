import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { PRODUCTS } from '../models/mock-products';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private messageService: MessageService) { }

  getProducts(): Observable<Product[]> {
    const products = of(PRODUCTS);
    this.log('Fetched products!');
    return products;
  }

    /** Log a ProductService message with the MessageService */
    private log(message: string) {
      this.messageService.add(`ProductService: ${message}`);
    }
}
