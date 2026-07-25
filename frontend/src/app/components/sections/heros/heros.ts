import { Component } from '@angular/core';
import { H1 } from "../../../core/typography/h1/h1";
import { Muted } from "../../../core/typography/muted/muted";
import { Footer } from "../../footer/footer";
import { RouterModule } from '@angular/router';
import Splitting from 'splitting';

@Component({
  selector: 'nata-heros',
  imports: [H1, Muted, Footer, RouterModule],
  templateUrl: './heros.html',
  styleUrl: './heros.css',
})
export class Heros {
  constructor() {
    Splitting({
      target: "[data-splitting]",
      by: "words",
      key: null
    })
  }
}
