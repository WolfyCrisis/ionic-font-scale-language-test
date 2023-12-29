import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  listOfLangs: string[] = [];
  defaultLang: string = 'en';

  constructor(private translateService: TranslateService) {
    this.listOfLangs = this.translateService.langs;
    this.defaultLang = this.translateService.defaultLang;
  }

  getFontScale() {
    return environment.fontScale;
  }

  onChangeLang(ev: any) {
    this.translateService.use(ev.target.value);
  }

  onChangeFontScale(ev: any) {
    environment.fontScale = ev.target.value;
  }
}
