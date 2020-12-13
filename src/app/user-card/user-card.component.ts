import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { SharedService } from "../shared.service";

@Component({
  selector: "app-user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.css"]
})
export class UserCardComponent implements OnInit {
  @Input() userList: any;
  selectedUser: any = [];
  constructor(private http: HttpClient, private service: SharedService) {}

  ngOnInit() {}
  selectUser(user) {
    console.log("User Card Clicked", user);
    if (this.selectedUser.includes(user)) {
      this.selectedUser.splice(this.selectedUser.indexOf(user), 1);
      document.getElementById(user).setAttribute("class", "d-none");
    } else {
      this.selectedUser.push(user);
      document.getElementById(user).setAttribute("class", "selectedUser");
    }

    this.service.setSelectedUser(
      this.userList.filter(data => {
        return this.selectedUser.includes(data.id);
      })
    );
  }
}
