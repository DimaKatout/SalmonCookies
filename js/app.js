'use strict'
var loc= [];
var locName=[];
var container = document.getElementById("d");

var tableEl=document.createElement('table');
container.appendChild(tableEl);

var seattle=new Location('Seattle',23,65,6.3);
var tokyo=new Location("Tokyo",3,24,1.2);
var dubai=new Location("Dubai",11,38,3.7);
var paris=new Location("Paris",20,38,2.3);
var lima=new Location("Lima",2,16,4.6);



function Location(locationName,minHourlyCus,maxHourlyCus,avgCokPerCust)
{this.locationName=locationName;
    this.minHourlyCus=minHourlyCus;
    this.maxHourlyCus=maxHourlyCus;
    this.avgCokPerCust=avgCokPerCust;
    this.arr=[];
    this.arrr=[];
    this.tot=[];
    this.sum=0;
this.totalSum=0;
loc.push(this);
locName.push(locationName);



}

Location.prototype.numberOfCustPerHour=function(){var num = Math.floor(Math.random() * (this.maxHourlyCus
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
    { this.arr.push(`max hourly customer is  ${this.maxHourlyCus}`);
    this.arr.push(`min hourly customer ${this.minHourlyCus} `);
    this.arr.push(`average cookies per customer ${this.avgCokPerCust}`);
    this.arr.push(`number of customer per hour ${this.numberOfCustPerHour()}`);
    this.arr.push(`amounts of cookies purchased for each hour ${this.cokPurchasedPerHour()}`);
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
    console.log(this.arr)

    for (let i = 0; i < this.arr.length; i++) {
        console.log("i  ", i, "   ", this.arr[i]);
        var liEl = document.createElement("li");

        ulEl.appendChild(liEl);
        liEl.textContent = this.arr[i];
        console.log(liEl);
    }

}

Location.prototype.calculateSum=function()
{// var sum = 0;
    this.arrr = [];
    for (var i = 6; i < 12; i++) {
        var numCokies = this.cokPurchasedPerHour()
        this.sum = this.sum + numCokies;
        //alert(i + 'am:' + numCokies + 'cookies');
        //this.arrr.push(`${i} am: ${numCokies} cookies`);
        this.arrr.push(numCokies);

        
        
    }
    for (var i = 12; i < 13; i++) {
        var numCokies = this.cokPurchasedPerHour();
        this.sum =this. sum + numCokies;
        //this.arrr.push(`${i} pm: ${numCokies} cookies`);
        this.arrr.push(numCokies);

        
        
        //alert(i + 'pm:' + numCokies + 'cookies');
    }
    for (var i = 1; i < 8; i++) {
        var numCokies = this.cokPurchasedPerHour();
        this.sum = this.sum + numCokies;
        //this.arrr.push(`${i} pm: ${numCokies} cookies`);
        this.arrr.push(numCokies);


        
        //alert(i + 'pm:' + numCokies + 'cookies');
    }
    
    
    this.arrr.push(this.sum);

return this.arrr;}
    //alert(this.arrr);}

    Location.prototype.sales=function()
    { var containerr = document.getElementById("locationSales");
    var h1Ell=document.createElement('h1');
    containerr.appendChild(h1Ell);
    h1Ell.textContent=this.locationName;
    var ullEl = document.createElement("ul");
    containerr.appendChild(ullEl);
   
    this.calculateSum(); 
    for (var i = 0; i < this.arrr.length; i++) {
        console.log("i  ", i, "   ", this.arrr[i]);
        var liiEl = document.createElement("li");
        ullEl.appendChild(liiEl);
        liiEl.textContent = this.arrr[i];
        console.log(liiEl);
        
    }}

    

    Location.prototype.totalSalesPerHour=function()
    {  this.arrr
        for (var i = 1; i < 16; i++) {
           
            this.totalSum = this.totalSum + this.arrr[i];
            //alert(i + 'am:' + numCokies + 'cookies');
            //this.arrr.push(`${i} am: ${numCokies} cookies`);
            this.tot.push(this.totalSum);
    
            
            
        }
        return this.tot;
    }
        
        
        //this.arrr.push(this.sum);
    
   
    

    Location.prototype.render=function()
    {
        var dataEl=document.createElement('tr');
    tableEl.appendChild(dataEl);
    var tdE0=document.createElement('td');
    dataEl.appendChild(tdE0);

    tdE0.textContent=this.locationName;


    var array=this.calculateSum();
for(let i=0;i<array.length;i++)
{
var tdEl=document.createElement('td');
tdEl.textContent=array[i];
dataEl.appendChild(tdEl);


}




}
/*var dataE2=document.createElement('td');
    tableEl.appendChild(dataE2);
    //var tdE2=document.createElement('td');
tdE2.textContent=this.sum;
dataE2.appendChild(tdE2);*/



    

    
    



/*var container = document.getElementById("d");

var tableEl=document.createElement('table');
container.appendChild(tableEl);*/



//had lazem a3melo be function


function renderHeader()
{var headerEl=document.createElement('tr');
tableEl.appendChild(headerEl);
var th1El=document.createElement('th');
headerEl.appendChild(th1El);
th1El.textContent=" ";
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
/*for(let i=0;i<Location.tot.length;i++)
{
var tdE3=document.createElement('td');
tdE3.textContent=Location.tot[i];
trEl.appendChild(tdE3);

}*/
/* 
for (let j=0;j<arrr.length;i++)
var sum=0;
{
for (let j=0;j<shops.length;j++)
{sum=sum+shops[i].salesPerHour[i]; 
}
var tdE1=create td
trE1.app
tdE1.text=sum;
//back to part 2 min 27 lab 8
}
}


 */

}


renderHeader();




for(let i=0;i<loc.length;i++){
    loc[i].createList(3,7);
    loc[i].sales();
    loc[i].render();
    loc[i].totalSalesPerHour();}

    renderFooter();




