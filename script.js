// 1. Create a page that displays a balloon (using the balloon emoji, 🎈). When you press
// the up arrow, it should inflate (grow) 10 percent, and when you press the down arrow,
// it should deflate (shrink) 10 percent. You can control the size of text (emoji are
// text) by setting the font-size CSS property (style.fontSize) on its parent element.
// Remember to include a unit in the value—for example, pixels (10px). The key names of
// the arrow keys are "ArrowUp" and "ArrowDown". Make sure the keys change only the
// balloon, without scrolling the page.
// When that works, add a feature where, if you blow up the balloon past a certain size,
// it explodes. In this case, exploding means that it is replaced with a 💥 emoji, and
// the event handler is removed (so that you can’t inflate or deflate the explosion).
// Hint: keeping track of the size in percentage might be easier.
// Hint: Make sure you quote the emoji characters. They are strings, after all.
// Hint: document.getElementById("balloon") will get the balloon element on the page.

let p = document.querySelector("p");
//This line selects the paragraph element in the HTML
let size;
//creating the function size

function setSize(newSize) {
  size = newSize;
  p.style.fontSize = size + "px";
}
//This calls a new function called set size, and makes set size's value as newSize. It then makes size equal to newSize. It then calls the paragraph style's font size, and makes the size increase each pixel.
setSize(20);
//This sets the size function's base level to 20px

function arrow(event) {
  //This calls a new function called arrow, and attaches an event to it.
  if (event.key == "ArrowUp") {
    //This if statement essentially calls calls the event and its value key, and makes it equal to the value Arrow Up.
    if (size > 70) {
      //This if statement says if the size is less than 70 than proceed.
      p.textContent = "💥";
      //This is calling the paragraph text content, the balloon, and tells it to display an exploding emoji if it exceeds 70px.
    } else {
      //This is an else statement, as it must also grow and shrink.
      setSize(size * 1.1);
      //This basically increases the size of the balloon by multiply the size by 1.1.
      event.preventDefault();
      //This prevents the event from doing what it is supposed to do, and ends up doing what you are programming it to do.
    }
  } else if (event.key == "ArrowDown") {
    //this else if statment is the last of the statements, as the balloon still need to shrink. it calls the event and its value key and makes it equal to the value Arrow Down.
    setSize(size * 0.9);
    //This decreases the size of the balloon by multiplying it by .9.
    p.textContent = "🎈";
    //This makes the text content back into a balloon again, if you decrease the size of the balloon. This is to prevent the explosion emoji from showing up when decreasing in size.
    event.preventDefault();
    //This once again prevents the default of the event from happening.
  }
}

document.body.addEventListener("keydown", arrow);
//This creates an event listener to the documents body.

//This function is set to

// 2. The index.html page has a tabbed layout. Make the default state of the layout show
// the first tab, and make it so that when you click the links at the top the correct
// tab's contents are displayed and the others are hidden. Prevent the default action of
// the links and set up an event listener with the logic necessary to make the tabs
// function as expected. There are many ways to accomplish this task, but you will need
// to at minimum add listeners to each link and toggle the display of the tab contents.
// Hint: display: none; hides an element, and display: block; will bring it
