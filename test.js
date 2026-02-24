const { greetUser } = require("./app");

function testGreeting() {
  const expected = "Hola usuario, el pipeline está funcionando correctamente ";
  const result = greetUser("usuario");

  if (result === expected) {
    console.log(" Test passed: Greeting message is correct.");
    process.exit(0);
  } else {
    console.error(" Test failed: Unexpected output.");
    console.error(`Expected: ${expected}`);
    console.error(`Received: ${result}`);
    process.exit(1);
  }
}

testGreeting();
