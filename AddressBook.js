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
        return  "\nfirstName='" + this.firstName + '\'' +
                ", \nlastName='" + this.lastName + '\'' +
                ", \naddress='" + this.address + '\'' +
                ", \ncity='" + this.city + '\'' +
                ", \nstate='" + this.state + '\'' +
                ", \nzipCode='" + this.zip + '\'' +
                ", \nemail='" + this.email + '\'' +
                ", \nphoneNumber='" + this.phoneNumber;
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
console.log("\n<-------------After changing the last name the updated contact---------------->");
contactsArray.forEach((contactBook) => console.log(contactBook.toString()));

//UC5 Removing an element from an array at particular index
contactsArray.splice(findPerson,1);
console.log("\n----------------------Contacts after Being Deleted from the Addressbook---------------------------------");
contactsArray.forEach((contactBook) => console.log(contactBook.toString()));

//UC6 number of contacts in Address Book
var contactsPresentTotal = 0;
function findTotalContacts(contactsArray) 
{
  if (contactsArray != null) contactsPresentTotal++;
  return contactsPresentTotal;
}
contactsArray.reduce(findTotalContacts, 1);
console.log("\nNumber of Contacts Present in Address Book --> "+ contactsPresentTotal);

//UC7 Check Duplicate Person details
let countDuplicate = 0;
function checkDuplicatesCount(contactBook) 
{
  if (contactBook.firstName == "Ven"){
     return countDuplicate++;
  }else
     return countDuplicate;
}

//using foreach checking the count for each contact
contactsArray.forEach((contactBook) => checkDuplicatesCount(contactBook));
if (countDuplicate > 0)
  console.log( "\n--It is a Duplicate Entry--" );
else
  console.log( "\n--It is not a  Duplicate Entry--" );

//UC8 find person using state
let findingContactUsingState = contactsArray.filter((contactBook) => contactBook.state.includes("Telangana"));
console.log("\nFound contacts across State are: " + findingContactUsingState.toString());

//UC9 Search persons by city or state
let findingContactUsingStateOrCity = contactsArray.filter((contactBook) => contactBook.state.includes("Telangana")
                                    || contactBook.city.includes("Secunderabad"));
console.log("\nFound contacts Across State or City are: " + findingContactUsingStateOrCity.toString() +"\n");

//UC10 count of person by city and state
let countByStateOrCity = 0;
function checkCount(contactBook){
    if(contactBook.state == "Telangana"){
        return countByStateOrCity++;
    }else
        return countByStateOrCity;
}
contactsArray = contactsArray.forEach((contactBook) => checkCount(contactBook));
if(countByStateOrCity > 0){
    console.log("Number of person based on City or state: " +countByStateOrCity);
}else{
    console.log("No contact found");
}
} catch (e) 
{
  console.log(e);
}