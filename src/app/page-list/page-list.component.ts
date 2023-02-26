import {Component, Input} from '@angular/core';
import {WikipediaResponse} from "../_services/wikipedia.service";

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent {
  @Input() posts:WikipediaResponse[] = [];
}
