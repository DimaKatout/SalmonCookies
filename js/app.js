var Seattle = {
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
    /*[`max hourly customer is  ${this.maxHourlyCus}`,
   `min hourly customer ${this.minHourlyCus} `,
   `average cookies per customer ${this.avgCokPerCust}`,]
     `number of customer per hour ${this.numberOfCustPerHour()}`,
    `amounts of cookies purchased for each hour ${this.cokPurchasedPerHour() }`]*/

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
    }
};


Seattle.createList();
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

Tokyo = {
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
    /*[`max hourly customer is  ${this.maxHourlyCus}`,
   `min hourly customer ${this.minHourlyCus} `,
   `average cookies per customer ${this.avgCokPerCust}`,]
     `number of customer per hour ${this.numberOfCustPerHour()}`,
    `amounts of cookies purchased for each hour ${this.cokPurchasedPerHour() }`]*/

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
    }

};
Tokyo.createList();



Dubai =
{
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
    /*[`max hourly customer is  ${this.maxHourlyCus}`,
   `min hourly customer ${this.minHourlyCus} `,
   `average cookies per customer ${this.avgCokPerCust}`,]
     `number of customer per hour ${this.numberOfCustPerHour()}`,
    `amounts of cookies purchased for each hour ${this.cokPurchasedPerHour() }`]*/

    createList: function () {
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
    }
};
Dubai.createList();



Paris = {
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
    /*[`max hourly customer is  ${this.maxHourlyCus}`,
   `min hourly customer ${this.minHourlyCus} `,
   `average cookies per customer ${this.avgCokPerCust}`,]
     `number of customer per hour ${this.numberOfCustPerHour()}`,
    `amounts of cookies purchased for each hour ${this.cokPurchasedPerHour() }`]*/

    createList: function () {
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
    }
};

Paris.createList();


Lima = {
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
    /*[`max hourly customer is  ${this.maxHourlyCus}`,
   `min hourly customer ${this.minHourlyCus} `,
   `average cookies per customer ${this.avgCokPerCust}`,]
     `number of customer per hour ${this.numberOfCustPerHour()}`,
    `amounts of cookies purchased for each hour ${this.cokPurchasedPerHour() }`]*/

    createList: function () {
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
    calculateSum: function () {
        var sum = 0;
        arr = [];
        for (var i = 6; i < 12; i++) {
            var numCokies = this.cokPurchasedPerHour()
            sum = sum + numCokies;
            //alert(i + 'am:' + numCokies + 'cookies');
            arr.push(`${i} am: ${numCokies} cookies`);



        }
        for (var i = 12; i < 13; i++) {
            var numCokies = this.cokPurchasedPerHour();
            sum = sum + numCokies;
            arr.push(`${i} pm: ${numCokies} cookies`);


            //alert(i + 'pm:' + numCokies + 'cookies');
        }
        for (var i = 1; i < 8; i++) {
            var numCokies = this.cokPurchasedPerHour();
            sum = sum + numCokies;
            arr.push(`${i} pm: ${numCokies} cookies`);


            //alert(i + 'pm:' + numCokies + 'cookies');
        }


        arr.push(`Total:${sum} + 'cookies`);
        alert(arr);

        //alert('Total:' + sum + 'cookies' );
    }


};
Lima.createList();
Lima.calculateSum();
