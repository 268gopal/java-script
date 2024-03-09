// Stack memory(premetive Datatype)
let myYoutubename = "Abc"
let anotherName = myYoutubename
anotherName = "Xyz"
console.log(myYoutubename);
console.log(anotherName);

//Heap memory(Non-premitive Datatype)
let userOne={
    email:"user@google.com",
    upi:"user@ybl",
}
let userTwo = userOne
userTwo.email="user@yahoo.com"
console.log(userOne);
console.log(userTwo);