import {
    Component, AfterContentInit, Renderer2, ViewContainerRef
} from "@angular/core";
import {ArrayCollection} from "jigsaw/core/data/array-collection";

@Component({
  templateUrl: './app.component.html'
})
export class TileselectTrackItemByDemoComponent implements AfterContentInit{
    public selectedCity:ArrayCollection<any>;
    citys = new ArrayCollection([
        {label: "北京",id:1},
        {label: "上海",id:2},
        {label: "南京",id:3},
        {label: "深圳",id:4},
        {label: "长沙",id:5},
        {label: "西安",id:6}
    ]);
    constructor(public viewContainerRef: ViewContainerRef,
                public renderer: Renderer2) {
    }
    public basicSelectChange(cityArr:ArrayCollection<any>){
        cityArr.forEach((city)=> console.log(`tileselect message is: ${city.label}`));
    }
    ngAfterContentInit() {
        this.selectedCity= new ArrayCollection([{label: "深圳",id:1},{label: "西安",id:6}]);
    }
}

