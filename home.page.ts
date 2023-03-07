import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  sex:string='';
  alt:string='';
  res:number=0;
  homemcalc:string='72.7';
  muiecalc:string='62.1';
  radioSelecionada:string='';
  mensagem:string=''

  calcular(){
    if (this.sex ==='homem'){
      this.res=parseFloat(this.homemcalc)*parseFloat(this.alt) - 58
    }else{
      this.res=parseFloat(this.muiecalc)*parseFloat(this.alt) - 44.7
    }
  }

  constructor(
    public toastController: ToastController,
    public alertController: AlertController
  ){}


verificarRadio(){
  if (this.radioSelecionada==='option1'){
    this.mensagem='voce é maneiro'
  }
  if (this.radioSelecionada==='option2'){
    this.mensagem='voce é maneiro2'
  }
  if (this.radioSelecionada==='option3'){
    this.mensagem='voce é maneiro3'
  }
this.exibirToast();
this.exibirAlerta();
}

async exibirToast(){
  const toast = await
  this.toastController.create({
    message: this.mensagem,
    duration:2000,
    position:"bottom",
    color:"tertiary"
  })
  toast.present()
}
async exibirAlerta(){
  const alert = await
  this.alertController.create({
  header:'essa é uma mensagem de exemplo.',
  message:this.mensagem,
  buttons:['oh yeah']
  });
  alert.present()
}

}
