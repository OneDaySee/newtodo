import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userData: any;

  constructor(public route:Router,public alertController: AlertController,) { }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userJSON'));

    
  }


  back() {
    this.route.navigate(['job/']);
  }



  async exit() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Uyari!',
      message: 'Cikmak <strong>istiyormusun</strong>!!!',
      buttons: [
        {
          text: 'Iptal',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cikis iptal edildi.');
          }
        }, {
          text: 'Evet',
          handler: () => {
            console.log('Cikis onaylandi.');
            localStorage.removeItem('userJSON')
            this.route.navigate(['login/'])
          }
        }
      ]
    });
    await alert.present();
}


}
