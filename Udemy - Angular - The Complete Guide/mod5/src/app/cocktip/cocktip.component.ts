import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-cocktip',
  templateUrl: './cocktip.component.html',
  styleUrls: ['./cocktip.component.css']
})
export class CocktipComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  //newServerName = '';
  //newServerContent = '';

  @ViewChild('ServerContentInput') ServerContentInput:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.ServerContentInput.nativeElement.value});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.ServerContentInput.nativeElement.value});
  }

}
