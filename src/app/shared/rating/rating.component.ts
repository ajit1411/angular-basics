import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from "@angular/core";

@Component({
    selector: "rating",
    templateUrl: "./rating.component.html",
    styleUrls: ["./rating.component.css"]
})

export class Rating implements OnChanges {
    @Input() rating: number = 0;
    cropWidth: number = 0;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    ngOnChanges(): void {
        this.cropWidth = this.rating * 75 / 5;
    };
    onClick() {
        console.log(this)
        this.ratingClicked.emit(`Rating: ${this.rating}`)
    }
}