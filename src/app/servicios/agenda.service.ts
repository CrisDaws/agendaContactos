import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Persona } from '../interfaces/persona';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  nombre: string;
  telefono: number;
  email: string;
  nota: string;

  personas: Persona[] = [
    {
      nombre: 'Cristian Diaz',
      telefono: 4494972216,
      email: 'Cris@gmail.com',
      nota: 'Estudiante',
    },
  ];

  nuevo: Persona = {
    nombre: '',
    telefono: undefined,
    email: '',
    nota: '',
  };

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    this.personas.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      telefono: undefined,
      email: '',
      nota: '',
    };
  }

  eliminar() {
    this.personas.pop();
  }
  constructor(public alertController: AlertController) {}

  // ALERTA EMERGENTE
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Exito',
      message: 'Se añadio el contacto',
      buttons: ['OK'],
    });

    await alert.present();
  }
  // FIN ALERTA EMERGENTE

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Contacto Eliminado',
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            console.log('Okay');
          },
        },
      ],
    });

    await alert.present();
  }
}
