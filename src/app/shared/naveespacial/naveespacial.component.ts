import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-naveespacial',
  templateUrl: './naveespacial.component.html',
  styleUrls: ['./naveespacial.component.css']
})
export class NaveespacialComponent implements OnInit {

  @Input() public navesespaciais;
  constructor() { }

  ngOnInit() {
  }

}
