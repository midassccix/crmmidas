import { Response } from '@/core/models';
import { TipoDocumentoService } from '@/core/services';
import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss']
})
export class BlankComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();

  constructor(
    private tipoDocumentoService: TipoDocumentoService
  ){
  }
  
  ngOnInit(): void {
    this.listDocuments();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private listDocuments(){
    this.subscription.add(
      this.tipoDocumentoService.getAll().subscribe((response: Response) => {
        console.log(response);
      })
    );
  }
}
