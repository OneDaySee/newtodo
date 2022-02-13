import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public url: any = '';
  loginPage: any;
  email: any;
  password: any;
  userData: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    public toastController: ToastController,
    public alertController: AlertController,
    private http: HttpClient,
    private route: Router
  ) {}

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userJSON'));
   
  }

  // loginroute(){
  //   this.router.navigate(['job/'])
  // }

  async caution() {
    const toast = await this.toastController.create({
      message: 'Kullanici Bilgileriniz Hatali Lütfen Tekrar Deneyiniz !',
      duration: 2000,
      color: 'danger',
      position: 'bottom',
    });
    toast.present();
  }

  async caution1() {
    const toast = await this.toastController.create({
      message: 'Uygulamaya başarı ile giriş yaptınız.',
      duration: 3500,
      color: 'success',
      position: 'bottom',
    });
    toast.present();
  }

  login1() {
    this.loginPage = 1;
    this.loginPage = localStorage.getItem;

    if (this.email) {
      // this.loginPage=1;

      console.log(this.email + '---' + this.password);
      this.http.get(this.url +'yemek_user_servis_onder.php?username=' +this.email +'&password=' + this.password).subscribe((loginData) => {
        this.userData = loginData;

          if (loginData == 0) {
            this.loginPage = 1;
            this.caution();
            this.email = '';
            this.password = '';
          } else {
            this.loginPage = 0;
            this.caution1();
            this.route.navigate(['job/']);
            localStorage.setItem('userJSON', JSON.stringify(this.userData));
          }
        });
    }
  }

  back() {
    this.route.navigate(['folder/']);
  }
}
