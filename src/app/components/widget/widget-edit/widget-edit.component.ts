import { Component, OnInit } from '@angular/core';
import  {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute,Router} from "@angular/router";


@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {

  widgetId:string;
	widget:any;
  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute,private router : Router) { }

  ngOnInit() {
  	this.activatedRoute.params
	.subscribe(
		(params: any) => {
		this.widgetId = params['wgid'];
		} 
	);
  this.widgetService.findWidgetById(this.widgetId)
    .subscribe(
      (widget:any)=>{
        this.widget = widget;
      },
      (error:any)=>{
        console.log(error);
      }
    )
 }

}
