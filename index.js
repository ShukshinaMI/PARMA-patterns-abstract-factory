import './style.css';

function Employee(name) {
  this.name = name;

  this.say = function () {
    console.log('I am employee ' + name);
  };
}

function Vendor(name) {
  this.name = name;

  this.say = function () {
    console.log('I am vendor ' + name);
  };
}

function EmployeeFactory() {
  this.create = function (name) {
    return new Employee(name);
  };
}

function VendorFactory() {
  this.create = function (name) {
    return new Vendor(name);
  };
}

function runAcquaintance() {
  const persons = [];

  const employeeFactory = new EmployeeFactory();
  const vendorFactory = new VendorFactory();

  persons.push(
    employeeFactory.create('Masha'),
    employeeFactory.create('Dasha'),
    vendorFactory.create('Pasha'),
    vendorFactory.create('Sasha')
  );

  persons.forEach((person) => {
    person.say();
  });
}

runAcquaintance();
