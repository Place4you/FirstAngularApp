import { NgTemplateOutlet } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector:'app-navbar',
    standalone: true,
    template:'',
    imports: [FormsModule, NgTemplateOutlet],
    templateUrl:'./navbar.component.html',
    styleUrl:'./navbar.component.css',    
})

export class AppNavbar{
    isActive : boolean= false;
    username: string = "Sadi Raja";
    updated: string= this.username;
    loginCount: number =0;
    role: string= "memeber";
    fruits:Array<string>=[ 'Apple', 'Banana', 'Cherry'];
    // 'Elderberry', 'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon', 'Mango', 'Nectarine', 'Orange', 'Papaya', 'Quince', 'Raspberry', 'Strawberry'

    users: Array<any> = [
        { id: 1, username: 'john_doe', email: 'john.doe@example.com' },
        { id: 2, username: 'jane_smith', email: 'jane.smith@example.com' },
        { id: 3, username: 'bob_jones', email: 'bob.jones@example.com' },
        { id: 4, username: 'alice_brown', email: 'alice.brown@example.com' },
        { id: 5, username: 'charlie_davis', email: 'charlie.davis@example.com' }
      ];
      


    onClick(){
        console.log('Clicked');
        
    }

    onKeypress($event:any){
        console.log($event.key);
        
    }

    onEnterPressed(){
        console.log('Enter Pressed');
        
    }

    onKeyFiltering(user:HTMLInputElement){
        console.log(user.value);
    }

    loginCounter(){
        this.loginCount++;
        console.log(this.loginCount);
        
    }

    addFruit(added: string) {
        if (added) { // Check if the input is not empty
          this.fruits.push(added);
        }
    }

    deleteRecord(user: HTMLButtonElement) {
        this.users = this.users.filter(u => u.id !== user.id);
      }
}