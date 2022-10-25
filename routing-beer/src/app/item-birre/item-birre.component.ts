import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { BirreService } from '../birre.service';

@Component({
  selector: 'app-item',
  templateUrl: './item-birre.component.html',
  styleUrls: ['./item-birre.component.css']
})
export class ItemBirreComponent implements OnInit {
  routeObs: Observable<ParamMap> | undefined;
  foodServiceObs: Observable<Object> | undefined;
  items: any;
  constructor(
  private route: ActivatedRoute,
  private router: Router,
  private location: Location,
  private service: BirreService) {}

  ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }
  getRouterParam = (params: ParamMap) => {
    console.log(params);
    let itemId = params.get('id'); //Ottengo l'id dai parametri
    console.log(itemId); //Stampo su console
    this.foodServiceObs = this.service.searchD(itemId!);
    this.foodServiceObs.subscribe((data) => ((this.items = data), console.log(data)));
  };

  back() : void{
    this.location.back();
  };
}