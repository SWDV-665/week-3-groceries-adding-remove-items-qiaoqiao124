import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  title = "Groceries";
  items = [
    {
      name: "milk",
      quantity: 1
    },
    {
      name: "bread",
      quantity: 2
    },
    {
      name: "egg",
      quantity: 6
    },
  ];
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

  removeItem(item, index) {
    let toast = this.toastCtrl.create({
      message: 'Removing ' + item.name + '...',
      duration: 1000,
      position: 'middle'
    });
  
    toast.onDidDismiss(() => {
      console.log(item.name + ' was removed' + ', ' + index);
    });
  
    toast.present();
    this.items.splice(index, 1);
  };

  addItem() {
    console.log('adding item');
    this.addItemPrompt();
  };

  addItemPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Add Item',
      message: "Enter name and quantity of the item you're going to add",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked', data);
            this.items.push(data);
          }
        }
      ]
    });
    prompt.present();
  };
}
