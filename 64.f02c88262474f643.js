"use strict";(self.webpackChunksk_planes=self.webpackChunksk_planes||[]).push([[64],{6064:(W,U,r)=>{r.r(U),r.d(U,{FlightsModule:()=>p});var c=r(6895),N=r(7685),l=r(4006),f=r(6806),I=r(8505),t=r(4650),y=r(4004),q=r(6918);class m{constructor(e){this.db=e,this.API_URL="/flights"}getFlights(){return this.db.list(this.API_URL).snapshotChanges().pipe((0,y.U)(e=>e.map(o=>this.assignKey(o))))}addFlight(e){return this.db.list(this.API_URL).push(e)}getFlight(e){return this.db.object(`${this.API_URL}/${e}`).snapshotChanges().pipe((0,y.U)(o=>this.assignKey(o)))}editFlight(e,o){return this.db.object(`${this.API_URL}/${e}`).update(o)}removeFlight(e){return this.db.object(`${this.API_URL}/${e}`).remove()}assignKey(e){return{...e.payload.val(),key:e.key}}}m.\u0275fac=function(e){return new(e||m)(t.LFG(q.KQ))},m.\u0275prov=t.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"});var x=r(9891),b=r(3336),_=r(4859);const k=i=>i.value.startsWith("SK")?null:{incorrectCode:!0},O=i=>i.value.length>0?null:{incorrectCode:!0};var w=r(9549),J=r(4144),S=r(6709),E=r(5113),Y=r(3238);function P(i,e){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"Code is required!"),t.qZA())}function j(i,e){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"Min length is 4"),t.qZA())}function R(i,e){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"Max length is 7"),t.qZA())}function Q(i,e){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"Code has to start with SK prefix"),t.qZA())}function D(i,e){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"my own error"),t.qZA())}function L(i,e){if(1&i&&(t.TgZ(0,"mat-option",25),t._uU(1),t.qZA()),2&i){const o=e.$implicit;t.Q6J("value",o.value),t.xp6(1),t.hij(" ",o.label," ")}}function G(i,e){if(1&i){const o=t.EpF();t.TgZ(0,"div",17)(1,"div",18)(2,"div",12)(3,"span"),t._uU(4),t.qZA(),t.TgZ(5,"mat-icon",19),t.NdJ("click",function(){const d=t.CHM(o).index,u=t.oxw();return t.KtG(u.removeCrewMember(d))}),t._uU(6,"delete_forever"),t.qZA()()(),t.TgZ(7,"div",20)(8,"div",21)(9,"mat-form-field")(10,"mat-label"),t._uU(11,"Name"),t.qZA(),t._UZ(12,"input",22),t.qZA()(),t.TgZ(13,"div",7)(14,"mat-form-field")(15,"mat-label"),t._uU(16,"Job"),t.qZA(),t.TgZ(17,"mat-select",23),t.YNc(18,L,2,2,"mat-option",24),t.qZA()()()()()}if(2&i){const o=e.index,n=t.oxw();t.xp6(4),t.hij("Crew Member - ",o+1,""),t.xp6(3),t.Q6J("formGroupName",o),t.xp6(11),t.Q6J("ngForOf",n.jobs)}}class g{constructor(e){this.formBuilder=e,this.editMode=!1,this.jobs=[{label:"Stewardess",value:"stewardess"},{label:"Pilot",value:"pilot"},{label:"Mechanic",value:"mechanic"},{label:"Senior Cabin Crew",value:"senior_cabin_crew"},{label:"Co-Pilot",value:"co-pilot"}]}ngOnInit(){this.buildForm()}get f(){return this.form.controls}buildForm(){this.form=this.formBuilder.group({code:["SK",{validators:[l.kI.required,l.kI.minLength(4),l.kI.maxLength(7),k]}],origin:["",{validators:[l.kI.required]}],destination:["",{validators:[l.kI.required]}],departureTime:["",{validators:[l.kI.required]}],returnTime:["",{validators:[l.kI.required]}],additionalInfo:["",{validators:[O]}],discount:!1,crew:this.formBuilder.array(this.editMode?[]:[this.buildCrewMember()])})}buildCrewMember(e={}){return this.formBuilder.group({name:e.name||"",job:e.job||""})}removeCrewMember(e){this.crew.removeAt(e)}get crew(){return this.form.get("crew")}addCrewMember(e){this.crew.push(this.buildCrewMember(e))}setFlight(e){const{key:o,...n}=e;this.form.patchValue(n),n?.crew?.forEach(s=>this.addCrewMember(s))}}g.\u0275fac=function(e){return new(e||g)(t.Y36(l.qu))},g.\u0275cmp=t.Xpm({type:g,selectors:[["app-form"]],inputs:{editMode:"editMode"},decls:53,vars:11,consts:[[3,"formGroup"],[1,"row"],[1,"col-sm-8"],["matInput","","placeholder","Code","formControlName","code"],["codeInput",""],[4,"ngIf"],["align","end"],[1,"col-sm-4"],["matInput","","placeholder","Origin","formControlName","origin"],["matInput","","placeholder","Destination","formControlName","destination"],["matInput","","placeholder","Departure time","formControlName","departureTime"],["matInput","","placeholder","Return time","formControlName","returnTime"],[1,"col"],["matInput","","placeholder","Additional information","formControlName","additionalInfo"],["formControlName","discount"],["class","crew-container shadow","formArrayName","crew",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",3,"click"],["formArrayName","crew",1,"crew-container","shadow"],[1,"row","crew-header"],[1,"float-end",3,"click"],[1,"row",3,"formGroupName"],[1,"col-sm-5"],["matInput","","placeholder","Name","formControlName","name"],["placeholder","Job","formControlName","job"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,o){if(1&e&&(t.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"mat-form-field")(4,"mat-label"),t._uU(5,"Code"),t.qZA(),t._UZ(6,"input",3,4),t.YNc(8,P,2,0,"mat-error",5),t.YNc(9,j,2,0,"mat-error",5),t.YNc(10,R,2,0,"mat-error",5),t.YNc(11,Q,2,0,"mat-error",5),t.TgZ(12,"mat-hint",6),t._uU(13),t.qZA()()()(),t.TgZ(14,"div",1)(15,"div",7)(16,"mat-form-field")(17,"mat-label"),t._uU(18,"Origin"),t.qZA(),t._UZ(19,"input",8),t.qZA()(),t.TgZ(20,"div",7)(21,"mat-form-field")(22,"mat-label"),t._uU(23,"Destination"),t.qZA(),t._UZ(24,"input",9),t.qZA()()(),t.TgZ(25,"div",1)(26,"div",7)(27,"mat-form-field")(28,"mat-label"),t._uU(29,"Departure time"),t.qZA(),t._UZ(30,"input",10),t.qZA()(),t.TgZ(31,"div",7)(32,"mat-form-field")(33,"mat-label"),t._uU(34,"Return time"),t.qZA(),t._UZ(35,"input",11),t.qZA()()(),t.TgZ(36,"div",1)(37,"div",12)(38,"mat-form-field"),t._UZ(39,"textarea",13),t.YNc(40,D,2,0,"mat-error",5),t.qZA()()(),t.TgZ(41,"div",1)(42,"div",12)(43,"mat-checkbox",14),t._uU(44,"With SK Discount"),t.qZA()()(),t.YNc(45,G,19,3,"div",15),t.TgZ(46,"div",1)(47,"div",12)(48,"button",16),t.NdJ("click",function(){return o.addCrewMember()}),t._uU(49,"Add crew member"),t.qZA()()()(),t.TgZ(50,"pre"),t._uU(51),t.ALo(52,"json"),t.qZA()),2&e){let n,s,d,u,M,A;t.Q6J("formGroup",o.form),t.xp6(8),t.Q6J("ngIf",null==o.form||null==(n=o.form.get("code"))||null==n.errors?null:n.errors.required),t.xp6(1),t.Q6J("ngIf",null==o.form||null==(s=o.form.get("code"))||null==s.errors?null:s.errors.minlength),t.xp6(1),t.Q6J("ngIf",null==o.form||null==(d=o.form.get("code"))||null==d.errors?null:d.errors.maxlength),t.xp6(1),t.Q6J("ngIf",null==o.form||null==(u=o.form.get("code"))||null==u.errors?null:u.errors.incorrectCode),t.xp6(2),t.hij("",null==(M=o.form.get("code"))?null:M.value.length," / 7"),t.xp6(27),t.Q6J("ngIf",null==o.form||null==(A=o.form.get("additionalInfo"))||null==A.errors?null:A.errors.incorrectCode),t.xp6(5),t.Q6J("ngForOf",o.crew.controls),t.xp6(6),t.hij(" ",t.lcZ(52,9,o.form.value)," ")}},dependencies:[c.sg,c.O5,b.Hw,w.KE,w.hX,w.bx,w.TO,J.Nt,_.lW,S.oG,E.gD,Y.ey,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,l.x0,l.CE,c.Ts],styles:[".crew-container[_ngcontent-%COMP%]{margin-top:15px;padding:15px;background:white}.crew-header[_ngcontent-%COMP%]{margin-bottom:20px;font-weight:700}.err[_ngcontent-%COMP%]{color:red}"]});const $=["flightForm"];function H(i,e){if(1&i&&(t.TgZ(0,"span")(1,"strong"),t._uU(2),t.qZA()()),2&i){const o=t.oxw();t.xp6(2),t.hij(" ",o.flight.code,"")}}class v{constructor(e,o,n,s){this.flightService=e,this.route=o,this.toast=n,this.router=s}ngAfterViewInit(){this.loadFlight()}loadFlight(){this.flightService.getFlight(this.route.snapshot.params.key).pipe((0,I.b)(o=>this.flightForm.setFlight(o))).subscribe(o=>this.flight=o)}removeFlight(){this.flightService.removeFlight(this.flight.key).then(this.onRemoveSuccess.bind(this),this.onRemoveFailure.bind(this))}editFlight(){this.flightService.editFlight(this.flight.key,this.flightForm.form.value).then(this.onEditSuccess.bind(this),this.onEditFailure.bind(this))}onEditSuccess(){this.router.navigate(["/dashboard"]),this.toast.success("Flight was successfuly edited!")}onEditFailure(e){this.toast.failure(e.message)}onRemoveSuccess(){this.router.navigate(["/dashboard"]),this.toast.success("Flight was successfuly removed!")}onRemoveFailure(e){this.toast.failure(e.message)}}v.\u0275fac=function(e){return new(e||v)(t.Y36(m),t.Y36(f.gz),t.Y36(x.k),t.Y36(f.F0))},v.\u0275cmp=t.Xpm({type:v,selectors:[["app-edit-flight"]],viewQuery:function(e,o){if(1&e&&t.Gf($,5),2&e){let n;t.iGM(n=t.CRH())&&(o.flightForm=n.first)}},decls:17,vars:2,consts:[[1,"row"],[1,"col-9"],[4,"ngIf"],[1,"col-3"],["id","remove-btn",3,"click"],[3,"editMode"],["flightForm",""],[1,"col","text-end"],["mat-raised-button",""],["mat-raised-button","","color","primary",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h3"),t._uU(3,"Edit flight "),t.YNc(4,H,3,1,"span",2),t._uU(5," details"),t.qZA()(),t.TgZ(6,"div",3)(7,"mat-icon",4),t.NdJ("click",function(){return o.removeFlight()}),t._uU(8,"delete_forever"),t.qZA()()(),t._UZ(9,"app-form",5,6),t.TgZ(11,"div",0)(12,"div",7)(13,"button",8),t._uU(14,"RESET"),t.qZA(),t.TgZ(15,"button",9),t.NdJ("click",function(){return o.editFlight()}),t._uU(16,"SAVE"),t.qZA()()()),2&e&&(t.xp6(4),t.Q6J("ngIf",o.flight),t.xp6(5),t.Q6J("editMode",!0))},dependencies:[c.O5,b.Hw,_.lW,g],styles:["#remove-btn[_ngcontent-%COMP%]{color:red}#remove-btn[_ngcontent-%COMP%]:hover{cursor:pointer}"]});var a=r(5412);const K=["flightForm"];class F{constructor(e,o,n){this.flightsService=e,this.dialogRef=o,this.toast=n}addFlight(){this.flightsService.addFlight(this.flightForm.form.value).then(this.onCreatingSuccess.bind(this),this.onCreatingFailure.bind(this))}onCreatingSuccess(){this.dialogRef.close(),this.toast.success("Flight has been successfully created!")}onCreatingFailure(e){this.toast.failure(e.message)}}function z(i,e){if(1&i&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&i){const o=e.$implicit;t.xp6(1),t.hij(" ",o.name," ")}}F.\u0275fac=function(e){return new(e||F)(t.Y36(m),t.Y36(a.so),t.Y36(x.k))},F.\u0275cmp=t.Xpm({type:F,selectors:[["app-new-flight-modal"]],viewQuery:function(e,o){if(1&e&&t.Gf(K,5),2&e){let n;t.iGM(n=t.CRH())&&(o.flightForm=n.first)}},decls:12,vars:1,consts:[["mat-dialog-title",""],["flightForm",""],[1,"row"],[1,"col"],["mat-raised-button","","mat-dialog-close",""],["mat-raised-button","","color","primary",3,"disabled","click"]],template:function(e,o){if(1&e&&(t.TgZ(0,"h2",0),t._uU(1,"New Flight Creator"),t.qZA(),t.TgZ(2,"mat-dialog-content"),t._UZ(3,"app-form",null,1),t.qZA(),t.TgZ(5,"mat-dialog-actions")(6,"div",2)(7,"div",3)(8,"button",4),t._uU(9,"Cancel"),t.qZA(),t.TgZ(10,"button",5),t.NdJ("click",function(){return o.addFlight()}),t._uU(11,"Create"),t.qZA()()()()),2&e){const n=t.MAs(4);t.xp6(10),t.Q6J("disabled",n.form.invalid)}},dependencies:[a.ZT,a.uh,a.xY,a.H8,_.lW,g]});class C{constructor(e,o,n){this.router=e,this.dialogRef=o,this.data=n,this.flight=n}goToEditFlight(){this.dialogRef.close(),this.router.navigate(["/dashboard/flights/",this.flight.key])}}C.\u0275fac=function(e){return new(e||C)(t.Y36(f.F0),t.Y36(a.so),t.Y36(a.WI))},C.\u0275cmp=t.Xpm({type:C,selectors:[["app-details"]],decls:14,vars:2,consts:[[1,"row"],[1,"col"],["mat-dialog-close","",1,"float-end"],[1,"label"],[4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",1,"float-end",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h3"),t._uU(3," FLIGHTS DETAILS "),t.TgZ(4,"mat-icon",2),t._uU(5,"close"),t.qZA()(),t.TgZ(6,"p",3),t._uU(7),t.qZA(),t.TgZ(8,"p",3),t._uU(9,"Crew:"),t.qZA(),t.TgZ(10,"ul"),t.YNc(11,z,2,1,"li",4),t.qZA(),t.TgZ(12,"button",5),t.NdJ("click",function(){return o.goToEditFlight()}),t._uU(13," EDIT FLIGHT "),t.qZA()()()),2&e&&(t.xp6(7),t.hij("Code: ",o.flight.code,""),t.xp6(4),t.Q6J("ngForOf",o.flight.crew))},dependencies:[c.sg,b.Hw,a.ZT,_.lW]});class Z{}function B(i,e){if(1&i){const o=t.EpF();t.TgZ(0,"div",3),t.NdJ("click",function(){const d=t.CHM(o).$implicit,u=t.oxw();return t.KtG(u.showDetails(d))}),t._UZ(1,"app-flight-card",4),t.qZA()}if(2&i){const o=e.$implicit;t.xp6(1),t.Q6J("flight",o)}}Z.\u0275fac=function(e){return new(e||Z)},Z.\u0275cmp=t.Xpm({type:Z,selectors:[["app-flight-card"]],inputs:{flight:"flight"},decls:14,vars:4,consts:[[1,"card-container"],[1,"shadow","card-content"],[1,"row"],[1,"col"],[1,"origin"],[1,"destination"],[1,"time"],[1,"icon-container","shadow"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"p",4),t._uU(5),t.qZA(),t.TgZ(6,"p",5),t._uU(7),t.qZA()()(),t.TgZ(8,"div",2)(9,"p",6),t._uU(10),t.qZA()()(),t.TgZ(11,"div",7)(12,"mat-icon"),t._uU(13,"airplanemode_active"),t.qZA()()()),2&e&&(t.xp6(5),t.hij(" ",o.flight.origin,""),t.xp6(2),t.hij(" ",o.flight.destination,""),t.xp6(3),t.AsE(" ",o.flight.departureTime," - ",o.flight.returnTime,""))},dependencies:[b.Hw],styles:["[_nghost-%COMP%]{cursor:pointer}.card-container[_ngcontent-%COMP%]{position:relative;padding:10px}.card-content[_ngcontent-%COMP%]{padding:30px 20px;background:white}.icon-container[_ngcontent-%COMP%]{position:absolute;display:flex;align-items:center;justify-content:center;left:50%;top:-10px;height:50px;width:50px;background:white;border-radius:50%;z-index:10;border:1px solid grey;transform:translate(-50%)}.icon-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#00008b}.time[_ngcontent-%COMP%]{text-align:center;font-size:13px;color:gray}.destination[_ngcontent-%COMP%], .origin[_ngcontent-%COMP%]{font-size:26px;font-weight:700;color:#ff1493}"]});class T{constructor(e,o){this.flightsService=e,this.dialog=o,this.flights$=this.flightsService.getFlights()}openNewFlightModal(){this.dialog.open(F)}showDetails(e){this.dialog.open(C,{data:e})}}T.\u0275fac=function(e){return new(e||T)(t.Y36(m),t.Y36(a.uw))},T.\u0275cmp=t.Xpm({type:T,selectors:[["app-flights"]],decls:5,vars:3,consts:[[1,"row","flights-container"],["class","col-sm-4",3,"click",4,"ngFor","ngForOf"],["mat-fab","","color","accent",1,"new-flight-btn",3,"click"],[1,"col-sm-4",3,"click"],[3,"flight"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,B,2,1,"div",1),t.ALo(2,"async"),t.qZA(),t.TgZ(3,"button",2),t.NdJ("click",function(){return o.openNewFlightModal()}),t._uU(4,"+"),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",t.lcZ(2,1,o.flights$)))},dependencies:[c.sg,_.cs,Z,c.Ov],styles:[".flights-container[_ngcontent-%COMP%]{padding-top:30px}.new-flight-btn[_ngcontent-%COMP%]{position:fixed;bottom:50px;right:50px;font-size:30px}"]});const X=[{path:"",component:T},{path:":key",component:v}];class h{}h.\u0275fac=function(e){return new(e||h)},h.\u0275mod=t.oAB({type:h}),h.\u0275inj=t.cJS({imports:[f.Bz.forChild(X),f.Bz]});class p{}p.\u0275fac=function(e){return new(e||p)},p.\u0275mod=t.oAB({type:p}),p.\u0275inj=t.cJS({imports:[c.ez,N.h,l.u5,l.UX,h]})}}]);