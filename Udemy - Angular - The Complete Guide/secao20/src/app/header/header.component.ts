import { Subscription } from 'rxjs';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy{
  private userSubscribe: Subscription;
  isAuth = false;

  constructor(private dataStorageService: DataStorageService, private authService: AuthService) { }

  ngOnInit(){
    this.userSubscribe = this.authService.user.subscribe(user => {
      this.isAuth = !user ? false : true;
    });
  }

  onLogout(){
    this.authService.logout();
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  ngOnDestroy(){
    this.userSubscribe.unsubscribe();
  }
}
