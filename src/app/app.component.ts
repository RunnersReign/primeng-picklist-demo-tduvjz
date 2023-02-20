import {Component} from '@angular/core';
import { ProductService } from './productservice';
import { Product } from './product';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent { 
    sourceProducts: Product[];
    
    targetProducts: Product[];
    
    constructor(private carService: ProductService, private primengConfig: PrimeNGConfig) { }

    ngOnInit() {
        this.carService.getProductsSmall().then(products => this.sourceProducts = products);
        this.targetProducts = [];
        this.primengConfig.ripple = true;
    }
}
