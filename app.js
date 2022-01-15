let mrGreen = {
  name: "Jacob Green",
  occupation: "Entrepreneur",
  age: 45,
  description: "He has a lot of connections",
  image:
    "https://carboncostume.com/wordpress/wp-content/uploads/2017/10/mrgreen3.jpg",
  color: "green ",
};

let drOrchid = {
  name: "Doctor Orchid",
  occupation: "Scientist",
  age: 26,
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  image:
    "https://images2.minutemediacdn.com/image/upload/c_crop,h_1124,w_2000,x_0,y_50/v1560965041/shape/mentalfloss/586055-hasbro.jpg?itok=x4QQWTxa",
  color: "white",
};

let profPlum = {
  name: "Victor Plum",
  occupation: "Designer",
  age: 22,
  description: "Billionaire video game designer",
  image:
    "https://vignette.wikia.nocookie.net/cluedo/images/a/a4/2016C6.jpg/revision/latest?cb=20200927103539",
  color: "purple",
};

let missScarlet = {
  name: "Kasandra Scarlet",
  occupation: "Actor",
  age: 31,
  description: "She is an A-list movie star with a dark past",
  image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
  color: "red",
};

let mrsPeacock = {
  name: "Eleanor Peacock",
  occupation: "Socialité",
  age: 36,
  description:
    "She is from a wealthy family and uses her status and money to earn popularity",
  image:
    "https://vignette.wikia.nocookie.net/cluedo/images/b/b0/2016C5.jpg/revision/latest?cb=20200927103538",
  color: "blue",
};

let mrMustard = {
  name: "Jack Mustard",
  occupation: "Retired Football player",
  age: 62,
  description:
    "He is a former football player who tries to get by on his former glory",
  image:
    "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
  color: "yellow",
};

let suspectsArray = [
  mrGreen,
  drOrchid,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard,
];

// ### Weapons

let rope = {
  name: "Rope",
  weight: 10,
};

let knife = {
  name: "Knife",
  weight: 8,
};

let candlestick = {
  name: "Candlestick",
  weight: 2,
};

let dumbbell = {
  name: "Dumbbell",
  weight: 30,
};

let poison = {
  name: "Poison",
  weight: 2,
};

let axe = {
  name: "Axe",
  weight: 15,
};

let bat = {
  name: "Bat",
  weight: 13,
};

let trophy = {
  name: "Trophy",
  weight: 25,
};

let pistol = {
  name: "Pistol",
  weight: 20,
};

let weaponsArray = [
  rope,
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol,
];

// ### Rooms

let diningRoom = {
  name: "Dining Room",
};
let conservatory = {
  name: "Conservatory",
};
let kitchen = {
  name: "Kitchen",
};
let study = {
  name: "Study",
};
let library = {
  name: "Library",
};
let billiardRoom = {
  name: "Billiard Room",
};
let lounge = {
  name: "Lounge",
};
let ballroom = {
  name: "Ballroom",
};
let hall = {
  name: "Hall",
};
let spa = {
  name: "Spa",
};
let livingRoom = {
  name: "Living Room",
};
let observatory = {
  name: "Observatory",
};
let theater = {
  name: "Theater",
};
let guestHouse = {
  name: "Guest House",
};
let patio = {
  name: "Patio",
};

let roomsArray = [
  diningRoom,
  conservatory,
  kitchen,
  study,
  library,
  billiardRoom,
  lounge,
  ballroom,
  hall,
  spa,
  livingRoom,
  observatory,
  theater,
  guestHouse,
  patio,
];
let lives = 2; // This is the lives count

function pickMistery() {
  let suspect = suspectsArray[Math.floor(Math.random() * suspectsArray.length)];
  let weapon = weaponsArray[Math.floor(Math.random() * weaponsArray.length)];
  let room = roomsArray[Math.floor(Math.random() * roomsArray.length)];
  return { suspect, weapon, room };
}

function showArray(arr, arr2, arr3) {
  arr.forEach((element) => {
    let suspect = document.getElementById("suspect");
    let option = document.createElement("option");
    option.textContent = element.name;
    suspect.appendChild(option);
  });
  arr2.forEach((element) => {
    let room = document.getElementById("room");
    let option = document.createElement("option");
    option.textContent = element.name;
    room.appendChild(option);
  });
  arr3.forEach((element) => {
    let weapon = document.getElementById("weapon");
    let option = document.createElement("option");
    option.textContent = element.name;
    weapon.appendChild(option);
  });
}
showArray(suspectsArray, roomsArray, weaponsArray);
let mistery = pickMistery();
console.log(mistery);

function clean() {
  let game = document.getElementById("game").classList.add("hidden"); //Select the options and remove
  let btn = document.getElementById("btn-guess").classList.add("hidden"); //Erase the button
}

function showAnswer(answer) {
  clean();
  let result = document.createElement("div"); //Create a div to show te results
  let texto = document.createElement("P"); //Create a <p> to write the result
  if (answer === true) {
    //Write the result
    texto.textContent = "Congratulations!! You win!";
    result.appendChild(texto); //Add the text to the div container
    result.classList.add("board"); //Add a class to the <p> element
    let section = document.getElementById("section"); //Select the section where the div will be attached
    section.appendChild(result); //Atached the div to the section
    setTimeout(function () {
      result.classList.add("hidden");
    }, 3000);
  } else if (lives > 0) {
    lives < 2
      ? (texto.textContent = `Wrong guess! you have ${lives} chance`)
      : (texto.textContent = `Wrong guess! you have ${lives} chances`);
    result.appendChild(texto); //Add the text to the div container
    result.classList.add("board"); //Add a class to the <p> element
    let section = document.getElementById("section"); //Select the section where the div will be attached
    section.appendChild(result); //Atached the div to the section
    setTimeout(function () {
      result.classList.add("hidden");
      document.getElementById("game").classList.remove("hidden"); //Select the options and remove
      document.getElementById("btn-guess").classList.remove("hidden"); //Erase the button
    }, 3000);
  } else {
    texto.textContent = `GAME OVER`;
    result.appendChild(texto); //Add the text to the div container
    result.classList.add("board"); //Add a class to the <p> element
    let section = document.getElementById("section"); //Select the section where the div will be attached
    section.appendChild(result); //Atached the div to the section
    playAgain();
  }
}
function playAgain() {
  let again = document.createElement("div"); //Create another div to attached a button(<a>)
  again.classList.add("again"); //Create a class
  let btn = document.createElement("a"); //Create the button(link)
  btn.textContent = "Try again"; //Add some text to the button
  btn.classList.add("button"); //Add a class
  btn.id = "btn"; //Add an id to be able to select it
  btn.setAttribute("href", "/"); //Add a href to redirect the user to the root
  again.appendChild(btn); // Atached the button to the div
  section.appendChild(again); //Atached the div to the section
}

let botton = document.getElementById("guess"); //
botton.onclick = function () {
  let guess = {
    //Create a user's selection object
    suspect: document.querySelector("#suspect").value,
    room: document.querySelector("#room").value,
    weapon: document.querySelector("#weapon").value,
  };
  let killer = {
    //Create a random mistery object
    suspect: mistery.suspect.name,
    room: mistery.room.name,
    weapon: mistery.weapon.name,
  };
  console.log(guess, killer);
  //Compare boths objects
  if (JSON.stringify(guess) === JSON.stringify(killer)) {
    showAnswer(true);
    playAgain();
  } else {
    showAnswer(false);
    lives--;
  }
};
