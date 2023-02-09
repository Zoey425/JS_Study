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
