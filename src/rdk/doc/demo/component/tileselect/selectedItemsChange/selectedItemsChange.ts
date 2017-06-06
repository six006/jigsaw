import { Component,AfterContentInit} from "@angular/core";
import {ArrayCollection} from "../../../../../core/data/array-collection";

@Component({
  templateUrl: 'selectedItemsChange.html'
})
export class TileselecItemsChangeComponent{
    public selectedCity: ArrayCollection<any>;
    citys = [
        {label: "北京"},
        {label: "上海"},
        {label: "南京"},
        {label: "深圳"},
        {label: "长沙"},
        {label: "西安"}
    ];
    constructor(){

    }
    public basicSelectChange(cityArr:ArrayCollection<any>){
        cityArr.forEach((city)=> console.log(`tileselect message is: ${city.label}`));
    }
}

