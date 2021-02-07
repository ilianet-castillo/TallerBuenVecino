import {Component} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GoodNeighborGUI';

  constructor(private matIconResgistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconResgistry
      .addSvgIcon('page-layout-body', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/page-layout-body.svg'))
      .addSvgIcon('plus', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/plus.svg'))
      .addSvgIcon('cancel', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/cancel.svg'))
      .addSvgIcon('pencil', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/pencil.svg'))
      .addSvgIcon('check', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/check.svg'))
      .addSvgIcon('update', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/update.svg'));
  }

}
