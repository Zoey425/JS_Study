import getType from "./getType"
import random from './getRandom'


console.log(typeof 'Hello Ey') // String 으로 출력
console.log(typeof 123) // number으로 출력

console.log(typeof true) // boolean
console.log(typeof undefined) // undefined
console.log(typeof null) // object
console.log(typeof {}) // object
console.log(typeof []) // object
console.log(getType(123)) //Number
console.log(getType(false)) // Boolean
console.log(getType(null)) // Null
console.log(getType({})) // Object
console.log(getType([])) // Array


//----------------------------
// 산술연산자 (arithmetic operator)

console.log(1 + 2)
console.log(5 - 7)
console.log(3 * 4)
console.log(10 / 2)
console.log(7 % 5)


//----------------------------
// 할당 연산자 (assignment operator)

const u = 2 // = 가 할당연산자. 
            // const : 재 할당이 불가능

let z = 2
//b = b + 1
//b += 1
//b *= 2
//b /= 2
console.log(z)



//----------------------------
// 비교 연산자 (comparison operator)

const a = 1
const b = 7
console.log(a === b)


function isEqual(x, y){
  return x === y
}
console.log(isEqual(1, 1))
console.log(isEqual(2, '2'))

console.log(a !== b)
console.log(a < b)
console.log(a > b)
console.log(a >= b) // 크거나 같다


//----------------------------
// 논리 연산자 (logical operator)

const c = 1 === 123
const d = 'AB' === 'AB'
const e = false

console.log(c)
console.log(d)
console.log(e) 
console.log('&&: ', c && e ) // && false 값이 하나 이상이면 false
console.log('||: ', c || d || e) // || true가 하나 이상이면 true
console.log('!: ', !c) // ! 부정 연산자(특정한 데이터 반대값이 나타남)



//----------------------------
// 삼항 연산자 (ternary operator)

const f = 1 < 2

  if(a){
    console.log('참')
  }else{
    console.log('거짓')
  }

console.log(f ? '진실' : '거짓')



//----------------------------
// 조건문 (IF statement)

const a1 = random()

switch (a1){
  case 0:  
    console.log('a is 0')
    break
  case 2:
    console.log('a is 2')
    break
  case 4:
    console.log('a is 4')
    break
  default:
    console.log('rest...')
}

if(a1 === 0){
  console.log('a is 0')
} else if (a1 === 2){
  console.log('a is 2')
} else if (a1 === 4){
  console.log('a is 4')
} else {
  console.log('rest...')
}


//----------------------------
// 반복문 (For statement)
// for (시작조건; 종료조건; 변화조건) {}

const ulEl = document.querySelector('ul')
console.log(ulEl)

for (let i = 0; i < 5; i += 1) {
  const li = document.createElement('li')
  li.textContent = `list-${i + 1}`
 
  if((i+1) % 2 === 0){
    li.addEventListener('click', function() {
        console.log(li.textContent)
      })
  }

  ulEl.appendChild(li)
}



//----------------------------
// 변수 유효범위 (Variable Scope)
// var, let, const

function scope() {
  if (true) {
    const m = 123
    console.log('in: ', m) // 변수 a의 유효 범위

    let g = 234
    console.log('in: ', g)
  }
}
scope()


//----------------------------
// 형 변환 (Type conversion)

const hi = 1
const bye = '1'

console.log(hi === bye) // 일치연산자
console.log(hi == bye) // 형변환이 일어나서 데이터 값은 동등하다고 보여진다. 되도록 안쓰는걸 권장



// Truthy(참 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14' ...

// Falsy(거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN(Not a Number)

if(undefined) {
  console.log(123)
}


//----------------------------
// 함수 복습

function sum() {
  // console.log(x)
  // return x+y
  console.log(arguments) // 매개 변수를 안넣고 사용 가능하지만, 배열로 나오게 된다. 
  return arguments[0] + arguments[1]
}

const su = sum(1, 3)
const di = sum(4, 12)

console.log(su)
console.log(su + di)




//----------------------------
// 화살표 함수
// () => {} vs function () {}

const double = function (x) {
  return x * 2
}

console.log('double: ', double(7))

// const doubleArrow = (x) => {
//   return x * 2
// }

const doubleArrow = x => ({name:'EY'})
console.log('doubleArrow: ', doubleArrow(7))




//----------------------------
// 즉시실행 함수
// IIFE, Immediately-Invoked Function Expression

