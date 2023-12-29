import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { Device } from '@capacitor/device';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private translateService: TranslateService) {
    this.initApp()
  }

  async initApp() {
    const deviceLang = (await Device.getLanguageCode()).value;

    this.translateService.setDefaultLang('en');
    this.translateService.addLangs(['en', 'ch']);

    this.translateService.use(
      this.translateService.langs.includes(deviceLang) ? deviceLang : 'en'
    );
  }
}
