import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-user-id',
  templateUrl: './user-id.component.html',
  styleUrls: ['./user-id.component.scss']
})

export class UserIdComponent {
  id: string = ""
  constructor(private route: ActivatedRoute){}
  ngOnInit() {
    //const id = this.route.snapshot.params['id']; // Capturar el ID de forma sincrónica

    // O bien, suscribirse a cambios en el ID
    this.route.params.subscribe(params => {
      const id = params['id']; // Capturar el ID de forma asíncrona
      // Hacer algo con el ID capturado
    });
  }

}
