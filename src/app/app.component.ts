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
                {name: "Introduction", link: "wge-01-Introduction.html"},
                {name: "Title1", link: "empty.html"},
                {name: "Title2", link: "empty.html"}, 
                {name: "Title3", link: "empty.html"}
            ]
        },
        {
            name: "Web Application",
            articles: [
                {name: "Introduction", link: "wapp-01-Introduction.html"},
                {name: "Title4", link: "empty.html"}, 
                {name: "Title5", link: "empty.html"}, 
            ]
        },
        {
            name: "Folder Name",
            articles: [
                {name: "Title6", link: "empty.html"}, 
                {name: "Title7", link: "empty.html"}, 
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
