'use strict'
var loc= [];
var locName=[];
var form=document.getElementById("locationsForm");
var sumArray=[];

var tot=[];
var arrr=[];
var arr=[];
var hours=['6a.m','7a.m','8a.m','9a.m','10a.m','11a.m','12p.m','1p.m','2p.m','3p.m','4p.m','5p.m','6p.m','7p.m'];
var seattle=new Location('Seattle',23,65,6.3);
var tokyo=new Location("Tokyo",3,24,1.2);
var dubai=new Location("Dubai",11,38,3.7);
var paris=new Location("Paris",20,38,2.3);
var lima=new Location("Lima",2,16,4.6);

var container = document.getElementById("d");

var tableEl=document.createElement('table');
container.appendChild(tableEl);

/*var seattle=new Location('Seattle',23,65,6.3);
var tokyo=new Location("Tokyo",3,24,1.2);
var dubai=new Location("Dubai",11,38,3.7);
var paris=new Location("Paris",20,38,2.3);
var lima=new Location("Lima",2,16,4.6);*/

//loc heye array kol ma yendaf object bendaf 3aaliha

function Location(locationName,minHourlyCus,maxHourlyCus,avgCokPerCust)
{this.locationName=locationName;
    this.minHourlyCus=minHourlyCus;
    this.maxHourlyCus=maxHourlyCus;
    this.avgCokPerCust=avgCokPerCust;
    //this.arr=[];
    //this.arrr=[];
    //this.tot=[];
    this.sum=0;
this.totalSum=0;
loc.push(this);
locName.push(locationName);



}

Location.prototype.numberOfCustPerHour=function()
{var num = Math.floor(Math.random() * (this.maxHourlyCus
    - this.minHourlyCus)) + this.minHourlyCus;
//alert(num);
return num;}


Location.prototype.cokPurchasedPerHour=function()
{ var h = Math.floor((this.numberOfCustPerHour()) * (this.avgCokPerCust));
    //alert('number of purchased cookies per hour');
    console.log(h)
    //alert(h);
    return h;}

    Location.prototype.arrFill=function()
    { arr.push(`max hourly customer is  ${this.maxHourlyCus}`);
    //this.arr.push(`min hourly customer ${this.minHourlyCus} `);
    arr.push(`min hourly customer ${this.minHourlyCus} `);
    arr.push(`average cookies per customer ${this.avgCokPerCust}`);
    arr.push(`number of customer per hour ${this.numberOfCustPerHour()}`);
    arr.push(`amounts of cookies purchased for each hour ${this.cokPurchasedPerHour()}`);
}

Location.prototype.createList=function()
{
    var container = document.getElementById("location")
    var h1El=document.createElement('h1');
    container.appendChild(h1El);
    h1El.textContent=this.locationName
    var ulEl = document.createElement("ul");
    container.appendChild(ulEl);

    this.arrFill();
    //console.log(this.arr)

    for (let i = 0; i < arr.length; i++) {
        //console.log("i  ", i, "   ", this.arr[i]);
        var liEl = document.createElement("li");

        ulEl.appendChild(liEl);
        liEl.textContent = arr[i];
        console.log(liEl);
    }

}

Location.prototype.calculateSum=function()
{ this.sum = 0;
    //this.arrr = [];
    arrr=[];
    for (var i = 6; i < 12; i++) {
        var numCokies = this.cokPurchasedPerHour()
        this.sum = this.sum + numCokies;
        //alert(i + 'am:' + numCokies + 'cookies');
        //this.arrr.push(`${i} am: ${numCokies} cookies`);
        //this.arrr.push(numCokies);
        arrr.push(numCokies);

        
        
    }
    for (var i = 12; i < 13; i++) {
        var numCokies = this.cokPurchasedPerHour();
        this.sum =this. sum + numCokies;
        //arrr.push(`${i} pm: ${numCokies} cookies`);
        //this.arrr.push(numCokies);
        arrr.push(numCokies);

        
        
        //alert(i + 'pm:' + numCokies + 'cookies');
    }
    for (var i = 1; i < 8; i++) {
        var numCokies = this.cokPurchasedPerHour();
        this.sum = this.sum + numCokies;
        //arrr.push(`${i} pm: ${numCokies} cookies`);
        //this.arrr.push(numCokies);
        arrr.push(numCokies);


        
        //alert(i + 'pm:' + numCokies + 'cookies');
    }
    
    
   // this.arrr.push(this.sum);
   arrr.push(this.sum);

//return this.arrr;
return arrr;}

