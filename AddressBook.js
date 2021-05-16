class AddressBook
{
    //constructor
    constructor(...params) 
    {
      this.firstName = params[0];
      this.lastName = params[1];
      this.address = params[2];
      this.city = params[3];
      this.state = params[4];
      this.zip = params[5];
      this.phoneNumber = params[6];
      this.email = params[7];
    }
  
// get and set for firstname 
//first letter should be capital and min 3 letters
get firstName() 
{ return this._firstName; 
}
set firstName(firstName) 
{
  let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
  // test returns a boolen value
  if (nameRegex.test(firstName))
    this._firstName = firstName;
  else
    throw "Invalid first Name";
}

 //get and set for lastname
//first letter should be capital and min 3 letters
get lastName() 
{ return this._lastName; 
}
set lastName(lastName) 
{
  let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
  // test returns a boolen value
  if (nameRegex.test(lastName))
    this._lastName = lastName;
  else
    throw "Invalid  last Name";
}
  //get and set for address
//minimum four characters
get address() 
{ return this._address; 
}
set address(address)
{
  let addressRegex = RegExp("^[A-Za-z]{4,}$");
  if (addressRegex.test(address))
    this._address = address;
  else
    throw "Invalid address ";
}

   //get and set for city
//minimum four characters
get city() 
{ return this._city; 
}
set city(city) 
{
  let cityRegex = RegExp("^[A-Za-z]{4,}$");
  if (cityRegex.test(city))
    this._city = city;
  else
    throw "Invalid city ";
}

//get and set for state
//minimum four characters
get state() 
{ return this._state; 
}
set state(state) 
{
  let stateRegex = RegExp("^[A-Za-z0-9]{4,}$");
  if (stateRegex.test(state))
    this._state = state;
  else
    throw "Invalid state";
}

   //get and set for zip
//pin code of form 500040
get zip() 
{ return this._zip; 
}
set zip(zip) 
{
  let zipRegex = RegExp("^[1-9]{1}[0-9]{2,6}$");
  if (zipRegex.test(zip))
    this._zip = zip;
  else
    throw "Invalid zip ";
}

   //get and set for phoneNumber
//phone number should be of form 91 8149240833
get phoneNumber() 
{ return this._phoneNumber; 
}
set phoneNumber(phoneNumber) 
{
  let phoneRegex = RegExp("^[1-9]{2}[ ]{1}[0-9]{10}$");
  if (phoneRegex.test(phoneNumber))
    this._phoneNumber = phoneNumber;
  else
    throw "Invalid phone number";
}

  // get and set for email
//ac.xyz@gmail.com.in .xyz-optional  .in-optional
get email() 
{ return this._email; 
}
set email(email) 
{
  let emailRegex = RegExp("^([a-z0-9A-Z])+([.]?[a-z0-9A-Z]+)*[@]{1}[a-z0-9A-Z]+[.]{1}[a-zA-Z]{2,}([.]{1}[a-z]{2,})?$");
  if (emailRegex.test(email))
    this._email = email;
  else
    throw "Invalid email";
}

  
    //defining to string method
    toString() 
    {
        return  "firstName='" + this.firstName + '\'' +
                ", lastName='" + this.lastName + '\'' +
                ", address='" + this.address + '\'' +
                ", city='" + this.city + '\'' +
                ", state='" + this.state + '\'' +
                ", zipCode='" + this.zip + '\'' +
                ", email='" + this.email + '\'' +
                ", phoneNumber='" + this.phoneNumber;
    }
  }

  //Creating an instance and giving contact details
try{
let contactsArray = new Array();
contactsArray.push(
    new AddressBook("Sai", "Nath", "AsRaonagar", "Hyderabad", "Telangana", "500040",
    "91 9191919191", "sai@gmail.com")
);

contactsArray.push(
    new AddressBook("Ven", "Kata", "ShramilNagar", "Hyderabad", "Telangana", "500040",
"91 0091919191", "When@gmail.com")
);

contactsArray.forEach((contactBook) =>
    console.log(contactBook.toString()));

//finding index using name
let findPerson = contactsArray.findIndex(
    (contactBook) => contactBook.firstName == "Sai");

//updating the contact detail
contactsArray[findPerson].lastName = "Venkata"

//display contacts after being updated
console.log("<-------------After changing the last name the updated contact---------------->");
contactsArray.forEach((contactBook) => console.log(contactBook.toString()));

//UC5 Removing an element from an array at particular index
contactsArray.splice(findPerson,1);
console.log("----------------------Contacts after Being Deleted from the Addressbook---------------------------------");
contactsArray.forEach((contactBook) => console.log(contactBook.toString()));

//UC6 number of contacts in Address Book
console.log("Number of Contacts Present in Address Book --> "+ contactsArray.length);

}catch(e){
    console.log(e);
}