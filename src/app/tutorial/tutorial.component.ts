import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 username : string;
 password : string;
 usermodel = new model();

  login(){
  if(this.usermodel.username == "admin"){
    alert("hi");
  }else{
    alert("bye");
    this.usermodel.username = "";
  }
  }

}

class model {
  username : string;
  password : string;
}
