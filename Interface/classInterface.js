var Fruit = /** @class */ (function () {
    function Fruit(fruitName, season) {
        var _this = this;
        this.fruitName = fruitName;
        this.season = season;
        this.formatter = function () {
            return "Fruit Name ".concat(_this.fruitName, " Fruit Season ").concat(_this.season);
        };
    }
    return Fruit;
}());
var fruit1 = new Fruit("Mango", "Summer");
console.log(fruit1.formatter());
