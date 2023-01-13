import './style.css';

const employeeList = document.querySelector('.employees');

function Employee(name) {
  this.name = name;

  this.say = function () {
    const employeeElement = document.createElement('li');
    employeeElement.textContent = `I am employee ${this.name}`;
    employeeList.append(employeeElement);
  };
}

function Vendor(name) {
  this.name = name;

  this.say = function () {
    const employeeElement = document.createElement('li');
    employeeElement.textContent = `I am vendor ${this.name}`;
    employeeList.append(employeeElement);
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
