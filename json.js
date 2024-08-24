const arrayOfObjs = [
    {
    fullname: "John",
    city: "Lagos"
   },
   {
    fullname: "Jade",
    city: "Wuse"
   },
   {
    fullname: "James",
    city: "Ibadan"
   },
   {
    fullname: "Jane",
    city: "Laos"
   }
]

const lot = localStorage.setItem("bios", JSON.stringify(arrayOfObjs))

console.log(lot)