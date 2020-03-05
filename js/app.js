'use strict'
var loc= [];
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
loc.push(this);


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
{ var sum = 0;
    this.arrr = [];
    for (var i = 6; i < 12; i++) {
        var numCokies = this.cokPurchasedPerHour()
        sum = sum + numCokies;
        //alert(i + 'am:' + numCokies + 'cookies');
        this.arrr.push(`${i} am: ${numCokies} cookies`);
        
        
        
    }
    for (var i = 12; i < 13; i++) {
        var numCokies = this.cokPurchasedPerHour();
        sum = sum + numCokies;
        this.arrr.push(`${i} pm: ${numCokies} cookies`);
        
        
        //alert(i + 'pm:' + numCokies + 'cookies');
    }
    for (var i = 1; i < 8; i++) {
        var numCokies = this.cokPurchasedPerHour();
        sum = sum + numCokies;
        this.arrr.push(`${i} pm: ${numCokies} cookies`);

        
        //alert(i + 'pm:' + numCokies + 'cookies');
    }
    
    
    this.arrr.push(`Total:  ${sum}  'cookies`);}
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

    

    Location.prototype.render=function()
    {var dataEl=document.createElement('tr');
    tableEl.appendChild(dataEl);
for(let i=0;i<13;i++)
{
var tdEl=document.createElement('td');
tdEl.textContent=


}

    }

    
    for(let i=0;i<loc.length;i++){
        loc[i].createList(3,7);
        loc[i].sales();
    
    
    }



var container = document.getElementById("d");

var tableEl=document.createElement('table');
container.appendChild(tableEl);

var headerEl=document.createElement('tr');
tableEl.appendChild(headerEl);
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





