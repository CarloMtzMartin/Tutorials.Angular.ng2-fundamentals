import { Component } from "@angular/core";

@Component({
  selector: "pm-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  pageTitle: string = "Acme Product Management";

  logout(): void {
    // Implement on Logout method here.
  }

  weight: number = 75;
  height: number = 1.8;
  bmi: number = 0;
  calculateBmi(): void {
    this.bmi = this.weight / (this.height * this.height);
  }
}
