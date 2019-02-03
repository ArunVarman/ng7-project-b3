import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD8UxOS7l0W3I7Ha5KWaa-nL5xjnCj6G9s',
      authDomain: 'ng-recipe-book-9b5fe.firebaseapp.com',
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
