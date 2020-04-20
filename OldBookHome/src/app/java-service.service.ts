import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouteReuseStrategy } from '@angular/router';

// registration details 
export class UserInfo{
  public firstName:string;
  public lastName: string;
  public email: string;
  public mobileNumber:string;
  public password:string; 
  public confirmPassword: string;
  public address: string;
  public address2: string;
  public district: string;
  public location: string;
  public pinCode: string;
  public state: string;
} 

// login details
export class UserLogin{
  public userName:string;
  public userPassword:string;
}

// book details
export class BookDetails{
  public book_name:string;
  public authors:string;
  public description:string; 
  public publisher:string;
  public publishedDate:string;
  public categories:string;
  public contentVersion:string;
  public isbn_type_10:string; 
  public isbnNo1:number; 
  public isbn_type_13:string;
  public isbnNo2:number;
  public smallThumbnail:string;
  public thumbnail:string;
  public amount:number=0.0;
  public currencyCode:string;
  public checkPrice:boolean;
  public addressId:number;
}

@Injectable({
  providedIn: 'root'
})
export class JavaServiceService {

  bookObj=new BookDetails();
  bookISBN:any;
  // userRole:string;
  
  private urls:string;
  constructor(private http:HttpClient, private router:Router) { 
  }
  public url="http://localhost:8080/";
  register(data:UserInfo){
    this.urls=this.url+"add";
    return this.http.post(this.urls,data);
  }
  getRole(){
    this.urls=this.url+"getRole";
    this.http.get(this.urls,{responseType: 'text'}).subscribe(
      data=>{
        // this.userRole=data;
        sessionStorage.setItem('userRole',data);
        // sessionStorage.setItem('username',this.userLogin.userName);
        // console.log(this.userRole); 
        // console.log( this.hasRole());
      }
    );
  }
  requestBookDetails(bookObj:BookDetails ){
    this.urls=this.url+"bookDetailsRequest";
    // console.log(bookObj.isbnNo1);
    this.http.post(this.urls,bookObj).subscribe(
      data=>{
        console.log("book stored.....");
      }
    );
  }

  addAddress(data:UserInfo){
    this.urls=this.url+"addAddress";
    return this.http.post(this.urls,data);
  }
  getAddress(){
    this.urls=this.url+"getAddress";
    return this.http.get(this.urls);
  }
  hasRole(){
    if(sessionStorage.getItem('userRole')==="deliveryPerson"){
      return true;
    }
    return false;
  }

}
