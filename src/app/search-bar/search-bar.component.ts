import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  term: string = '';
  @Output() onSearch = new EventEmitter<string>();


  onSubmit(event: any) {
    event.preventDefault();
    this.onSearch.emit(this.term)
  }
}
