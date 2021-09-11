//Ejercicio 0
let values = ["Hare","Krishna","Hare","Krishna","Krishna","Krishna","Hare","Hare","Hare",":-O"]

function unique(arr) {
  let mySet = new Set(arr)
  let newFiltered = [...mySet]
  return newFiltered 
}

alert(unique(values))




//Ejercicios 1
let anagramas = ["nap","teachers","cheaters","PAN","ear","era","hectares"]
let myArr = []
function aclean(arr) {
  let word1
  let word2
  for(let i in arr) {
    for(let y in arr) {
      if (arr[i] === arr[y]) {
        continue
      }
      if(arr[i].length === arr[y].length)  {
        word1 = arr[i].split("").sort().join("").toLocaleLowerCase()
        word2 = arr[y].split("").sort().join("").toLocaleLowerCase()
        if(word1 == word2) { 
            myArr.push(arr[i])
            anagramas[i] = " "
        }
    }
      else {
        
      }
    }
  }
  console.log(myArr) 
}

console.log(aclean(anagramas))



//Ejercicio 2
//No funciona porque map.keys devuelve un onjeto y no se puede usar el .push en un objeto
//Para arreglar el codigo lo que puedes hacer es converitir map.keys() en array



//Ejercicio 3
//El ultimo valor que va a alertar es 1 ya que al momento que tu les pasas un 0 a la funcion de while va a detectar que el 0 es igual a FALSE por lo cual va a parar



//Ejercicio 4
//En la forma prefija los valores que va a mostrar son 1,2,3,4, ya que al momento que pones ++ antes vas a lograr que la variable se sume uno y luego lo compara
//En la forma sufija los valores que van a ser 1,2,3,4,5 porque primero lo compara y luego suma 1 



//Ejercicio 5
const  ask = (question, yes, no)=> {
 if (confirm(question)) yes();
else no();
} 
ask(
 "Do you agree?",
 ()=> {
alert("You agreed."); },
 ()=> {
alert("You canceled the execution."); }
);        


//Ejercicio 6
const makeCounter = {
  count: 7,
  counter: function() {
    return this.count + 1;
  },

  decrease: function() {
    return this.count - 1;
  },

  set: function(value) {
    return this.count = value;
  }


}

console.log(`${makeCounter.counter()} es el contador más uno, ${makeCounter.set(120)} es el nuevo contador, ${makeCounter.decrease()} se le resto uno al contador`)

//Ejercicio 7
while(true) {
  let num = Number(prompt("Ingrese un numero menor a 101"))
  if(typeof(num) === "number" && num>100)  { 
    break
  }
}



//Ejercicio 8
let list = {
value: 1,
next: {
value: 2,
next: {
value: 3,
next: {
value: 4,
next: null
}
}
}
};

let obj = list 
while(true) {
  console.log(obj.value)
  if (obj.next) {
    obj = obj.next
    
  }
  else {
    break
  }
}
function allValues() {
  console.log(obj.value)
  if (obj.next) {
    obj = obj.next
    allValues()
  }
  else {
    return
  }
}
