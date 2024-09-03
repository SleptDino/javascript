/*const product_1 = {
    id : "FR0695",
    name : "durian",
    quantity : 5,
    unit : "kilograms",
    available : true
};

console.log("There are", product_1.quantity, product_1.unit, "of", product_1.name +".");
*/

const product_1 = {
    id : "ST0059",
    name : "Blue pen",
    quantity : 25,
    unit_price : 1.95,
    available : true,
    getPrice : function(num) {
        if (this.available && num<=this.quantity) {
            return num * this.unit_price;
        } else {
            return "not available";
        }
    }
};

let x = 30;
console.log( "The price is", product_1.getPrice(x) );
