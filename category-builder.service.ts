import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryBuilderService {
  ageRangeName:string = 'Not Set';
  change: BehaviorSubject<boolean> = new BehaviorSubject(false)
  constructor() { }
}
