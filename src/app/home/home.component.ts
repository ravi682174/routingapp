import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myForm :FormGroup;
  //strcBrCod : string[];
  products =["Net", "Gross", "DL Ratio"];
  branchCode=["600","920","930","267","100"]
  constructor( private fb:FormBuilder) {}
  ngOnInit() {
    this.myForm=this.fb.group({
      custGrpId: ['', Validators.required],
      custGrpName: ['',Validators.required], 
      strcBrCod: ['', Validators.required],
    
      balAggrMeth:['',Validators.required],
      strcEffDt:['',Validators.required],
      strcExpDt:[''],
      constantIntRt: '',
      custRemarks:'',
      submit:''
    })

  
 // custGrpId = new FormControl('', [Validators.required]);
  
    
    //this.myForm.valueChanges.subscribe(console.log);
  }
email = new FormControl('', [Validators.required, Validators.email]);
custGrpId = new FormControl('', [Validators.required]);
custGrpName = new FormControl('', [Validators.required]);
strcBrCod = new FormControl('', [Validators.required]);
balAggrMeth = new FormControl('', [Validators.required]);
strcEffDt = new FormControl('', [Validators.required]);
getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :    '';
  }
 getEmptyMessage() {
   
   if (this.custGrpId.touched ){
    return this.custGrpId.hasError('required') ? 'You must enter a Customer Group Id' : '';}
  if (this.custGrpName.touched){
    return this.custGrpName.hasError('required') ? 'You must enter a Customer Group Name' : '';}
if (this.strcBrCod.touched){
    return this.strcBrCod.hasError('required') ? 'You must enter a Structure Branch Code' : '';}
  if (this.balAggrMeth.touched){
    return this.balAggrMeth.hasError('required') ? 'You must enter a Balance Aggregation Method' : '';}
  if (this.strcEffDt.touched){
    return this.strcEffDt.hasError('required') ? 'You must enter a Structure Effective Date' : '';}
  }

getUrl() {


    return "url('https://www.pxl.be/Assets/website/pxl_algemeen/afbeeldingen/pxl_beeld_geselecteerd.jpg')";
  }

}
