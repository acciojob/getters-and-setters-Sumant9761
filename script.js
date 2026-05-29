//complete this code
class Person {
	constructor(name: string, age: number){
		this._name = name;
		this._age = age;
	}
	get name(): string {
		return this._name;
	}
	set age(newAge: number) {
		this._age = newAge;
	}
}

class Student extends Person {
	study(): void {
		console.log(`{this.name} is studying`)
	}
}

class Teacher extends Person {
	teach(): void {
		console.log(`{this.name} is teaching`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
