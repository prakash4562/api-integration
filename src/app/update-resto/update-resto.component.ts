import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {RestoService} from "../resto.service";

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {

  flag = false;
  editResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  })

  constructor(private router: ActivatedRoute, private restoService: RestoService) { }

  ngOnInit(): void {
    this.restoService.getCurrentRestoData(this.router.snapshot.params['id']).subscribe((result) => {
      this.editResto = new FormGroup({
        name: new FormControl(result['name']),
        email: new FormControl(result['email']),
        address: new FormControl(result['address'])
      })
    })
  }

  editRestoData() {
    this.restoService.updateRestoData(this.router.snapshot.params['id'], this.editResto.value).
      subscribe();
    this.flag = true;
  }

  close() {
    this.flag = false;
  }
}
