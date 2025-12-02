let user = {
  id: 1,
  name: 'Pedro',
  age: 21,
};

for (let prop in user) {
    console.log(prop, user[prop]);
}