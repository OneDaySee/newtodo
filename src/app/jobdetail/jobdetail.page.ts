import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-jobdetail',
  templateUrl: './jobdetail.page.html',
  styleUrls: ['./jobdetail.page.scss'],
})
export class JobdetailPage implements OnInit {
  public userData: any;
  public malzemeler: any;


  constructor(
    public activatedRoute: ActivatedRoute,
    public modalController: ModalController,
    public http: HttpClient,
    public toastController: ToastController,
    public alertController: AlertController,
    public route: Router) { }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userJSON'));
    this.malzemeler = this.activatedRoute.snapshot.paramMap.get('malzemeler');

    
  }



  backtojob(){
    this.route.navigate(['job/']);


  }
}
