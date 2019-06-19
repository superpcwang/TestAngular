import { Component } from '@angular/core';

interface IArticleLink {
    name: string;
    link: string;
}

interface IFolder{
    name: string;
    articles: IArticleLink[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
    public sidebarActive: boolean = false;

    public folders: IFolder[] = [
        {
            name: "Web Game Engine",
            articles: [
                {name: "Page1", link: "page1"}, 
                {name: "Page2", link: "page2"}, 
                {name: "Page3", link: "page3"}, 
                {name: "Page4", link: "page4"} 
            ]
        },
        {
            name: "Game Engine Arch.",
            articles: [
                {name: "Page5", link: "page5"}, 
                {name: "Page6", link: "page6"}, 
            ]
        },
        {
            name: "Web Application",
            articles: [
                {name: "Page7", link: "page7"}, 
                {name: "Page8", link: "page8"}, 
            ]
        }
    ];

    constructor(){

    }

    public onSidebarButtonClick(): void {
        this.sidebarActive = !this.sidebarActive;
    }

    public onSidebarHide(): void{
        this.sidebarActive = false;
    }
}
