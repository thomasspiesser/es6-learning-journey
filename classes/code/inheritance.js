import Employee from './classes.js';

class Subcontractor extends Employee {
  constructor(name, specialty) {
    super(name);
    this._specialty = specialty;
  }
  logSpecialty() {
    if (this._specialty) {
      return this._specialty;
    } else {
      return "can't do anything special";
    }
  }
  learn(specialty) {
    this._specialty = specialty;
  }
  useSuperWork(){
    console.log( super.doWork() );
    console.log('something');
  }
}
const hire = new Subcontractor( 'Peter' );

console.log('\nnew hire: \n');

console.log(hire.getName());
console.log(hire.logSpecialty());
hire.learn('cooking');
console.log(hire.logSpecialty());

hire.name = 'Peterle'

hire.useSuperWork();
