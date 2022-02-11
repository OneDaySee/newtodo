import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ModalController,
  ToastController,
  AlertController,
} from '@ionic/angular';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  public name: any;
  public input: any;
  public url: any = '';
  public malzemedata: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    public modalController: ModalController,
    private http: HttpClient,
    public toastController: ToastController,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.input = this.activatedRoute.snapshot.paramMap.get('input');
  }

  close() {
    this.modalController.dismiss({
      dismissed: true,
      gidenVeri: this.input + this.malzemedata,
    });
  }

  send() {
    this.close();
    this.insertdelete();
  }

  insertdelete() {
    this.http.get(this.url + 'malzeme.php?malzeme=' + this.input).subscribe((data) => {
      this.malzemedata = data;
      console.log('modala malzemeler geldi');
      });
  }
}
