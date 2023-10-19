const myArray = [["Bengals", 8], ["Seahawks", 24]];
const arr = [
    [6, 8], [12, 14], [16, 20]
  ];

function teams(arr){
   for (let x = 0; x < arr.length; x++) {
    for (let b = 0; b < arr[x].length; b++) {
      console.log(arr[x][b]);
    }
  } 
}

function testGreaterThan(num1,num2) {
    if (num1=40) { 
      return "Over 50";
    }
  
    if (num2=9) {  
      return "Over 15";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(40,9);

  function Bird(name) {
    this.name = name;
  }
  
  function joinDogFraternity(candidate) {
    if(candidate.constructor === Dog){
      return true;
    } else{
      return false;
    }
  }

  let husky = new Dog("Snoopy");
  let hound = new Dog("Sheriff Dan");
  let blueJay=new Bird("Tweety")
  let robin=new Bird("Greg")
  joinBirdFraternity(husky);
  joinBirdFraternity(hound);
  joinBirdFraternity(blueJay);
  joinBirdFraternity(robin);
  console.log(blueJay,robin,beagle,hound);




  
  