const aa = 7
function doublE() {
  console.log(aa * 2)
}

doublE();


(function () {
  console.log(aa * 2)
})(); // 즉시 실행 함수 


(function () {
  console.log(aa * 2)
})(); // 즉시 실행 함수 





//----------------------------
// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

const bb = 7

doubleE()

function doubleE() {
  console.log(bb * 2)
}





//----------------------------
// 타이머 함수
// setTimeout(함수, 시간) : 일정 시간 후 함수 실행
// setInterval(함수, 시간) : 시간 간격마다 함수 실행
// clearTimeout() :  설정된 Timeout 함수를 종료
// clearInterval() : 설정된 Interval 함수를 종료


//시간에 사용되는 단위는 ms 1초 = 1,000
// setTimeout(function () {
//   console.log('hi ey')
// }, 3000)


//화살표 함수 
// const timer = setTimeout(() => {
//   console.log('hi ey')
// }, 3000)


const timer = setInterval(() => {
 console.log('hi ey')
 }, 3000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
  clearTimeout(timer)
})




//----------------------------
// 콜백 (Callback)
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)


function timeout(cb) {
  setTimeout(() => {
    console.log('EUEUEU')
    cb()
  }, 3000)
}

timeout(() => {
  console.log('Done')
})



//----------------------------
// 자바스크립트 클래스


const ey = {
  firstName : 'Zoey',
  lastName : 'Park',
  getFulName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(ey.getFulName())


const amy = {
  firstName : 'Amy',
  lastName: 'Clarke',
  getFulName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(amy.getFulName())


const neo = {
  firstName : 'Neo',
  lastName: 'Smith',
  getFulName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(neo.getFulName())


const heropy = {} 
// 리터럴
// 객체 리터럴 {...} 을 사용하면 객체를 쉽게 만들 수 있습니다. 
// 그런데 개발을 하다 보면 유사한 객체를 여러 개 만들어야 할 때가 생기곤 합니다. 
// 복수의 사용자, 메뉴 내 다양한 아이템을 객체로 표현하려고 하는 경우가 그렇죠.

// 'new' 연산자와 생성자 함수를 사용하면 유사한 객체 여러 개를 쉽게 만들 수 있습니다.


function User(first, last) {
  this.firstName = first
  this.lastName = last
}

User.prototype.getFullName = function (){
  return `${this.firstName}, ${this.lastName}`
}

// 생성자 함수
// 생성자 함수(constructor function)와 일반 함수에 기술적인 차이는 없습니다. 
// 다만 생성자 함수는 아래 두 관례를 따릅니다.

// 1. 함수 이름의 첫 글자는 대문자로 시작합니다.
// 2. 반드시 'new' 연산자를 붙여 실행합니다.

const son = new User('min', 'Son')
const zoe = new User('zoe', 'Park')


console.log(son.getFullName())
console.log(zoe.getFullName())



//----------------------------
// this
// 일반(Normal) 함수는 '호출 위치'에서 따라 this 정의!
// 화살표(Arrow) 함수는 자신이 선언된 '함수 범위'에서 this 정의!


const heropy2 = {
  name : 'Heropy',
  normal: function() {
    console.log(this.name)
  },
  arrow: () => {
    // console.log(this.name)
  }
}

heropy2.normal() // Heropy
heropy2.arrow() // undefined

const amy2 = {
  name : 'Amy',
  normal : heropy2.normal,
  arrow: heropy2.arrow 
}

amy2.normal() // Amy
amy2.arrow() // undefined




function User2(name) {
  this.name = name
}


User2.prototype.normaL = function () {
  console.log(this.name)
}

// User2.prototype.arroW = () => {
//   console.log(this.name)
// }


const mona = new User2('monamo')

mona.normaL()
// mona.arroW()


const timer2 = {
  name:'monamoZ',
  timeout: function () {
   setTimeout(() => {
    console.log(this.name)
   }, 2000)
  }
}

timer2.timeout()




//----------------------------
// ES6 Classes
// ES6에 등장한 Classes 패턴 확인

const zoepark = {
  name:'zoey',
  normal() { 
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}

zoepark.normal()
zoepark.arrow()


class User3 {
  constructor(first, last) { 
    //내부함수
    this.firstName = first
    this.lastName = last
    
  }
  getFullName(){
        
  }
}


const mina = new User3('mina', 'kim')
console.log(mina,getFullName())