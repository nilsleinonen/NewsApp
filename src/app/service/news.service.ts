import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  api_key = '6c7ced16b2f14e558a2cc208d85dc05d';
  constructor(private http: HttpClient) {}

  initSources() {
    return this.http.get(
      'https://newsapi.org/v2/sources?&category=technology&language=en&apiKey=' +
        this.api_key
    );
  }

  initArticles() {
    return this.http.get(
      'https://newsapi.org/v2/everything?domains=9to5google.com, theverge.com, 9to5mac.com&from=2023-05-13&sortBy=publishedAt&apiKey=' +
        this.api_key
    );
  }

  getArticlesByID(source: String) {
    return this.http.get(
      'https://newsapi.org/v2/top-headlines?sources=' +
        source +
        '&apiKey=' +
        this.api_key
    );
  }
}
