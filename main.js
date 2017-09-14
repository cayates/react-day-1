//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (name, status, color, hungry) {
    'use strict';
    this.name = name
    this.status = status
    this.color = color
    this.hungry = hungry
}

const sadie = new Dog ("does not matter", "normal", "black", false)
const moonshine = new Dog ("does not matter", "does not matter", "does not matter", true)
const atticus = new Dog ("does not matter", "does not matter", "does not matter", true)

// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (name, cool) {
    'use strict';
    this.name = name
    this.cool = cool
}

Human.prototype.pet = function(doggies){
    doggies.status = "happy"
  }
  
Human.prototype.feed = function(doggies){
    doggies.hungry = false;
  }

const mason = new Human("does not matter", false)
const julia = new Human("does not matter", true)

// Instances of Human
// Needed: mason, julia
