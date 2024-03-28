import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scientific',
  templateUrl: './scientific.component.html',
  styleUrls: ['./scientific.component.css']
})
export class ScientificComponent implements OnInit {
  committeeMembers: string[] = [];

  ngOnInit(): void {
    // Assuming the data could come from an API or service in a real-world scenario
    this.committeeMembers = [
      'Ahlaqqach Mustapha | ESITH Casablanca',
      'El Harraki Imad | ENIM Rabat',
      'Allaoui Ali | EST Béni Mellal USMS',
      'El Mhamedi Abderrahman | Paris 8 University',
      'Allaoui Hamid | University of Artois',
      'Elassali Raja | ENSA Marrakech, UCA',
      'Auhmani Khalid | ENSA Marrakech, UCA',
      'Elfezazi Said | EST SAFI, UCA',
      'Belhadi Amine | Rabat Business School, UIR',
      'Elharouni Fatine | ENSA Marrakech, UCA',
      'Benazzouz Touria | ENSA Marrakech, UCA',
      'Essaber Fatima Ezzahra | ENSA Marrakech, UCA',
      'Benhammou Abdelaziz | ENSA Safi, UCA',
      'Idboufker Noureddine | ENSA Marrakech, UCA',
      'Benhida Khalid | EST Safi, UCA',
      'Irhirane El Hassan | ENSA Marrakech, UCA',
      'Benmoussa Rachid | ENSA Marrakech, UCA',
      'Laaouina Loubna | ENSA Fez, USMBA',
      'Bouyahia Fatima | ENSA Marrakech, UCA',
      'Latif Adnane | ENSA Marrakech, UCA',
      'Charkaoui Abdelkabir | FST Settat, UH1',
      'Nejeoui Abderrazzak | ENSA Marrakech, UCA',
      'Cherrafi Anass | EST Safi, UCA',
      'Starostka-Patyk Marta | Czestochowa University of Technology',
      'Dahbi Samya | ENSA Marrakech, UCA',
      'Tajer Abdelouahed | ENSA Marrakech, UCA',
      'Dakkak Badr | ENSA Marrakech, UCA',
      'Touriki Fatima Ezzahra | ENSA SAFI, UCA',
      'Echchatbi Abdelwahed | FST Settat, UCA'
    ];
  }
}
