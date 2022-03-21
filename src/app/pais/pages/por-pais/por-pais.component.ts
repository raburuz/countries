import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent implements OnInit {
  termino: string = '';
  countries: Pais[] = [];
  error: boolean = false;
  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  @ViewChild('form') form!: ElementRef<HTMLFormElement>;
  handleSubmit() {
    this.error = false;
    const data = this.paisService.buscarPais(this.termino).subscribe(
      (resp) => {
        this.countries = resp;
        console.log(resp);
      },
      (err) => {
        this.error = true;
        this.countries = [];
      }
    );

    this.form.nativeElement.reset();
  }
}
