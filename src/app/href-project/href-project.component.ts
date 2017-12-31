import { Component, OnInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-href-project',
  templateUrl: './href-project.component.html',
  styleUrls: ['./href-project.component.css']
})
export class HrefProjectComponent implements OnInit {

  @ContentChild('href') href;

  constructor() {
  }

  ngOnInit() {
    this.href.nativeElement.setAttribute('target', 'blank');
  }

}
