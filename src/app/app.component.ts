import { Component } from "@angular/core";

@Component({
  selector: "app-root",

  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "my first Angular";
  setData(regform) {
    regform.preventDefault();
    console.log(regform);
    var ob = {
      k1: regform.target[0].value,
      k2: regform.target[1].value,
      k3: regform.target[2].value,
      k4: regform.target[3].value,
      k5: regform.target[4].value,
      k6: regform.target[5].value,
      k7: regform.target[6].value
    };
    localStorage.setItem("object", JSON.stringify(ob));
  }
  getData(a) {
    console.log(a);
    var user = JSON.parse(localStorage.getItem("object"));
    return user[a];
  }
}
