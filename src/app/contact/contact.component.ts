import { Component, OnInit } from '@angular/core';

class ContactData {
    public title: string;
    public img: string;
    public info: string;
    public link: string;
    constructor(title: string, img: string, info: string, link: string){
        this.title = title;
        this.img = img;
        this.info = info;
        this.link = link;
    }
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
    
    public primaryDatas: ContactData[] = [
        new ContactData("Gmail", "assets/img/GmailLogoFull.png", "Email info Email info Email info", "http://www.google.com"),
        new ContactData("Discord", "assets/img/DiscordLogoFull.png", "Discord info", "http://www.google.com"),
        new ContactData("Github", "assets/img/GithubLogoFull.png", "Github info", "http://www.google.com"),
        new ContactData("Plurk", "assets/img/PlurkLogoFull.png", "Plurk info", "http://www.google.com"),
        new ContactData("YouTube", "assets/img/YoutubeLogoFull.png", "YouTube info", "http://www.google.com"),
        new ContactData("Twitch", "assets/img/TwitchLogoFull.png", "Twitch info", "http://www.google.com"),
        new ContactData("Pixiv", "assets/img/PixivLogoFull.png", "Pixiv info", "http://www.google.com"),
        new ContactData("Linkedin", "assets/img/LinkedinLogoFull.png", "Linkedin info", "http://www.google.com"),
        new ContactData("Flickr", "assets/img/FlickrLogoFull.png", "Flickr info", "http://www.google.com"),
        new ContactData("Facebook", "assets/img/FacebookLogoFull.png", "Facebook info", "http://www.google.com")
        
    ];

    public secondaryDatas: ContactData[] = [

    ];
      
    constructor() { }

    ngOnInit() {
    }

}
