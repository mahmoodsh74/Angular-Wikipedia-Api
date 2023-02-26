import {Component} from '@angular/core';
import {WikipediaResponse, WikipediaService} from "./_services/wikipedia.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: WikipediaResponse[] = [];
  title = 'WikipediaSearch';

  constructor(private wikipediaService: WikipediaService) {
  }

  onGetTermSearch(value: string) {
    // @ts-ignore
    this.wikipediaService.onSearch(value).subscribe(
      (response: WikipediaResponse[]) => {
        // @ts-ignore
        this.posts = response;
      },
      (error:HttpErrorResponse) => {
        console.log('error')
      },
      () => {
        console.log('completed')
      }
    )
    ;
  }
}
