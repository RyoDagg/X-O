import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-two',
  standalone: true,
  imports: [],
  templateUrl: './comp-two.component.html',
  styleUrl: './comp-two.component.css',
})
export class CompTwoComponent implements OnInit {
  data: any = [];
  
  constructor(private http: HttpClient) {
    // This service can now make HTTP requests via `this.http`.
  }

  ngOnInit() {
    this.http
      .get('http://127.0.0.1:3000/api/student/getmaterials/4')
      .subscribe((res) => {
        console.log(res);
        this.data = res;
      });
  }
}
