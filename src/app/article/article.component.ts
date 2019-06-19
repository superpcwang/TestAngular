import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
    public title: string;
    public sub: Subscription;
    public page: string;
    constructor(private route: ActivatedRoute,
                private http: HttpClient   
    ){

    }

    ngOnInit() {
        //this.title = this.route.snapshot.paramMap.get("link");
        //this.sub = this.route.params.subscribe(this.onRouteRedirect);
        
        this.sub = this.route.params.subscribe( (params: Params) => {
            this.setTitle(params["link"]);
        });
        console.log(this.sub);
        
    }

    public setTitle(title: string){
        this.title = title;
        this.http.get("/assets/html/" + this.title + ".html", {responseType: 'text'}).subscribe( data =>{
            this.setPage(data);
        });
    }

    public setPage(page: string){
        this.page = page;
    }

    public onRouteRedirect(params: Params): void{
        this.title = params["link"];
        console.log(params, this.title);
    }
}
