import { Component } from "@angular/core";

@Component({
    selector:'app-navbar',
    standalone: true,
    template:'',
    templateUrl:'./navbar.component.html',
    styleUrl:'./navbar.component.css',    
})

export class AppNavbar{
    isActive : boolean= false;

    onClick(){
        console.log('Clicked');
        
    }

    onKeypress($event:any){
        console.log($event.key);
        
    }

    onEnterPressed(){
        console.log('Enter Pressed');
        
    }
}