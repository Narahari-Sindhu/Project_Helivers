import { Component } from '@angular/core';
import { MOCK_DATA } from './mock.const';
import { FormBuilder } from '@angular/forms';
interface MockDatas {
  id: Number;
  first_name: String;
  last_name: String;
  email: String;
  gender: String;
  avatar: String;
  domain: String;
  available: Boolean

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project_Helivers';
  mockdatas: any;
  searchForm: any;
  cartData: any[]=[];
  constructor(private fb: FormBuilder) { }

  

  ngOnInit(): void {
    this.mockdatas = MOCK_DATA;
    this.searchForm = this.fb.group({
      domain: [''],
      gender: [''],
      available: [''],

    });
    
  }
  searchByName(data: any) {
    if (data.target.value) {
      this.mockdatas = MOCK_DATA.filter(item => item.first_name.toUpperCase() === data.target.value.toUpperCase());

    } else {
      this.mockdatas = MOCK_DATA;
    }
  }
  searchData(data: any, value: string) {
    if (value === 'search') {
      this.mockdatas = MOCK_DATA.filter(item => item.domain.toUpperCase() === data.domain.toUpperCase() && item.gender.toUpperCase() === data.gender.toUpperCase() && item.available.toString() === data.available);

    } else {
      this.mockdatas=MOCK_DATA.values;
      
    }


  }
  addcart(data:any){
    const value:any = this.cartData.find(item => item.domain === data.domain);
     console.log(value)
    if(value && value.domain !== data.domain){
      this.cartData.push(
        { "id": data.id, "first_name": data.first_name, "last_name": data.last_name, "email": data.email, "gender": data.gender, "avatar": data.avatar, "domain": data.domain, "available": data.available 
      },)
    }else if(value === undefined){
      this.cartData.push(
        { "id": data.id, "first_name": data.first_name, "last_name": data.last_name, "email": data.email, "gender": data.gender, "avatar": data.avatar, "domain": data.domain, "available": data.available 
      },)
    }
  }
}
