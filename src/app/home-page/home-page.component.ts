import { Component, OnInit } from "@angular/core";
import { AwardsService } from "../awards.service";
import { Awards } from "../shared/interfaces/awards";
import { Subscription } from "rxjs";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
  datasource: Awards[] = [];
  subscription: Subscription;

  constructor(private service: AwardsService) {}

  ngOnInit() {
    this.subscription = this.service.getAll().subscribe(data => {
      this.datasource = data;
    });
  }
}
