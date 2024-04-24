import { Component, OnInit, Output, signal } from '@angular/core';
import { PqrsListComponent } from "../../components/pqrs-list/pqrs-list.component";
import { PQRS } from '../../api/pqrs';
import { PqrsService } from '../../services/pqrs.service';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-pqrs-admin',
    standalone: true,
    providers: [MessageService],
    template: `
        <app-pqrs-list
            [pqrs]="pqrsLista"
        ></app-pqrs-list>
  `,
    styles: ``,
    imports: [PqrsListComponent]
})
export class PqrsAdminComponent implements OnInit{
  pqrsList = signal<PQRS[]>([]);

  constructor(
    private pqrsService: PqrsService,
    private message: MessageService
  ) {
  }


  ngOnInit(): void {
    this.getPQRSList();
  }

  get pqrsLista(){
    return this.pqrsList();
  }

  getPQRSList(){
    this.pqrsService.getPqrs().subscribe({
      next: (res: any) => {
        this.pqrsList.set(res);
      },
      error: (err: any) => {
        console.log(err)
      }

    })
  }

}
