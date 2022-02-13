import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ModalController,
  ToastController,
  AlertController,
} from '@ionic/angular';

@Component({
  selector: 'app-newjob',
  templateUrl: './newjob.page.html',
  styleUrls: ['./newjob.page.scss'],
})
export class NewjobPage implements OnInit {
  input: any;
  date: any;
  watch: any;
  personal: any;
  public url: any = 'http://microwebservice.net/ecodation/17temmuz/onder/';
  add: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    public modalController: ModalController,
    private http: HttpClient,
    public toastController: ToastController,
    public alertController: AlertController
  ) {}

  ngOnInit() {}

  close() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  send() {
    this.modalController.dismiss({
      dismissed: true,
      gidenVeri: this.input + this.date + this.watch + this.personal + this.add,
    });
  }


  send1(){

    this.http.get(this.url + 'add.php?malzeme=' + this.input).subscribe((data) => {
      this.add = data;
      console.log('anasayfaya giriste geldi');
    });

    this.send();


  }
  
}
