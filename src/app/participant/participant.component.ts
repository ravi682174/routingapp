import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray} from '@angular/forms';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {
myForm :FormGroup;

  constructor(private fb :FormBuilder) { }

  ngOnInit() {
    this.myForm =this.fb.group
    (
      {accounts: this.fb.array([])}
    )
    
            }

  get accountForms(){
    return this.myForm.get('accounts') as FormArray
  }

  addAccount()
  {
    const account =this.fb.group({
   acctId :[],
   acctNo :[],
   acctName:[],
   acctEffDt:[],
   acctExpDt :[],
   balTyp: [],

    })

    this.accountForms.push(account);
  }

  deleteAccounts(i)
  {
    this.accountForms.removeAt(i);
  }
  

}
