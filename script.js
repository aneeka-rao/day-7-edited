function fullName(name){
    return name
}
console.log(fullName("Aneeka Rao"))
function fullName2(name, lname){
    return name + " " + lname
}
console.log(fullName2("Aneeka", "Rao"))
function addNumbers(a, b){
    sum=a+b
    return sum
}
console.log(addNumbers(5, 6))
function areaOfRectangle(length, width){
    area=length*width
    return area
}
console.log(areaOfRectangle(5, 6))
function perimeterOfRectangle(length, width){
    perimeter=2*(length+width)
    return perimeter
}
console.log(perimeterOfRectangle(5, 6))
function volumeOfRectPrism(length, width, height){
    volume=length*width*height
    return volume
}
console.log(volumeOfRectPrism(5, 6, 2))
function areaOfCircle(r){
    area=Math.PI*r*r
    return area
}
console.log(areaOfCircle(5))
function circumOfCircle(r){
    cc=Math.PI*2*r
    return cc
}
console.log(circumOfCircle(5))
function density(mass, volume){
    den=mass/volume
    return den
}
console.log(density(7, 1))
function speed(dis, time){
    sp=dis/time
    return sp
}
console.log(speed(60, 2))
function weight(mass, gravity){
    w=mass*gravity
    return w
}
console.log(weight(5, 9.8))
function convertCelsiusToFahrenheit(oC){
    output=(oC*9.5)+32
    return output
}
console.log(convertCelsiusToFahrenheit(5))
function checkSeason(season){
    season=season.toLowerCase()
    if(season=="december"||season=="january"||season=="february"){
        return "It is winter!"
    }
    else if(season=="march"||season=="april"||season=="may"){
        return "It is spring!"
    }
    else if(season=="june"||season=="july"||season=="august"){
        return "It is summer!"
    }
    else if(season=="september"||season=="october"||season=="november"){
        return "It is autumn/fall!"
    }
    else{
        return "Please check your spelling!"
    }
}
console.log(checkSeason("DECEmber"))
function printArray(array){
    for(items of array){
        console.log(items)
    }
}
console.log(printArray([1, 2, 3, "world", null, false, undefined, 62]))
function reverseArray(array){
    let array2=[]
    for(i=array.length-1; i>=0; i--){
        array2.push(array[i])
    }
    return array2
}
console.log(reverseArray([1, 2, 3, 4, 5]))
function capitalizeArray(array){
    let array2=[]
    for(items of array){
        array2.push(items.toUpperCase())
    }
    return array2
}
console.log(capitalizeArray(["hi", "hello"]))
function sumOfNumbers(num){
    let sum=0
    for(i=num; i>=0; i--){
        sum=sum+i
    }
    return sum
}
console.log(sumOfNumbers(10))
function sumOfOdds(num){
    let sum=0
    for(i=num; i>=0; i--){
        if(i%2==1){
            sum=sum+i
        }
    }
    return sum
}
console.log(sumOfOdds(10))
function sumOfEven(num){
    let sum=0
    for(i=num; i>=0; i--){
        if(i%2==0){
            sum=sum+i
        }
    }
    return sum
}
console.log(sumOfEven(10))
function evensAndOdds(num){
    let even=0
    let odd=0
    for(i=num; i>=0; i--){
        if(i%2==0){
            even=even+1
        }
        else if(i%2==1){
            odd=odd+1
        }
    }
    return "There are " + even +" even numbers." + " There are " + odd +" odd numbers."
}
console.log(evensAndOdds(100))