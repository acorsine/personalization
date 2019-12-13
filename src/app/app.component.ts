import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  ngOnInit(): void {
    window.location.href = 'http://localhost:4200/#/home?sgs=&isInteract=false';
  }
};


