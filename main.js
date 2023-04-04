console.log('Hello World!');
class data{
  constructor (name, age, department){
    this.name = name
    this.age = age;
    this.department = department 
  }
  details(){
    console.log(`${this.name} is a student of unilag studying ${this.department} and I am ${this.age} years old`)
  }
}
const Omotayo = new data ("Umar", 18, "Biochemistry")
Omotayo.details()

const arr = [1,2,3,-4,-6,8,-1]
const sortArr= arr.sort((a,b) =>{
  if (a > b){
    return -b
  }if(b > a){
    return a
  }
})
console.log(sortArr)

const arrs = [3,4,5,6,1,2]
console.log(arrs.sort())