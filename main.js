;

// let a = 'a';
// console.log(a);

let user = {     // объект
  name: "John",  // под ключом "name" хранится значение "John"
  age: 30,
  sayHi: function() {
  	console.log('Hi!');
  }
};

// function A() {
// 	this.method = function() {
// 		console.log(this);
// 	}
// };
// let o = new A();
// o.method();

let range = {
	from: 1,
	to: 10
}

// range[Symbol.iterator] = function () {
// 	return {
// 	    current: this.from,
// 	    last: this.to,

// 	    // 3. next() вызывается на каждой итерации цикла for..of
// 	    next: function () {
// 		      // 4. он должен вернуть значение в виде объекта {done:.., value :...}
// 		      if (this.current <= this.last) {
// 		        	return { done: false, value: this.current++ };
// 		      } else {
// 		        	return { done: true };
// 		      }
// 	    }
// 	}
// };

// for (let num of range) {
//   console.log(num);
// }

let room = {
  number: 23
};


let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup ссылается на room
};

room.occupiedBy = meetup;

let json_data = JSON.stringify(meetup, function(k, v) {
  	return (k == 'occupiedBy') ? "can not serialize" : v;
});
console.log(json_data);

let json_res = JSON.parse(json_data);

console.log(json_res);
// Array.from("asdfg afgas asdf");

function Person(name, age) {
	this.name = name;
	this.age = age;
	this.getName = function () {
		return this.name;
	}
}

Person.prototype.getAge = function () {
	return this.age;
}

class Person_ {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	get name() {
		return this._name;
	}
	set name(name) {
		if (name.length > 4) {
			this._name = name;
		} else {
			console.log("Name too short!");
		}
	}
	getAge() {
		return " 1 "+ this.age;
	}
}

class Animal {

  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    alert(`${this.name} бежит со скоростью ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    alert(`${this.name} стоит.`);
  }

}

class Rabbit extends Animal {
  hide() {
    alert(`${this.name} прячется!`);
  }

  run(speed, ...params) {
  	if (1) {
  		super.run(speed);
  	}
  }

  stop() {
    super.stop(); // вызываем родительский метод stop
    this.hide(); // и затем hide
  }
}

class RabbitSuper extends Rabbit {
    constructor(name, gun) {
        super(name);
        this.gun = true;
    }
    stop() {
        if (this.gun) {
        	// console.log(super);
            // super.super.stop();
        } else {
        	super.stop();
        }
    }
}

function load(src) {
	return new Promise(function(resolve,reject) {

		let script = document.createElement('script');
		script.src = src;
		script.onload = () => resolve(script);
		script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));
		document.head.append(script);
	});
}

load('new.js').then(
	function () {
		setTimeout((function() {}), 2000);
	},
	error => console.log(error.message)
);

fetch('test.json')
	.then(res => res.json())
	.then(r => console.log(r))
	.catch(err => console.log(err.message))

async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("готово!"), 5000)
  });

  let result = await promise; // будет ждать, пока промис не выполнится (*)

  console.log(result); // "готово!"
}

f();


