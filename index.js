// Question 1

function InstagramPost(HandleOfAuthor,content,imagelink,Numberofviews,Numberoflikes){
    this.HandleOfAuthor=HandleOfAuthor;
    this.content=content;
    this.imagelink=imagelink;
    this.Numberofviews=Numberofviews;
    this.Numberoflikes=Numberoflikes;
}
//Question 2

//creating the first instagram post
let InstagramPost1= new InstagramPost("deejayslimv","he Labour Party (LP) in Lagos State on Thursday condemned INEC for omitting party’s logo","https://www.instagram.com/p/CpBD28-tDLS/?utm_source=ig_web_copy_link",1423,30000);
console.log(InstagramPost1)

// creating the second instagram post
let InstagramPost2 = new InstagramPost("djmystelle","It’sAll For The Culture!!!","32 views","1 like");
console.log(InstagramPost2)

//Question 3

function createPerson(name,age,location){
    return{
        name:name,
        age:age,
        location:location,
    }
    
}
personMusa = createPerson("Musa Dawodu",19 , " Lekki, Lagos State")
//console.log(personMusa )

function createJambScores(ENG,GOVT,LIT,CRK){
    return{
        ENG:ENG,
        GOVT:GOVT,
        LIT:LIT,
        CRK:CRK
    }
}
musaJambscore= createJambScores(70,85,82,94)

let updatedmusa=Object.assign({musaJambscore},personMusa)
//console.log(personMusa)
console.log(updatedmusa)

/*Question 4

They are three ways to clone an object in a javascript

(1), using object.assign
(2), using spreed method
(3), using json prase method

 Example are below
*/

let car1={
    name:"toyota",
    model:"corolla",
    engine:"v6",
    color:"red",
}
// using object.assign to clone
let car2= Object.assign({},car1)
console.log(car2)

//changes made in the cloned "car2 engine"
car2.engine="v8";
console.log(car2)

//using spreed method to clone

car3={...car1};
console.log(car3)

//changes made in car3 name
car3.name="Honda"
console.log(car3)

// sing Json parse to clone 

car4=JSON.parse(JSON.stringify(car1))
console.log(car4)

//Question 5
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 }
for(const key in presidentialCandidates){
    console.log(presidentialCandidates[key] +" is the presidential candidate of " + key)
}

console.log(Object.keys(presidentialCandidates))

for( const key of Object.keys(presidentialCandidates)){
    console.log(presidentialCandidates[key] +" is the presidential candidate of " + key)
}
