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

    for(let i=0;i<loc.length;i++){
        loc[i].createList(3,7);
        loc[i].sales();
    
    
    }


/*var Seattle = {
    minHourlyCus: 23,
    maxHourlyCus: 65,
    avgCokPerCust: 6.3,
    numberOfCustPerHour: function () {
        var num = Math.floor(Math.random() * (this.maxHourlyCus
            - this.minHourlyCus)) + this.minHourlyCus;
        //alert(num);
        return num;
    },

    cokPurchasedPerHour: function () {
        var h = Math.floor((this.numberOfCustPerHour()) * (this.avgCokPerCust));
        //alert('number of purchased cookies per hour');
        console.log(h)
        //alert(h);
        return h;
    }
    ,
    arr: [],
    arrFill: function () {
        this.arr.push(`max hourly customer is  ${this.maxHourlyCus}`);
        this.arr.push(`min hourly customer ${this.minHourlyCus} `);
        this.arr.push(`average cookies per customer ${this.avgCokPerCust}`);
        this.arr.push(`number of customer per hour ${this.numberOfCustPerHour()}`);
        this.arr.push(`amounts of cookies purchased for each hour ${this.cokPurchasedPerHour()}`);
    },
    //this is wrong we can't call a function except inside function in the object
    //[`max hourly customer is  ${this.maxHourlyCus}`,
   //`min hourly customer ${this.minHourlyCus} `,
   //`average cookies per customer ${this.avgCokPerCust}`,]
    // `number of customer per hour ${this.numberOfCustPerHour()}`,
    //`amounts of cookies purchased for each hour ${this.cokPurchasedPerHour() }`]

    createList: function () {
        var container = document.getElementById("seattle")
        var ulEl = document.createElement("ul");
        container.appendChild(ulEl);
        this.arrFill();
        console.log(this.arr)

        for (let i = 0; i < this.arr.length; i++) {
            console.log("i  ", i, "   ", Seattle.arr[i]);
            var liEl = document.createElement("li");

            ulEl.appendChild(liEl);
            liEl.textContent = this.arr[i];
            console.log(liEl);
        }
    },
    arrr: [],
    calculateSum: function () {
        var sum = 0;
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
        
        
        this.arrr.push(`Total:  ${sum}  'cookies`);
        //alert(this.arrr);
        
        //alert('Total:' + sum + 'cookies' );
    },
    
    sales: function () {
        var containerr = document.getElementById("seattleSales");
        var ullEl = document.createElement("ul");
        containerr.appendChild(ullEl);
       
        this.calculateSum(); 
        for (var i = 0; i < this.arrr.length; i++) {
            console.log("i  ", i, "   ", this.arrr[i]);
            var liiEl = document.createElement("li");
            ullEl.appendChild(liiEl);
            liiEl.textContent = this.arrr[i];
            console.log(liiEl);
            
        }
        
        
    }
    
    
};*/

//Seattle.createList();
//Seattle.calculateSum();
//Seattle.sales();



// console.log(Seattle.numberOfCustPerHour(1,2));

// Seattle.prototype.HI = function(){
//     console.log('aaa');
// };

// Seattle.createList();
// Seattle.pp();

//console.log(Seattle);


//Seattle.numberOfCustPerHour();
//Seattle.cokPurchasedPerHour();
//Seattle.createList();

