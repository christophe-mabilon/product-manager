import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../model/Product';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ProductHttpService} from '../product-http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {
@Input()product: Product;
  constructor(public activeModal: NgbActiveModal,
              private productService: ProductHttpService,
              private router: Router) { }

  ngOnInit(): void {
  }
delete(): void{
this.productService.delete(this.product.id).subscribe(v =>
this.router.navigateByUrl('/products')
);
this.activeModal.close();
  }

}
