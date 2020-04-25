import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const url="https://api.github.com/search/users?q=example";
    this.http.get(url).subscribe(res=>{
      console.log(res);
    })
  }

}
