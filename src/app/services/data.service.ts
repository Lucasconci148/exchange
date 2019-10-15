import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class DataService { 
    dollar: number;

    getDollar() {
        return this.dollar;
    }

    setDollar(data) {
        this.dollar = data;
    }
}