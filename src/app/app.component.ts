import { Component } from '@angular/core';
export { default as CpsButton } from '@cps-elements/web/components/button';
export { default as CpsIcon } from '@cps-elements/web/components/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cps-elements-example-angular';
  isWaiting = false;
  message = '';

  onClick() {
    if (this.isWaiting) return;

    this.isWaiting = true;
    setTimeout(() => {
      this.message = `Atualizado às ${new Date().toLocaleTimeString()}.`;
      this.isWaiting = false;
    }, 1000);
  }
}
