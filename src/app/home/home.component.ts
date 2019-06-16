import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    private h1Flag: boolean = false;

    public en: boolean = false;
    public ch: boolean = true;
    public h1Number: number = 0;
    public textArray: string[] = ["Text1", "Text2", "Text3"];
    constructor() { }
    
    ngOnInit() {
        
    }

    public firstClick(): void{
        this.h1Flag = !this.h1Flag;
        this.setLanguage("en");
    }

    public secondClick(): void{
        this.setLanguage("ch");
    }

    private setLanguage(lang: string){
        if (lang === "en"){
            this.en = true;
            this.ch = false;
        }
        else if (lang === "ch"){
            this.en  = false;
            this.ch = true;
        }
        else{
            throw new Error("This is invaild language: " + lang);
        }
    }
}
