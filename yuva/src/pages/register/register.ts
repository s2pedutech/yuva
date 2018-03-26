import { Component } from '@angular/core';
import {
  Alert,
  AlertController,
  IonicPage,
  Loading,
  LoadingController,
  NavController
} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { ListPage } from '../list/list';
import { EmailValidator } from '../../validators/email';
import { MobileValidator } from '../../validators/mobile';
import { MarksValidator } from '../../validators/marks';
import { YearValidator } from '../../validators/year';
import { NameValidator } from '../../validators/name';
import { FirebaseProvider } from '../../providers/firebase/firebase';


import firebase from 'firebase/app';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  
  collegedata : Array<any> = [];

college = [
 {
   college: 'YCCE,Nagpur',
 },
  {
   college: 'RKNCOE,Nagpur',
 },
   {
   college: 'Priyadarshini COE,Nagpur',
 },
   {
   college: 'MIET,Gondia',
 },
   {
   college: 'JIT, Nagpur',
 },
  {
   college: 'BNCOE, Pusad',
 },
   {
   college: 'Anjuman COE',
 },
   {
   college: 'SBJITMR,Nagpur',
 },
   {
   college: 'BDCE,Wardha',
 },
   {
   college: 'KDKCOE',
 },
   {
   college: 'KDK,Womens',
 },
   {
   college: 'Umrer COE,Umrer',
 },
   {
   college: 'SDCOE',
 },
   {
   college: 'GNIET,Nagpur',
 },
   {
   college: 'KITS,Ramtek',
 },
   {
   college: 'Govindrao Wanjari COE',
 },
   {
   college: 'SVPC, Nagpur',
 },
   {
   college: 'NIT,Kamleshwar Road',
 },
   {
   college: 'Pandav COE',
 },
   {
   college: 'MPCE',
 },
   {
   college: 'Wainganga COE',
 },
   {
   college: 'TGPCET',
 },
   {
   college: 'SCET,Nagpur',
 },
   {
   college: 'MIET,Bhandara',
 },
   {
   college: 'Raisoni Group',
 },
   {
   college: 'SPACE',
 },
   {
   college: 'ITMCOE',
 },
   {
   college: 'PCCOE,Pune',
 },
   {
   college: 'RCERT,Chandrapur',
 },
   {
   college: 'BIT,Ballarpur',
 },
   {
   college: 'Namdeorao Poraddiwar COE,Gadchiroli',
 },
   {
   college: 'PRPCEM,Amravati',
 },
   {
   college: 'Ram Meghe COE,Badnera',
 },
   {
   college: 'Shegaon COE',
 },
   {
   college: 'Mauli COE',
 },
   {
   college: 'Shivaji Shikshan Sanstha COE,Akola',
 },
   {
   college: 'Nadurkar Engg. College',
 },
   {
   college: 'STC,Khamgaon',
 }
 ];        

 stream = [
 {
   stream: 'B.E',
 },
  
 {
   stream: 'B.tech',
 },
 
 {
   stream: 'B.Sc',
 },
  
 {
   stream: 'B.C.A',
 },
  
 {
   stream: 'B.C.C.A',
 },
 
 {
   stream: 'M.C.A',
 },
 
 {
   stream: 'M.Tech',
 },
 {
   stream: 'Other',
 }];         


branch = [
 {
   branch: 'CSE',
 },
  {
   branch: 'Electronics',
 },
  {
   branch: 'E&TC',
 },
  {
   branch: 'I.T.',
 },
  {
   branch: 'Mechanical',
 },
  {
   branch: 'Civil',
 },
  {
   branch: 'Other',
 }];         

 
 selectedStream = this.stream[0]; 

 selectedBranch = this.branch[0]; 
  public signupForm: FormGroup;
  
  
  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public authProvider: AuthProvider,
    formBuilder: FormBuilder,
    public data: FirebaseProvider
  ) {
  
   this.data.loadCollegeData().subscribe(k => {
   this.collegedata = k;
     console.log(this.collegedata);
     console.log(this.collegedata[0]);
selectedCollege = this.collegedata[0];
});
 
 console.log(this.selectedCollege); 

  
    this.signupForm = formBuilder.group({
    name: [
        '',
        Validators.compose([Validators.required, NameValidator.isValid])
      ],
      email: [
        '',
        Validators.compose([Validators.required, EmailValidator.isValid])
      ],
        mobile: [
        '',
        Validators.compose([Validators.required, MobileValidator.isValid])
      ],
      ssc: [
        '',
        Validators.compose([Validators.required, MarksValidator.isValid])
      ],
       hsc: [
        '',
        Validators.compose([Validators.required, MarksValidator.isValid])
      ],
       degree: [
        '',
        Validators.compose([Validators.required, MarksValidator.isValid])
      ],
       year: [
        '',
        Validators.compose([Validators.required, YearValidator.isValid])
      ]
    });
  }

  async signupUser(): Promise<void> {
    if (!this.signupForm.valid) {
      console.log(
        `Form is not valid yet, current value: ${this.signupForm.value}`
      );
    } else {
      const loading: Loading = this.loadingCtrl.create();
      loading.present();

        const name = this.signupForm.value.name;
      const email = this.signupForm.value.email;
      const mobile = this.signupForm.value.mobile;
      const ssc = this.signupForm.value.ssc;
       const hsc = this.signupForm.value.hsc;
        const degree = this.signupForm.value.degree;
       const year = this.signupForm.value.year;
       const clg = this.selectedCollege;
       const brnch = this.selectedBranch;
        const strm = this.selectedStream;
       console.log(this.selectedCollege);
      console.log(mobile);
      console.log(email)
     

      try {
      
        var u = {"name":name,"email":email,"mobile":mobile,"ssc":ssc,"hsc":hsc,"degree":degree,"year":year,"clg":clg,"brnch":brnch,"strm":strm};
        await this.authProvider.signupUser(
          email,
          u
        );
        await loading.dismiss();
        // we need to save the mobile number to student in firebase
        this.navCtrl.setRoot(ListPage);
      } catch (error) {
        await loading.dismiss();
        const alert: Alert = this.alertCtrl.create({
          message: error.message,
          buttons: [{ text: 'Ok', role: 'cancel' }]
        });
        alert.present();
      }
    }
  }
}