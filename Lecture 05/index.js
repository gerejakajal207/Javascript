// new question
function calcAvg(grades){
    let sum=0
    for(key of grades){
        sum=sum+key 
    }
    avg=sum/grades.length
    return avg;
}
function statusObj(){
    const students = [
     { name: "Alice", grades: [50, 60, 70] },
     { name: "Bob", grades: [30, 20, 5] },
     { name: "Charlie", grades: [90, 85, 95] }
 ];
obj={}
for (elem of students){
    avg=calcAvg(elem.grades)
    if(avg<45){
        if(!obj.failed){
            // failed exist nhi krta hai
            obj["failed"]=[elem.name]
        }
        else{
            // failed exist krta hai
            obj["failed"].push(elem.name)
        }
    }
    else{
        if(!obj.passed){
            // failed exist nhi krta hai
            obj["passed"]=[elem.name]
        }
        else{
            // failed exist krta hai
            obj["passed"].push(elem.name)
        }
    }
}
    console.log(students);
    console.log(obj);
}
 statusObj();
//  obj = {
//      "failed":["Bob"],
//      "passed":["Alice","Charlie"]
//  }