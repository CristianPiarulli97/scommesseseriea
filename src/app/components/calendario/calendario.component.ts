import { Component } from '@angular/core';
import {VERSION} from "@angular/cdk";



@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent {
  version = VERSION;

}
