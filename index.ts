function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLowerCase();
  } else {
    return input.toUpperCase();
  }
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter(
    (item: { title: string; rating: number }) => item.rating >= 4
  );
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];
  for (const arr of arrays) {
    for (const item of arr) {
      result.push(item);
    }
  }
  return result;
}

class Vehicle {
  constructor(private make: string, private year: number) {
    this.make = make;
    this.year = year;
  }
  getInfo() {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}
class Car extends Vehicle {
  constructor(make: string, year: number, private model: string) {
    super(make, year);
    this.model = model;
  }
  getModel() {
    return `Model: ${this.model}`;
  }
}

function processValue(value: string | number): number{
    if(typeof value ==="number"){
        return value * 2
    }
    return value.length
}

interface Product {
    name: string;
    price: number;
}
function getMostExpensiveProduct(products: Product[]): Product | null{
    if(products.length===0){
        return null
    }else{
        let expensiveProduct = products[0];
        products.forEach((item)=>{
            if(item.price > expensiveProduct.price){
                expensiveProduct = item
            }
        })
        return expensiveProduct
    }
}

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
function getDayType(day: Day): string{
    if(Day[day]==="Saturday" || Day[day]==="Sunday"){
        return "Weekend"
    }else{
        return "Weekday"
    }
    
}