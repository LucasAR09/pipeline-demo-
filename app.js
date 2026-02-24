function greetUser(name) {
  return `Hola ${name}, el pipeline está funcionando correctamente`;
}

console.log(greetUser("lukitas"));

module.exports = { greetUser };