/*Tokyo = {
    minHourlyCus: 3,
    maxHourlyCus: 24,
    avgCokPerCust: 1.2,
    numberOfCustPerHour: function () {
        var num = Math.floor(Math.random() * (this.maxHourlyCus
            - this.minHourlyCus)) + this.minHourlyCus;
        //alert(num);
        return num;
    },

    cokPurchasedPerHour: function () {
        var h = Math.floor((this.numberOfCustPerHour()) * (this.avgCokPerCust));
        //alert('number of purchased cookies per hour');
        console.log(h)
        //alert(h);
        return h;
    }
    ,
    arr: [],
    arrFill: function () {
        this.arr.push(`max hourly customer is  ${this.maxHourlyCus}`);
        this.arr.push(`min hourly customer ${this.minHourlyCus} `);
        this.arr.push(`average cookies per customer ${this.avgCokPerCust}`);
        this.arr.push(`number of customer per hour ${this.numberOfCustPerHour()}`);
        this.arr.push(`amounts of cookies purchased for each hour ${this.cokPurchasedPerHour()}`);
    },
    //this is wrong we can't call a function except inside function in the object
    //[`max hourly customer is  ${this.maxHourlyCus}`,
   //`min hourly customer ${this.minHourlyCus} `,
   //`average cookies per customer ${this.avgCokPerCust}`,]
     //`number of customer per hour ${this.numberOfCustPerHour()}`,
    //`amounts of cookies purchased for each hour ${this.cokPurchasedPerHour() }`]

    createList: function () {
        var container = document.getElementById("tokyo")
        var ulEl = document.createElement("ul");
        container.appendChild(ulEl);
        this.arrFill();
        console.log(this.arr)

        for (let i = 0; i < this.arr.length; i++) {
            console.log("i  ", i, "   ", Tokyo.arr[i]);
            var liEl = document.createElement("li");

            ulEl.appendChild(liEl);
            liEl.textContent = this.arr[i];
            console.log(liEl);
        }
    },arrr: [],
    calculateSum: function () {
        var sum = 0;
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
        
        
        this.arrr.push(`Total:  ${sum}  'cookies`);
        //alert(this.arrr);
        
        //alert('Total:' + sum + 'cookies' );
    },
    
    sales: function () {
        var containerr = document.getElementById("tokyoSales");
        var ullEl = document.createElement("ul");
        containerr.appendChild(ullEl);
       
        this.calculateSum(); 
        for (var i = 0; i < this.arrr.length; i++) {
            console.log("i  ", i, "   ", this.arrr[i]);
            var liiEl = document.createElement("li");
            ullEl.appendChild(liiEl);
            liiEl.textContent = this.arrr[i];
            console.log(liiEl);
            
        }
        
        
    }
    
    
};


Tokyo.createList();
Tokyo.calculateSum();
Tokyo.sales();





Dubai =
{
    minHourlyCus: 11,
    maxHourlyCus: 38,
    avgCokPerCust: 3.7,
    numberOfCustPerHour: function () {
        var num = Math.floor(Math.random() * (this.maxHourlyCus
            - this.minHourlyCus)) + this.minHourlyCus;
        //alert(num);
        return num;
    },

    cokPurchasedPerHour: function () {
        var h = Math.floor((this.numberOfCustPerHour()) * (this.avgCokPerCust));
        //alert('number of purchased cookies per hour');
        console.log(h)
        //alert(h);
        return h;
    }
    ,
    arr: [],
    arrFill: function () {
        this.arr.push(`max hourly customer is  ${this.maxHourlyCus}`);
        this.arr.push(`min hourly customer ${this.minHourlyCus} `);
        this.arr.push(`average cookies per customer ${this.avgCokPerCust}`);
        this.arr.push(`number of customer per hour ${this.numberOfCustPerHour()}`);
        this.arr.push(`amounts of cookies purchased for each hour ${this.cokPurchasedPerHour()}`);
    },
    //this is wrong we can't call a function except inside function in the object
    /*[`max hourly customer is  ${this.maxHourlyCus}`,
   `min hourly customer ${this.minHourlyCus} `,
   `average cookies per customer ${this.avgCokPerCust}`,]
     `number of customer per hour ${this.numberOfCustPerHour()}`,
    `amounts of cookies purchased for each hour ${this.cokPurchasedPerHour() }`]*/

  /*  createList: function () {
        var container = document.getElementById("dubai")
        var ulEl = document.createElement("ul");
        container.appendChild(ulEl);
        this.arrFill();
        console.log(this.arr)

        for (let i = 0; i < this.arr.length; i++) {
            console.log("i  ", i, "   ", Dubai.arr[i]);
            var liEl = document.createElement("li");

            ulEl.appendChild(liEl);
            liEl.textContent = this.arr[i];
            console.log(liEl);
        }
    },
    arrr: [],
    calculateSum: function () {
        var sum = 0;
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
        
        
        //this.arrr.push(`Total:  ${sum}  'cookies`);
        //alert(this.arrr);
        
        //alert('Total:' + sum + 'cookies' );
    },
    
    sales: function () {
        var containerr = document.getElementById("dubaiSales");
        var ullEl = document.createElement("ul");
        containerr.appendChild(ullEl);
       
        this.calculateSum(); 
        for (var i = 0; i < this.arrr.length; i++) {
            console.log("i  ", i, "   ", this.arrr[i]);
            var liiEl = document.createElement("li");
            ullEl.appendChild(liiEl);
            liiEl.textContent = this.arrr[i];
            console.log(liiEl);
            
        }
        
        
    }
    
    
};


Dubai.createList();
Dubai.calculateSum();
Dubai.sales();
    




Paris = {
    minHourlyCus: 20,
    maxHourlyCus: 38,
    avgCokPerCust: 2.3,
    numberOfCustPerHour: function () {
        var num = Math.floor(Math.random() * (this.maxHourlyCus
            - this.minHourlyCus)) + this.minHourlyCus;
        //alert(num);
        return num;
    },

    cokPurchasedPerHour: function () {
        var h = Math.floor((this.numberOfCustPerHour()) * (this.avgCokPerCust));
        //alert('number of purchased cookies per hour');
        console.log(h)
        //alert(h);
        return h;
    }
    ,
    arr: [],
    arrFill: function () {
        this.arr.push(`max hourly customer is  ${this.maxHourlyCus}`);
        this.arr.push(`min hourly customer ${this.minHourlyCus} `);
        this.arr.push(`average cookies per customer ${this.avgCokPerCust}`);
        this.arr.push(`number of customer per hour ${this.numberOfCustPerHour()}`);
        this.arr.push(`amounts of cookies purchased for each hour ${this.cokPurchasedPerHour()}`);
    },
    //this is wrong we can't call a function except inside function in the object
    /*[`max hourly customer is  ${this.maxHourlyCus}`,
   `min hourly customer ${this.minHourlyCus} `,
   `average cookies per customer ${this.avgCokPerCust}`,]
     `number of customer per hour ${this.numberOfCustPerHour()}`,
    `amounts of cookies purchased for each hour ${this.cokPurchasedPerHour() }`]*/

   /* createList: function () {
        var container = document.getElementById("paris")
        var ulEl = document.createElement("ul");
        container.appendChild(ulEl);
        this.arrFill();
        console.log(this.arr)

        for (let i = 0; i < this.arr.length; i++) {
            console.log("i  ", i, "   ", Paris.arr[i]);
            var liEl = document.createElement("li");
            
            ulEl.appendChild(liEl);
            liEl.textContent = this.arr[i];
            console.log(liEl);
        }
    },
    arrr: [],
    calculateSum: function () {
        var sum = 0;
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
        
        
        this.arrr.push(`Total:  ${sum}  'cookies`);
        //alert(this.arrr);
        
        //alert('Total:' + sum + 'cookies' );
    },
    
    sales: function () {
        var containerr = document.getElementById("parisSales");
        var ullEl = document.createElement("ul");
        containerr.appendChild(ullEl);
       
        this.calculateSum(); 
        for (var i = 0; i < this.arrr.length; i++) {
            console.log("i  ", i, "   ", this.arrr[i]);
            var liiEl = document.createElement("li");
            ullEl.appendChild(liiEl);
            liiEl.textContent = this.arrr[i];
            console.log(liiEl);
            
        }
        
        
    }
    
    
};
Paris.createList();

Paris.createList();
Paris.calculateSum();
Paris.sales();




Lima = {
    minHourlyCus: 2,
    maxHourlyCus: 16,
    avgCokPerCust: 4.6,
    numberOfCustPerHour: function () {
        var num = Math.floor(Math.random() * (this.maxHourlyCus
            - this.minHourlyCus)) + this.minHourlyCus;
            //alert(num);
            return num;
        },
        
        cokPurchasedPerHour: function () {
            var h = Math.floor((this.numberOfCustPerHour()) * (this.avgCokPerCust));
            //alert('number of purchased cookies per hour');
            console.log(h)
            //alert(h);
            return h;
        }
        ,
        arr: [],
    arrFill: function () {
        this.arr.push(`max hourly customer is  ${this.maxHourlyCus}`);
        this.arr.push(`min hourly customer ${this.minHourlyCus} `);
        this.arr.push(`average cookies per customer ${this.avgCokPerCust}`);
        this.arr.push(`number of customer per hour ${this.numberOfCustPerHour()}`);
        this.arr.push(`amounts of cookies purchased for each hour ${this.cokPurchasedPerHour()}`);
    },
    //this is wrong we can't call a function except inside function in the object
    /*[`max hourly customer is  ${this.maxHourlyCus}`,
    `min hourly customer ${this.minHourlyCus} `,
    `average cookies per customer ${this.avgCokPerCust}`,]
    `number of customer per hour ${this.numberOfCustPerHour()}`,
    `amounts of cookies purchased for each hour ${this.cokPurchasedPerHour() }`]*/
    
   /* createList: function () {
        var container = document.getElementById("lima")
        var ulEl = document.createElement("ul");
        container.appendChild(ulEl);
        this.arrFill();
        console.log(this.arr)
        
        for (let i = 0; i < this.arr.length; i++) {
            console.log("i  ", i, "   ", Lima.arr[i]);
            var liEl = document.createElement("li");
            
            ulEl.appendChild(liEl);
            liEl.textContent = this.arr[i];
            console.log(liEl);
        }
    },
    arrr: [],
    calculateSum: function () {
        var sum = 0;
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
        
        
        this.arrr.push(`Total:  ${sum}  'cookies`);
        //alert(this.arrr);
        
        //alert('Total:' + sum + 'cookies' );
    },
    
    sales: function () {
        var containerr = document.getElementById("limaSales");
        var ullEl = document.createElement("ul");
        containerr.appendChild(ullEl);
       
        this.calculateSum(); 
        for (var i = 0; i < this.arrr.length; i++) {
            console.log("i  ", i, "   ", this.arrr[i]);
            var liiEl = document.createElement("li");
            ullEl.appendChild(liiEl);
            liiEl.textContent = this.arrr[i];
            console.log(liiEl);
            
        }
        
        
    }
    
    
};
Lima.createList();
Lima.calculateSum();
Lima.sales();
//Lima.sales();*/

