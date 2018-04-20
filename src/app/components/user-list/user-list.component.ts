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
    user:any;
    parseTokenObj: any;
    checkAdmin:boolean;

    constructor(private userListService:UserListService,
    private httpClient:HttpClient) { }

    ngOnInit() {
      this.userListService.getUserList().subscribe((response)=>{
      this.userList=response.user;
      console.log("Response: User",this.userList)
      this.parseToken()
      }) 
    }

    removed(user){
      this.userListService.delet(user._id).subscribe(data=>console.log("Data:",data))
      this.userList=this.userList.filter((ele)=>ele._id !== user._id)
    } 

    pop(user){
      console.log("poopusp",user)
      this.user=user
    }

  parseToken() {
    const token = JSON.parse(localStorage.getItem("loggedInUser"));
    const status = token.user.userRole.toUpperCase()
    //console.log("status",status.toUpperCase())
    if(status==="ADMIN"){
      this.checkAdmin=true
    }else{
      this.checkAdmin=false
    }
  }
    
}
