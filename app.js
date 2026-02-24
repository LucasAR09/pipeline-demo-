function greetUser(name) {
  return `Hola ${name}, el pipeline está funcionando correctamente `;
}

console.log(greetUser("usuario"));

module.exports = { greetUser };
