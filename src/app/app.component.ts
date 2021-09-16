import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { NoVacunadosService } from './core/services/no-vacunados.service';
import { VacunadosService } from './core/services/vacunados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  vacunados = [];
  noVacunados = [];
  subsVacunados: Subscription;
  subsNoVacunados: Subscription;

  constructor(
    private noVacunadosService: NoVacunadosService,
    private vacunadosService: VacunadosService
  ) {}

  ngOnInit() {
    this.datosVacunados();
    this.datosNoVacunados();
  }

  datosVacunados() {
    this.vacunados = [];
    this.subsVacunados = this.vacunadosService
      .listVacunados()
      .subscribe((data) => {
        Object.entries(data).map((d: any) =>
          this.vacunados.push({ id: d[0], ...d[1] })
        );
      });
  }

  datosNoVacunados() {
    this.noVacunados = [];
    this.subsNoVacunados = this.noVacunadosService
      .listNoVacunados()
      .subscribe((data) => {
        Object.entries(data).map((d: any) =>
          this.noVacunados.push({ id: d[0], ...d[1] })
        );
      });
  }

  todosEstanVacunados() {
    return this.noVacunados.length === 0;
  }

  totalDeVacunas(type: number) {
    if (type === 0) {
      return this.vacunados.length;
    } else {
      return this.noVacunados.length;
    }
  }

  vacunarPersona(persona: any, i: number): void {
    const ind = this.noVacunados.findIndex((x) => x.name === persona.name);
    const aumenta: any = persona.doses++;

    this.noVacunadosService.patchNoVacunados(this.noVacunados[ind].id, {
      doses: aumenta,
    });

    const tipoDeVacuna: string = persona.vaccineType;
    console.log('tipoDeVacuna', tipoDeVacuna);
    if (
      tipoDeVacuna === 'A' ||
      (tipoDeVacuna === 'B' && aumenta === 2) ||
      (tipoDeVacuna === 'C' && aumenta === 3)
    ) {
      this.vacunadosService.postVacunados({
        name: persona.name,
        age: persona.age,
        date: persona.date,
        vaccined: 1,
      });

      this.noVacunadosService.deleteNoVacunados(this.noVacunados[ind].id);
    }
  }
}
