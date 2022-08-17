import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserdataService } from '../services/userdata.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
  addressform!:FormGroup;
  
  constructor(private route: ActivatedRoute, private userservice: UserdataService,private formbuilder:FormBuilder) { 
    this.addressform=formbuilder.group({
      address:["",Validators.required],
      city:["",Validators.required],
      state:["",Validators.required],
      phonenumber:["",Validators.required],
      pincode:["",Validators.required]


    })
  }
  onSubmit()
  {
    console.log(this.addressform.value)
  }

 use:any

  ngOnInit(): void {
     const id=this.route.snapshot.paramMap.get('id');
    console.log("user id", this.route.snapshot.paramMap.get('id'))
    this.userservice.user(id).subscribe({
       next:data=>{
      console.log("data fetched",data),
       this.use=data,
     }
  })

}
}
