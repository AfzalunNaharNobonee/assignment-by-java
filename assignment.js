//feet-mile converter
function feetToMile(number)
{
    var result1 = number/5280;
    return result1;
}
var result = feetToMile(86560);
if(result>0){
    console.log("Required mile is " , result.toFixed(3) , "mile(s) approximately")
}
else console.log("Length can't be negative. Enter value again.");


//wood calculator
function woodCalculator(chair,table,bed){
    var requiredWoodForChair = chair*1;
    var requiredWoodForTable = table*3;
    var requiredWoodForBed = bed*5;
    var requiredWood = requiredWoodForChair + requiredWoodForTable + requiredWoodForBed;
    return requiredWood;
}
var totalWood = woodCalculator(2,2,2);
console.log("Required wood :" , totalWood , " cubic feet");


//brick calculator
function brickCalculator(floor){
    var i=1;
    var j=1;
    var k=1;
    if(floor>0 && floor<11){
        for(i=1;i<=floor;i++){
            var forFirstTenFloors=(i*15);
         }
         console.log(forFirstTenFloors);
         var brickNeeded = forFirstTenFloors*1000;
         return brickNeeded;
    } 
    else if(floor<10 && floor<21){
        for(i=1;i<=10;i++){
            var forFirstTenFloors=(i*15);
         }
         for(i=11;i<=floor;i++){
            
             var forNextTenFloors=(j*12);
             j++;
          }
          var final = forFirstTenFloors + forNextTenFloors;
          console.log(final);
          var brickNeeded = final*1000;
          return brickNeeded;

    }
    else{
        for(i=1;i<=10;i++){
            var forFirstTenFloors=(i*15);
         }
         for(i=11;i<=20;i++){
            
             var forNextTenFloors=(j*12);
             j++;
          }

           for(i=21;i<=floor;i++){
              var forTheLastFloors=(k*10);
              k++;
           }
          var final = forFirstTenFloors + forNextTenFloors +forTheLastFloors;
          var brickNeeded = final*1000;
          return brickNeeded;

    }
    

}
var requiredBrickAmount = brickCalculator(100);
console.log("Required bricks :" , requiredBrickAmount);


//finding the tiny friend
function tinyFriend(friends){
    var tiny = friends[0].length;
    var tinyName = friends[0];
    for(i=1 ; i< friends.length ; i++){
        var newTinyFriend = friends[i].length;
         if(newTinyFriend < tiny){
             tiny = newTinyFriend;
             tinyName= friends[i];
         }
    }
    return tinyName;
}
var friends = ['baboni' , 'nobonee' ,'afzalun' , 'ali' , 'sakib','mahi']
var tiniest = tinyFriend(friends);
console.log("Name of tiny friend :" , tiniest);