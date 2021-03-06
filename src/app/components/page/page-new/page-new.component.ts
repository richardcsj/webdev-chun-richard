import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {PageService} from "../../../services/page.service.client";

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

  websiteId:string;
  pageName:string;
  pageTitle:string;
  formSubmitted: boolean;
  errorFlag: boolean;
  errorMsg = 'Page Name is mandatory';

  constructor(private pageService:PageService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
  	this.activatedRoute.params
    	.subscribe(
    		(params: any) => {
    		this.websiteId = params['wid'];
    		} 
	   );
  }
  createPage(){
    this.formSubmitted = true;
    if(this.pageName == undefined){
      this.errorFlag = true;
    }else{
    	let page = { _id: "", name:this.pageName , websiteId: this.websiteId, title: this.pageTitle};
    	this.pageService.createPage(this.websiteId,page)
    		.subscribe(
    			(page:any)=>{
    				this.router.navigate(['../'],{relativeTo:this.activatedRoute});
    			}
    		)
    }
  }

}
