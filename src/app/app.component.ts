import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    currentPageTitle = 'Dashboard';

    appPages = [
        {
            title: 'Dashboard',
            url: '',
            icon: 'easel'
        },
        {
            title: 'Timeline',
            url: '/timeline',
            icon: 'film'
        },
        {
            title: 'Settings',
            url: '/settings',
            icon: 'settings'
        }
    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
