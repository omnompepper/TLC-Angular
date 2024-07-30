import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { PRODUCTS } from '../mock-products';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private messageService: MessageService) { }

  getProducts(): Observable<Product[]> {
    const products = of(PRODUCTS);
    this.messageService.add('Fetched some products!');
    return products;
  }
}
