import { Component } from '@angular/core';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrl: './speakers.component.css'
})
export class SpeakersComponent {
  speakers = [
    { name: 'Benmoussa Rachid', 
      role: 'ENSA Marrakech, Université Cadi Ayyad, Laboratoire d\'ingénierie des systèmes appliqués (LISA)', 
      imageUrl: '../../../assets/images/speakers/benmoussa.webp', 
      description: 'Les Systèmes Cyber physique de production et logistique (CPPLS): Quelle convergence avec les pratiques classiques du génie industriel et logistique?'
    },
    { name: 'Charkaoui Abdelkabir', 
      role: ' FST Settat, Université Hassan I', 
      imageUrl: '../../../assets/images/speakers/charkaoui.webp', 
      description: 'Atelier Méthodologie de Rédaction d\'un Article Scientifique'
    },
    { name: 'Benfriha Khaled', 
    role: 'Fondateur de la plateforme technologique 4.0, maître de conférences à l\'école Nationale Supérieure d\'Arts et Métiers Paris, France', 
    imageUrl: '../../../assets/images/speakers/benfriha.webp', 
    description: 'Plateformes technologiques dédiées à l\'industrie 4.0'
  },
    { name: 'Mouni Mohamed Taher', 
      role: 'PDG Beyond 4.0', 
      imageUrl: '../../../assets/images/speakers/mouni.webp', 
      description: 'Atelier industrie 4.0: déploiement IOT sur la ligne Savonic'
    },

  ];
}