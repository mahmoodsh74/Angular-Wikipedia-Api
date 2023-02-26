import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, pluck} from "rxjs";

export interface WikipediaResponse {
  query: {
    search: {
      title: string;
      snippet: string;
      wordcount: number;
      pageid: number;
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http: HttpClient) {
  }

  public onSearch(search: string): Observable<WikipediaResponse[]> {

    // @ts-ignore
    return this.http.get<WikipediaResponse>('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: search,
        origin: '*'
      }
    }).pipe(pluck('query', 'search'));
  }

}
