import { Component, OnInit, Input, Output,  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input() compteur: number;
  @Output() changerCompteur = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  emettreNouvelleValeurCompteur() {
    this.changerCompteur.emit({
      nouvelleValeurCompteur: this.compteur
    })
  }

  incrementer() {
    this.compteur++;
    this.emettreNouvelleValeurCompteur();
  }

  decrementer() {
    this.compteur--;
    this.emettreNouvelleValeurCompteur();
  }
}
