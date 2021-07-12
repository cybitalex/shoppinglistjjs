// create a function to clear the screen
function clear_screen() {
	console.clear();
}

// create a function to display the help menu
function display_help() {
	console.log(`
	=======> Help <=======
	'HELP' to display this menu
	'START' to start creating your shopping list
	'SHOW' to display your current items
	'DEL' to delete an item
	'QUIT' to exit the program`);
}


// create a function to begin the attempt
function begin_attempt() {
	console.log("Here's a lift of possible commands: HELP, START, QUIT");
	console.log("Welcome! What would you like to do?");
		const readline = require("readline");
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout
		});
		rl.question("> ", function(choosing) {
      switch(choosing) {
          case "start":
            clear_screen()
            console.log("Shopping has begun\n")
            break
          case "help":
            display_help()
          case "quit":
            console.log("Goodbye")
            break
        }
      }
    )
  }
function shopping_list() {
  clear_screen()
  console.log("It's time to go shopping!");
  let items_in_cart = {};
  console.log("Enter HELP at any moment for HELP menu")
  let cart_price = 0;

  function show_items() {
    for (let [key, value] of Object.entries(items_in_cart)) {
      console.log(key + "-" * 5 + value) }
    console.log("Current cart total ", sum(items_in_cart.value))
    }
  rl.question("> ", function(choosing) {
    switch(choosing) {
        case "show":
          show_items()
          break
        case "help":
          display_help()
        case "quit":
          console.log("Goodbye")
          break
      }
    }
  )
}
begin_attempt()