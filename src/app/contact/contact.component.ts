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
        new ContactData("Gmail", "assets/img/GmailLogoFull.png", "常用信箱每日收", "mailto:superpcwang@gmail.com"),
        new ContactData("Discord", "assets/img/DiscordLogoFull.png", "線上及時應答", "https://discord.gg/sSzb56G"),
        new ContactData("YouTube", "assets/img/YoutubeLogoFull.png", "暫不開放", "http://www.google.com"),
        new ContactData("Twitch", "assets/img/TwitchLogoFull.png", "暫不開放", "http://www.google.com"),
        new ContactData("Github", "assets/img/GithubLogoFull.png", "程式回收場(?)", "https://github.com/superpcwang"),
        new ContactData("Pixiv", "assets/img/PixivLogoFull.png", "暫不開放", "http://www.google.com"),
        new ContactData("Flickr", "assets/img/FlickrLogoFull.png", "暫不開放", "http://www.google.com"),
        new ContactData("Linkedin", "assets/img/LinkedinLogoFull.png", "暫不開放", "http://www.google.com"),
        new ContactData("Plurk", "assets/img/PlurkLogoFull.png", "暫不開放", "http://www.google.com"),
        new ContactData("Facebook", "assets/img/FacebookLogoFull.png", "暫不開放", "http://www.google.com"),
        
    ];

    public secondaryDatas: ContactData[] = [

    ];
      
    constructor() { }

    ngOnInit() {
    }

}
