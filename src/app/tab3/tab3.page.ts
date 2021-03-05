import { Component } from '@angular/core';
import { AgendaService } from '../servicios/agenda.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public agendaService: AgendaService) {}

}