Location.prototype.summtot=function()
{ this.sum = 0;
    //this.arrr = [];
    sumArray=[];
    for (var i = 6; i < 12; i++) {
        var numCokies = this.cokPurchasedPerHour()
        this.sum = this.sum + numCokies;
        //alert(i + 'am:' + numCokies + 'cookies');
        //this.arrr.push(`${i} am: ${numCokies} cookies`);
        //this.arrr.push(numCokies);
        sumArray.push(this.sum);

        
        
    }
    for (var i = 12; i < 13; i++) {
        var numCokies = this.cokPurchasedPerHour();
        this.sum =this. sum + numCokies;
        //arrr.push(`${i} pm: ${numCokies} cookies`);
        //this.arrr.push(numCokies);
        sumArray.push(this.sum);

        
        
        //alert(i + 'pm:' + numCokies + 'cookies');
    }
    for (var i = 1; i < 8; i++) {
        var numCokies = this.cokPurchasedPerHour();
        this.sum = this.sum + numCokies;
        //arrr.push(`${i} pm: ${numCokies} cookies`);
        //this.arrr.push(numCokies);
        sumArray.push(this.sum);


        
        //alert(i + 'pm:' + numCokies + 'cookies');
    }
    
    
   // this.arrr.push(this.sum);
   sumArray.push(this.sum);

//return this.arrr;
return sumArray;}
/*for (var i = 0; i < hours.length; i++) {
    var numCokies = this.cokPurchasedPerHour();
    this.sum = this.sum + numCokies;
    //this.arrr.push(`${i} pm: ${numCokies} cookies`);
    //this.arrr.push(numCokies);
    arrr.push(numCokies);
    //arrr.push(`${i} pm: ${numCokies} cookies`);
    
    
    
    
    
}*/


// this.arrr.push(this.sum);
//arrr.push(this.sum);

//return this.arrr;
//return arrr;}
    //alert(this.arrr);}

    Location.prototype.sales=function()
    { var containerr = document.getElementById("locationSales");
    var h1Ell=document.createElement('h1');
    containerr.appendChild(h1Ell);
    h1Ell.textContent=this.locationName;
    var ullEl = document.createElement("ul");
    containerr.appendChild(ullEl);
   
    this.calculateSum(); 
    for (var i = 0; i <arrr.length; i++) {
        //console.log("i  ", i, "   ", arrr[i]);
        var liiEl = document.createElement("li");
        ullEl.appendChild(liiEl);
        liiEl.textContent = arrr[i];
        console.log(liiEl);
        
    }}

    

    Location.prototype.totalSalesPerHour=function()
    {  //this.arrr
        for (var i = 1; i < 16; i++) {
           
            this.totalSum = this.totalSum + arrr[i];
            //alert(i + 'am:' + numCokies + 'cookies');
            //this.arrr.push(`${i} am: ${numCokies} cookies`);
            //this.tot.push(this.totalSum);
            tot.push(this.totalSum);
    
            
            
        }
       // return this.tot;
       return tot;
    }
        
        
        //this.arrr.push(this.sum);
    
   
    

    Location.prototype.render=function()
    {
        var dataEl=document.createElement('tr');
    tableEl.appendChild(dataEl);
    var tdE0=document.createElement('td');
    tdE0.textContent=this.locationName;

    dataEl.appendChild(tdE0);

    //tdE0.textContent=this.locationName;
    var array=this.calculateSum();
    for(let i=0;i<array.length;i++)
    {
    var tdEl=document.createElement('td');
    tdEl.textContent=array[i];
    dataEl.appendChild(tdEl);
    
    
    }
//had ta2kod men s7toh
    for(let i=0;i<tot.length;i++)
{var tdE2=document.createElement('td');
tdE2.textContent=sumArray[i];
dataEl.appendChild(tdE2);}
    }


   

