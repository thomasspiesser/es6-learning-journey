// destructuring assignment
// for arrays
let a, b, c, rest;

let arr = [1, 2, 3, 4, 5];

[a, b] = arr;

console.log(a);
console.log(b);

[a, b, ...rest] = arr;

console.log(a);
console.log(b);
console.log(rest);

// can have default values!
[a, b, c=9, ...rest] = arr;

console.log(a);
console.log(b);
console.log(c);
console.log(rest);

// or ignore values

[a,,c,...rest] = arr;

console.log(a);
console.log(b);
console.log(c);
console.log(rest);

// for objects
let ob = {w:51, q:61};
// with declaration
let {w, q} = ob;
console.log(w);
console.log(q);
// or without -> need brackets otherwise considered a block
({w, q} = ob)
console.log(w);
console.log(q);

// new variable names
let {w: peter, q: otto} = ob;
console.log('peter');
console.log(peter);
console.log('otto');
console.log(otto);

// default values
({a=10, b=5} = {a: 3});
console.log(a);
console.log(b);

// function parameter default value
// ={} makes them optional
function test({par1='here', par2='there'} = {}) {
  console.log(par1, par2);
}

test();
test({par2:'thomas'});

// Nested object for destructuring
let data = {
  title: 'data-title',
  translation: {
    locale: 'de',
    title: 'Daten-Titel'
  },
}
let {title: englishTitle, translation: { title: germanTitle }} = data;
console.log(englishTitle, germanTitle);
// or with arrays
data = {
  title: 'data-title',
  translations: [
    {
      locale: 'de',
      title: 'Daten-Titel'
    },
    {
      locale: 'fr',
      title: 'titre des data'
    },
  ],
};
let frenchTitle;
({ title: englishTitle, translations: [{ title: germanTitle }, { title: frenchTitle }] } = data);
console.log(englishTitle, germanTitle, frenchTitle);

// for of iteration and destructuring
for (let {title: t, locale: l} of data.translations) {
  console.log(`Title: ${t}, language: ${l}`);
}

// pull fields from object passed as function params
function userId({id}) {
  return id;
}
function whois({displayName: displayName, fullName: {firstName: name}}){
  console.log(displayName + " is " + name);
}

var user = { 
  id: 42, 
  displayName: "jdoe",
  fullName: { 
      firstName: "John",
      lastName: "Doe"
  }
};

console.log("userId: " + userId(user)); // "userId: 42"
whois(user); // "jdoe is John"

// computed object property names
let key = "z";
let obj = { z: "peter" }
let { [key]: onkel } = obj;

console.log(onkel);
