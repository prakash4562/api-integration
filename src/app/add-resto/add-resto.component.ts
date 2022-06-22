import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RestoService} from "../resto.service";

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  flag = false;
  addResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  })
  constructor(private restoService: RestoService) { }

  ngOnInit(): void {
  }

  submitRestoData() {
    this.restoService.saveRestoData(this.addResto.value).subscribe((result) => {
      this.flag = true;
      this.addResto.reset({})
    })
  }

  close() {
    this.flag = false;
  }
}
