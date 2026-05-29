import { CommonModule } from '@angular/common';
import {
  Component,
  signal,
  WritableSignal,
  isWritableSignal,
  isSignal,
  computed,
} from '@angular/core';

type EnumGender = 'Male' | 'Female' | 'Other';

interface UserInfo {
  name: string;
  age: number;
  gender : EnumGender;
}

@Component({
  selector: 'app-signal-basics',
  imports: [
    CommonModule,
  ],
  templateUrl: './signal-basics.html',
  styleUrl: './signal-basics.css',
})
export class SignalBasics {
  private name: WritableSignal<string> = signal('Uday Shankar Purbey');
  fullName: WritableSignal<string> = signal('Uday Shankar Purbey');
  firstNameCapitalized = computed(() => this.name().toUpperCase());


 userInfo: WritableSignal<UserInfo[]> = signal([]);

  getName() {
    return this.name();
  }

  setName() {
    this.name.set('Uday Shankar Purbey Updated');
  }

  updateName() {
    this.name.update((name: string) => name + ' Updated');
  }

  addUserInfo() {
    const user : UserInfo[] = [
      {
        name: 'Alice Smith',
        age: 28,
        gender: 'Female',
      },
      {
        name: 'Bob Johnson',
        age: 35,
        gender: 'Male',
      }
    ];
    this.userInfo.set(user);
  }

  addNewUser() {
    const newUser: UserInfo = {
      name: 'John Doe',
      age: 30,
      gender: 'Male',
    };
    this.userInfo.update((users: UserInfo[]) => [...users, newUser]);
  }

  getUserByGender(gender: EnumGender) {
    return this.userInfo().filter(user => user.gender === gender);
  }
}
