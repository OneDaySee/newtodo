import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ModalController,
  ToastController,
  AlertController,
} from '@ionic/angular';
import { animationFrameScheduler } from 'rxjs';
import { AddPage } from '../add/add.page';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: any;
  public addinput: any;
  public yazi: any;
  userData: any;
  id: string;
  public url: any = 'http://microwebservice.net/ecodation/17temmuz/onder/';
  public malzemedata: any;
  importmalzeme: any;
  public input: any;

  filtertext = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    public modalController: ModalController,
    private http: HttpClient,
    public toastController: ToastController,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    // this.input = this.activatedRoute.snapshot.paramMap.get('input');
    // this.addinput = JSON.parse(localStorage.getItem('userJSON'));
    this.http.get(this.url + 'malzeme.php?malzeme2=?').subscribe((data) => {
      this.importmalzeme = data;
      console.log('anasayfaya giriste geldi');
    });
  }

  // doRefresh(event) {
  //   console.log('Begin async operation');

  //   setTimeout(() => {
  //     console.log('Async operation has ended');
  //     event.target.complete();
  //     this.http.get(this.url+'malzeme.php?malzeme2=?').subscribe(data=>{this.importmalzeme = data;
  //       console.log("geldi")});
  //   }, 2000);
  // }

  async add() {
    const modal = await this.modalController.create({
      component: AddPage,
      cssClass: 'my-custom-class',
    });

    modal.onDidDismiss().then((gelenVeri) => {
      // console.log(gelenVeri.data.gidenVeri)
      this.addinput = gelenVeri.data.gidenVeri;
      this.http.get(this.url + 'malzeme.php?malzeme2=?').subscribe((data) => {
        this.importmalzeme = data;
        console.log('anasayfaya malzemeler geldi');
      });
      // localStorage.setItem('userJSON',JSON.stringify(this.addinput));
    });

    return await modal.present();
  }

  delete() {
    // localStorage.removeItem('userJSON')
    this.addinput = '';
    this.http.get(this.url + 'malzeme.php?malzeme3=').subscribe((data) => {
      this.importmalzeme = data;
      console.log('sildi');
    });
  }

  // inputfolder(){

  //   this.http.get(this.url+'malzeme.php?malzeme=').subscribe(data=>{this.importmalzeme = data;
  //     console.log("malzemeler geldi")});

  // }

  addToFav(mal: string) {
    console.log(mal);
  }
}
