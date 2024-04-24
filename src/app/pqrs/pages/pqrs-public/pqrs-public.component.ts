import { AddPqrsComponent } from './../../components/add-pqrs/add-pqrs.component';
import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { PqrsService } from '../../services/pqrs.service';
import { PQRS, Semilleros } from '../../api/pqrs';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-pqrs-public',
    standalone: true,
    imports: [
      CommonModule,
      FormsModule,
      ButtonModule,
      TabViewModule,
      TableModule,
      DropdownModule,
      ToastModule,
      AddPqrsComponent
      ],
      providers: [MessageService],
        template: `
          <app-add-pqrs
            [semilleros]="semiList"
            (savePQRS)="savePQRS($event.pqrs, $event.semillero)"
          ></app-add-pqrs>
      `,
    styles: ``,
})
export class PqrsPublicComponent implements OnInit{

  semillerosList = signal<Semilleros[]>([]);

  constructor(
    private pqrsService: PqrsService,
    private message: MessageService
  ) {
  }

  ngOnInit(): void {
    this.getSemilleros();
  }

  get semiList(){
    return this.semillerosList();
  }

  getSemilleros(){
    this.pqrsService.getSemilleros().subscribe({
      next: (res: any) => {
        this.semillerosList.set(res);
      },
      error: (err: any) => {
        console.log(err)
      }

    })
  }

  savePQRS(pqrs: PQRS, semillero: any){
    const data = {
      nombre: pqrs.nombre,
      apellido: pqrs.apellido,
      cedula: pqrs.cedula,
      correo: pqrs.correo,
      anonimo: pqrs.anonimo,
      titulo: pqrs.titulo,
      descripcion: pqrs.descripcion,
      tipoPqrs: pqrs.tipoPqrs,
    };
    console.log(data);
    this.pqrsService.savePqrs(data, semillero).subscribe({
      next: (res: any) => {
        this.message.clear();
        this.message.add({ severity: 'success', summary: 'Agregado', detail: 'Se ha enviado el PQRS con exito' });
      },
      error: (err: any) => {
        this.message.clear();
        this.message.add({ severity: 'error', summary: 'Error :(', detail: 'Ha ocurrido un error inesperado. Intentelo de nuevo' });
        console.log(err);
      }
    })
  }


}
