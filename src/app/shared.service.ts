import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class SharedService {
  private selectedUser = new BehaviorSubject<any>([]);
  constructor() {}

  setSelectedUser(data) {
    this.selectedUser.next(data);
  }
  getSelectedUser() {
    return this.selectedUser.asObservable();
  }
}