//had lazem a3melo be function


function renderHeader()
{var headerEl=document.createElement('tr');
tableEl.appendChild(headerEl);
var th1El=document.createElement('th');
headerEl.appendChild(th1El);
//th1El.textContent=" ";
for (let i=6;i<12;i++)
{var thEl=document.createElement('th');
headerEl.appendChild(thEl);
thEl.textContent=`${i}a.m`};
for (let i=12;i<13;i++)
{var thEl=document.createElement('th');
headerEl.appendChild(thEl);
thEl.textContent=`${i}p.m`};
for (let i=1;i<8;i++)
{var thEl=document.createElement('th');
headerEl.appendChild(thEl);
thEl.textContent=`${i}p.m`};
var thEl=document.createElement('th');
headerEl.appendChild(thEl);
thEl.textContent=`Daily location total`;
}    


function renderFooter()
{var trEl=document.createElement('tr');
tableEl.appendChild(trEl);
var tddEl=document.createElement('td');
trEl.appendChild(tddEl);
tddEl.textContent="Total";
/*var sumtotal=0;
var myArray=this.summtot();
for (var i = 0; i < hours.length; i++)
{for (let i=0;i<myArray.length;i++){
    sumtotal=sumtotal+myArray[i];
    var tdE3=document.createElement('td');
tdE3.textContent=myArray[i];
trEl.appendChild(tdE3);

}}
*/
}
/*for(let i=0;i<tot.length;i++)
{
var tdE3=document.createElement('td');
tdE3.textContent=tot[i];
trEl.appendChild(tdE3);

}
for (var i = 0; i < hours.length; i++)
{var summation=0;
for(let j=0;j<arrr.length;j++)
{summation=summation+arrr[i];



}
var tdE4=document.createElement('td');
//tdE4.textContent=array[i];
tdE4.textContent=summation;

trEl.appendChild(tdE4);

}*/



/*for(let i=0;i<tot.length;i++)
{
var tdE3=document.createElement('td');
tdE3.textContent=tot[i];
trEl.appendChild(tdE3);

}*/
/*for (var i = 6; i < 12; i++)
{var summation=0;
for(let j=0;j<arrr.length;j++)
{summation=summation+arrr[i];



}
var tdE4=document.createElement('td');
//tdE4.textContent=array[i];
tdE4.textContent=summation;

trEl.appendChild(tdE4);

}


for (var i = 12; i < 13; i++)
{var summation=0;
for(let j=0;j<arrr.length;j++)
{summation=summation+arrr[i];
}
var tdE5=document.createElement('td');
//tdE4.textContent=array[i];
tdE5.textContent=summation;

trEl.appendChild(tdE5);}

for (let i=1;i<8;i++)
{var summation=0;
    for(let j=0;j<arrr.length;j++)
    {summation=summation+arrr[i];
    }
    var tdE6=document.createElement('td');
    //tdE4.textContent=array[i];
    tdE6.textContent=summation;
    
    trEl.appendChild(tdE6);}*/






renderHeader();

function handleSubmit()
{
    event.preventDefault();
    var name=event.target.name.value;
   // ma3na aljomleh i'm targeting the value inside the input field
   //event.target.maxHours.value hay aljomleh dayman btraje3 string fa lazem a3mel parseInt eza bedi ra8am
    var maxHours=parseInt(event.target.maxHours.value);
    var minHours=parseInt(event.target.minHours.value);
    var avgCook=parseFloat(event.target.avgCook.value);
    var newLocation=new Location(name,maxHours,minHours,avgCook );
    loc.push(newLocation);
    //7ada yefahmni had ..

    var rowCount=tableEl.rows.length;
    tableEl.deleteRow(rowCount-1);
    newLocation.render();
    renderFooter();
    form.reset();}
    //mo shart submit momken a3mel listen la 2ay event tani

form.addEventListener('submit',handleSubmit)




for(let i=0;i<loc.length;i++){
    loc[i].createList(3,7);
    loc[i].sales();
    loc[i].render();
    loc[i].totalSalesPerHour();}

    
   
   
    
    renderFooter();
