import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public sidebarActive: boolean = false;

    public onSidebarButtonClick(): void {
        this.sidebarActive = !this.sidebarActive;
        console.log(this.sidebarActive);
    }
}
