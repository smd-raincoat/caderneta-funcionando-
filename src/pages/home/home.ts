import { Component } from '@angular/core'; 
import { NavController,NavParams, IonicPage,ToastController } from 'ionic-angular';
import { CadastroViagemPage } from '../cadastro-viagem/cadastro-viagem';
import { dataProvider, viagem, viagensList} from '../../providers/data/data';
import { ViagemPage } from '../viagem/viagem';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
<<<<<<< HEAD
  public viagens;
  public vetor = [];
  constructor(public navCtrl: NavController,public navParams: NavParams) {  
  }
  
  ionViewWillEnter() {
    this.viagens = JSON.parse(localStorage.getItem("viagens"));
    if(!this.viagens){
      localStorage.setItem("viagens",JSON.stringify(this.vetor));
    }
    console.log(localStorage.getItem("viagens"));
=======
  public viagens:viagensList[];
  constructor(public navCtrl: NavController,public navParams: NavParams,private data: dataProvider, private toast: ToastController) {  
  }
  
  ionViewWillEnter() {
    this.data.getAll()
      .then((result) => {
        this.viagens = result;
      });
    //console.log(this.viagens);
>>>>>>> 5f5eba06cc7849a13c8125f5bfe9a1d35042f6c1
  }
  
  goCadastroViagemPage():void {
    this.navCtrl.push(CadastroViagemPage);
  }

  goViagemPage(item: viagensList){
    this.navCtrl.push(ViagemPage, { key: item.key, viagem: item.viagem });
    console.log(item);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad HomePage');
    //console.log(this.viagens);
  }

}
