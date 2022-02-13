import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ModalController,
  ToastController,
  AlertController,
} from '@ionic/angular';
import { NewjobPage } from '../newjob/newjob.page';

@Component({
  selector: 'app-job',
  templateUrl: './job.page.html',
  styleUrls: ['./job.page.scss'],
})
export class JobPage implements OnInit {
  public url: any = '';
  userData: any;
  newjobdata: any;
  importmalzeme: any;
  delete: any;
 
 

  constructor(
    public activatedRoute: ActivatedRoute,
    public modalController: ModalController,
    public http: HttpClient,
    public toastController: ToastController,
    public alertController: AlertController,
    public route: Router
  ) {}

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userJSON'));

    this.http.get(this.url + 'add.php?malzeme2=?').subscribe((data) => {
      this.importmalzeme = data;
      console.log('anasayfaya giriste geldi');
    });

  }

  getmalzeme() {}

  jobdetailpage() {
    this.route.navigate(['jobdetail/']);
  }

  profile() {
    this.route.navigate(['profile/']);
  }

  async newjob() {
    const modal = await this.modalController.create({
      component: NewjobPage,
      cssClass: 'my-custom-class',
    });

    modal.onDidDismiss().then((gelenVeri) => {
      console.log(gelenVeri.data.gidenVeri);
      this.newjobdata = gelenVeri.data.gidenVeri;
      this.http.get(this.url + 'add.php?malzeme2=?').subscribe((data) => {
        this.importmalzeme = data;
        console.log('anasayfaya malzemeler geldi');
      });
    });

    return await modal.present();
  }




  delete1() {
    // localStorage.removeItem('userJSON')
    // this.importmalzeme = '';
    this.http.get(this.url + 'add.php?id=' ).subscribe((data) => {
      this.delete = data;
      console.log('sildi');
    });
    
    this.ngOnInit();

  }






}