import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class ServerElementComponent implements OnInit {
  // with this we can use the property on the parent, it is binded now, any parent component is now able to bind to element
  // from the outside we can use srvElement now if we want to access the element property outside of this component
  //  our parent now can pass stuff to this component
  @Input("srvElement")
  element: { type: string; name: string; content: string };
  constructor() {}

  ngOnInit(): void {}
}
