import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
// import { LoginPageRoutingModule } from '../login/login-routing.module';
// import { LoginPageModule } from '../login/login.module';
// import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public inputname: string;
  public inputemail: string;
  public inputpassword: string;
  public url: any = 'http://microwebservice.net/ecodation/17temmuz/onder/';
  

  constructor(
    private activatedRoute: ActivatedRoute,
    public modalController: ModalController,
    private http:HttpClient,
    public toastController: ToastController,
    public alertController: AlertController,
    public route:Router) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  

backlogin(){


  

}






}
