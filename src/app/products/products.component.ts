import { Component, OnInit, ViewChild } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Observable, of } from 'rxjs';

import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../models/product';
import { ProductData } from '../models/productdata';
import { ProductService } from '../services/product.service';
import { MessageService } from '../services/message.service';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [UpperCasePipe, NgFor, NgIf, FormsModule, ProductDetailComponent,
    MatCardModule, MatSortModule, MatTableModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  selectedProduct?: ProductData;
  public products = new MatTableDataSource();
  public productData: ProductData[] = [];
  public displayedColumns: string[] = ['ticker'];


  constructor(private productService: ProductService,
    private messageService: MessageService) {}

    @ViewChild(MatSort) sort!: MatSort;


  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
    .subscribe((productData: any) => {
      this.products = new MatTableDataSource(productData);
      this.productData = productData;
    });
  }

  onSelect(productData: ProductData): void {
     this.selectedProduct = productData;
     this.messageService.add(`Selected product id=${productData.TICKER}`);
  }
}
