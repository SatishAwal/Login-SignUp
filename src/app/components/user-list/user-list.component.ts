import { Component, OnInit } from '@angular/core';
import { UserListService,HttpClient} from "../../services/index";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList:any;
  date=new Date().toLocaleDateString();
  constructor(private userListService:UserListService,
  private httpClient:HttpClient
  ) { }

  ngOnInit() {
    this.userListService.getUserList().subscribe((response)=>{
    this.userList=response.user;
      console.log("Response: User",this.userList)
    })
  }
removed(user){
  this.userListService.delet(user).subscribe((response)=>console.log("Deleted User:",response))
}
}
