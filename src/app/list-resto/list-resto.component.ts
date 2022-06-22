import { Component, OnInit } from '@angular/core';
import {RestoService} from "../resto.service";

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

  collection: any = [];
  constructor(private restoService: RestoService) { }

  ngOnInit(): void {
    this.restoService.getList().subscribe((result) => {
      this.collection = result;
    })
  }

  deleteResto(item) {
    alert("Are you want to delete?")
    const objIndex = this.collection.findIndex((obj => obj.id == item))
    this.collection.splice(objIndex, 1)
    this.restoService.deleteRestoData(item).subscribe();
  }
}
