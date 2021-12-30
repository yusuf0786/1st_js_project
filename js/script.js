window.onresize = ()=>{
	let mywindowsize = window.innerWidth
	let mynumbers = document.querySelector("html")
	mynumbers.style.fontSize = mywindowsize/1000*39+"%"
	
	console.log(mynumbers)
}

// let myclicks = [0,0,0]
// let clicks = myclicks.length

// targetting Elements
let button1 = document.querySelector(".button1")
let button2 = document.querySelector(".button2")
let button3 = document.querySelector(".button3")

// targetting Elements for changes
let box1 = document.querySelector(".box1")
let box2 = document.querySelector(".box2")
let box3 = document.querySelector(".box3")

// box line target
let box1_line1 = document.querySelector(".box1 p:nth-child(1) span")
let box1_line2 = document.querySelector(".box1 p:nth-child(2) span")
let box1_line3 = document.querySelector(".box1 p:nth-child(3) span")
let box1_line4 = document.querySelector(".box1 p:nth-child(4) span")

let box2_line1 = document.querySelector(".box2 p:nth-child(1) span")
let box2_line2 = document.querySelector(".box2 p:nth-child(2) span")
let box2_line3 = document.querySelector(".box2 p:nth-child(3) span")
let box2_line4 = document.querySelector(".box2 p:nth-child(4) span")

let box3_line1 = document.querySelector(".box3 p:nth-child(1) span")
let box3_line2 = document.querySelector(".box3 p:nth-child(2) span")
let box3_line3 = document.querySelector(".box3 p:nth-child(3) span")
let box3_line4 = document.querySelector(".box3 p:nth-child(4) span")

// initial functions
function my_objects(parameter1, parameter2, parameter3){
	let myobjects = {
		button1_active: parameter1,
		button2_active: parameter2,
		button3_active: parameter3
	}
	return(myobjects)
}
let myobjects = my_objects(true, false, false)

function myhover(){
	myobjects.button1_active ? button1.classList.remove("button1_hover") : button1.classList.add("button1_hover")
	myobjects.button2_active ? button2.classList.remove("button1_hover") : button2.classList.add("button1_hover")
	myobjects.button3_active ? button3.classList.remove("button1_hover") : button3.classList.add("button1_hover")
}
myhover()

box1_line1.classList.add("text_anim1")
box1_line2.classList.add("text_anim2")
box1_line3.classList.add("text_anim3")
box1_line4.classList.add("text_anim4")

// making the function
/*for(let i = 1; i <= clicks; i++){
    let myvar1 = "button"
    let myvar2 = "box"
    let myvar3 = myvar1+i
    let myvar4 = myvar2+i
    console.log(myvar3)
    console.log(myvar4)

    myvar3.addEventListener("click", ()=>{
        myvar4.classList.add("active")
    })
}
*/

button1.addEventListener('click', function(){
    box1.classList.add("active")
    box2.classList.remove("active")
    box3.classList.remove("active")

    button1.classList.add("active_button")
    button2.classList.remove("active_button")
    button3.classList.remove("active_button")
	
	add_box1lines()
	remove_box2lines()
	remove_box3lines()
	
	myobjects = my_objects(true, false, false)
	myhover()
})

button2.addEventListener('click', function(){
    box2.classList.add("active")
    box1.classList.remove("active")
    box3.classList.remove("active")

    button2.classList.add("active_button")
    button1.classList.remove("active_button")
    button3.classList.remove("active_button")
	
	add_box2lines()
	remove_box1lines()
	remove_box3lines()
	
	myobjects = my_objects(false, true, false)
	myhover()
})

button3.addEventListener('click', function(){
    box3.classList.add("active")
    box1.classList.remove("active")
    box2.classList.remove("active")

    button3.classList.add("active_button")
    button1.classList.remove("active_button")
    button2.classList.remove("active_button")
	
	add_box3lines()
	remove_box1lines()
	remove_box2lines()
	
	myobjects = my_objects(false, false, true)
	myhover()
})

// line class add
function add_box1lines(){
	box1_line1.classList.add("text_anim1")
	box1_line2.classList.add("text_anim2")
	box1_line3.classList.add("text_anim3")
	box1_line4.classList.add("text_anim4")
}
function add_box2lines(){
	box2_line1.classList.add("text_anim1")
	box2_line2.classList.add("text_anim2")
	box2_line3.classList.add("text_anim3")
	box2_line4.classList.add("text_anim4")
}
function add_box3lines(){
	box3_line1.classList.add("text_anim1")
	box3_line2.classList.add("text_anim2")
	box3_line3.classList.add("text_anim3")
	box3_line4.classList.add("text_anim4")
}

// line class remove
function remove_box1lines(){
	box1_line1.classList.remove("text_anim1")
	box1_line2.classList.remove("text_anim2")
	box1_line3.classList.remove("text_anim3")
	box1_line4.classList.remove("text_anim4")
}
function remove_box2lines(){
	box2_line1.classList.remove("text_anim1")
	box2_line2.classList.remove("text_anim2")
	box2_line3.classList.remove("text_anim3")
	box2_line4.classList.remove("text_anim4")
}
function remove_box3lines(){
	box3_line1.classList.remove("text_anim1")
	box3_line2.classList.remove("text_anim2")
	box3_line3.classList.remove("text_anim3")
	box3_line4.classList.remove("text_anim4")
}