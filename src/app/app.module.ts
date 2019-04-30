import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
// IONIC
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AppService} from './service/app.service';
// NAV AND COMP
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
// DIALOGS
import {Dialogs} from '@ionic-native/dialogs/ngx';
import {DialogFullscreenComponent} from './dialog/dialog-fullscreen/dialog-fullscreen.component';
import {DialogWindowedComponent} from './dialog/dialog-windowed/dialog-windowed.component';
// MATERIAL
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule, MatCheckboxModule, MatDialogModule} from '@angular/material';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
        BrowserAnimationsModule, MatButtonModule, MatCheckboxModule,
        MatCardModule, MatDialogModule, MatButtonModule],
    providers: [
        AppService,
        StatusBar,
        SplashScreen,
        Dialogs,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,
        DialogFullscreenComponent,
        DialogWindowedComponent
    ],
    entryComponents: [
        DialogFullscreenComponent,
        DialogWindowedComponent
    ],
})
export class AppModule {
}
