import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  encapsulation: ViewEncapsulation.None,
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
            this.setTitle(params["name"], params["link"]);
        });
        console.log(this.sub);
        
    }

    public setTitle(title: string, link: string){
        this.title = title;
        this.http.get("assets/html/" + link, {responseType: 'text'}).subscribe( data =>{
            this.setPage(data);
        });
    }

    public setPage(page: string){
        this.page = page;
    }

}
