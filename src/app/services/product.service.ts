import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { PRODUCTS } from '../models/mock-products';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { environment } from '../environments/environments';
import { HttpClient } from '@angular/common/http';
import { ProductData } from '../models/productdata';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private static readonly PRODUCT_DATA_PATH = '/claire/getProductData';

  constructor(private messageService: MessageService,
    private http: HttpClient) { }

  getProducts(): Observable<ProductData[]> {
    this.log('Fetched products!');
    const url = this.buildUrl(ProductService.PRODUCT_DATA_PATH);
    return this.http.get<ProductData[]>(url);
  }

    /** Log a ProductService message with the MessageService */
    private log(message: string) {
      this.messageService.add(`ProductService: ${message}`);
    }

    private buildUrl(path: string): string {
      return `${environment.baseUrl}${path}`
    }
}
