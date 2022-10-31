import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss']
})
export class SmallCardComponent implements OnInit {

  @Input()
  image: string = '';

  @Input()
  title: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ab pariatur inventore';

  @Input()
  Id: string = '0';


  constructor() { }

  ngOnInit(): void {
  }

}
