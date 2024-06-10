interface IFruitFormatter {
  formatter: () => string;
}

class Fruit implements IFruitFormatter {
  constructor(private fruitName: string, private season: string) {}

  formatter = () => {
    return `Fruit Name ${this.fruitName} Fruit Season ${this.season}`;
  };
}

const fruit1 = new Fruit("Mango", "Summer");

console.log(fruit1.formatter());
