$(document).ready(function(){
    $('nav').load('nav.html');
})

AOS.init({
  offset:10,
  duration:600
});

$(".carousel1").owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0:{
        items:1,
        nav: false
      }
    }
  });

  
				// Your web app's Firebase configuration

        
  var firebaseConfig = {
    apiKey: "AIzaSyCQVlRAev8C0cAbloMqLZ2MGVuA-AnFaEQ",
    authDomain: "caratlane0.firebaseapp.com",
    projectId: "caratlane0",
    storageBucket: "caratlane0.appspot.com",
    messagingSenderId: "520177078379",
    appId: "1:520177078379:web:3dc823190c8bd8463da12e"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth =firebase.auth();

  
var email,userID,emailid,islogin;
  
auth.onAuthStateChanged(function(user){  
  if(user){
    emailid = user.email;
    userID=user.uid;
    islogin=true;
    //is signed in
    var strlen=6;
    emaillen = emailid.length > strlen ? emailid.substring(0, strlen - 1) + "..." : emailid;
    document.getElementById("LOGIN").innerHTML=emaillen;
  }
  else{
    islogin=false;
    //no user is signed in
  }
  });

//LoginName
function loginname(){
  var strlen=6;
    emaillen = emailid.length > strlen ? emailid.substring(0, strlen - 1) + "..." : emailid;
    document.getElementById("LOGIN").innerHTML=emaillen;
}
// -----------------------Signup------------------------------
function signup(){
  email = document.getElementById("email");
  var password = document.getElementById("password");
  auth.createUserWithEmailAndPassword(email.value, password.value).then(() => {
    console.log("Signed up successfully");
    //alert(email.value +' is Signed up in database, please login with same emailID to continue...');
    loginname();
    document.getElementById("signOut").disabled=false;
}).catch(err => {
  alert(err.message);
})
}

//-----------------Purchase btn-----------------------------

valuePurchaseButton=(ButtonID,i)=>{
  document.getElementById(ButtonID).value=womenProduct[i].price;
  document.getElementById(ButtonID).setAttribute("itemname",womenProduct[i].productname)
}
for(i=0;i<womenProduct.length;i++){
  valuePurchaseButton("btn"+i,i);
}

var billamt=0;
var prodamt,index,pr,cartdiv;
var count=0;
var countarray=new Array();

purchaseButtonFn=(ButtonID)=>{
  document.getElementById(ButtonID).onclick=function()
  {
    alert("Added to cart")
    count+=1;
    index=Number(ButtonID.substring(3));
    if(countarray[index]==undefined){
      countarray[index]=0;
    }
    var subtotal=0;
    countarray[index]+=1;
    console.log(countarray[index]);
    console.log("index: "+index);
    ProductName=womenProduct[index].productname;
    prodamt=Number(document.getElementById(ButtonID).value)
    subtotal=countarray[index]*prodamt;
    billamt=billamt+prodamt;
    if(countarray[index]>0){
      var ele=document.getElementsByClassName(ButtonID);
      while(ele.length>0){
        ele[0].parentNode.removeChild(ele[0]);
      }
    }
    var p1= document.createElement("p");
    p1.className=ButtonID;
    var p2= document.createElement("p");
    p2.className=ButtonID;
    var p3= document.createElement("p");
    p3.className=ButtonID;
    p1.innerHTML=ProductName;
    p2.innerHTML="₹"+subtotal;
    p3.innerHTML=countarray[index];
    var itemcount= document.getElementById("itemcount");
    var prodrow=document.getElementById("productrow");
    var pricerow=document.getElementById("pricerow");
    var totalamt = document.getElementById("totalamt");
    var quantityrow = document.getElementById("quantityrow");
    
    itemcount.innerHTML=count;
    prodrow.append(p1);
    pricerow.append(p2); 
    quantityrow.append(p3);   
    totalamt.innerHTML="₹"+billamt;

    auth.onAuthStateChanged(function(user){
    if(user){
      emailid = user.email;
      userID=user.uid;
      firebase.database().ref('Customers/'+userID).set({
        Email:emailid,
        BillAmt:billamt
      })    
      firebase.database().ref('Customers/'+userID+'/Products/'+ProductName).set({
        Price:womenProduct[index].price
      })
    }});
  }
}
for(i=0;i<womenProduct.length;i++){
  purchaseButtonFn("btn"+i);
}
  //----------------------SignIn------------------------------
  
  function signin(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    auth.signInWithEmailAndPassword(email.value, password.value).then(() => {
      console.log('login success');
      document.getElementById("signOut").disabled=false;
      loginname();
  }).catch(err => {
    alert(err.message);
  })
}

  //----------------------SignOut------------------------------
  
  function signout(){
    auth.signOut();
    document.getElementById("LOGIN").innerHTML="LOGIN";
    location.reload();
    document.getElementById("signOut").disabled=true;
  }
  

//------------------------------------------------end of firebase-----------------------------------------------------

$(".carousel2").owlCarousel({
  margin: 10,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    200:{
      items:1,
      nav: true,
      dots: true
    },
    400:{
      items:2,
      nav: true,
      dots: true
    },
    600:{
      items:3,
      nav:true,
      dots:true
    },    
    800:{
      items:4,
      nav:true,
      dots:true
    },
    1000:{
      items:5,
      nav:true,
      dots:true
    },    
    1200:{
      items:6,
      nav:true,
      dots:true
    }
  }
});

 /* const womenProduct=[
     {
      "image":"div8/image1.jpg",
      "productname": "Flare Blue Butterfly Ring",
      "price":"38200",
      "mrp": "40004"
     },
     {
      "image":"div8/image2.jpg",
      "productname": "Peacock Feather Bracelet",
      "price":"21759" ,
      "mrp": "22718"
     },
     {
      "image":"div8/image3.jpg",
      "productname": "Linear Diamond Band",
      "price":"43213" ,
      "mrp": "50254"
     },
     {
      "image":"div8/image4.jpg",
      "productname": "Apex Stackable Ring",
      "price":"19451" ,
      "mrp": "21670"
     },
     {
      "image":"div8/image5.jpg",
      "productname": "Advika Miracle Plate Diamond Mangalsutra",
      "price":"38132" ,
      "mrp": "41708"
     },
     {
      "image":"div8/image6.jpg",
      "productname": "Evil Eye Good Luck Charm",
      "price":"4268" ,
      "mrp": "5380"
     },
     {
      "image":"div8/image7.jpg",
      "productname": "Petite Blue Butterfly Stud Earrings",
      "price":"20929" ,
      "mrp": "21967"
     },
     {
      "image":"div8/image8.jpg",
      "productname": "Daisy Floret Stud Earrings",
      "price":"11593" ,
      "mrp": "12880"
     },
     {
      "image":"div8/image9.jpg",
      "productname": "Ish Delight Nose Pin",
      "price": "6075" ,
      "mrp": "6750"
     },
     {
      "image":"div8/image10.jpg",
      "productname": "Trillium Stud Earrings",
      "price":"7088" ,
      "mrp": "8859"
     },
     {
      "image":"div8/image11.jpg",
      "productname": "Classic Leaves Diamond Stud Earrings",
      "price":"16988",
      "mrp": "18876"
     },
     {
      "image":"div8/image12.jpg",
      "productname": "Braid Curb Gold Chain",
      "price":"18459" ,
      "mrp": "18768"
     },
     {
      "image":"div8/image13.jpg",
      "productname": "Classic Leaves Ring",
      "price":"13432" ,
      "mrp": "14925"
     },
     {
      "image":"div8/image14.jpg",
      "productname": "Hover Blue Butterfly Pendent",
      "price":"9671" ,
      "mrp": "11377"
     },
     {
      "image":"div8/image15.jpg",
      "productname": "Curve Miracle Plate Ring",
      "price":"10109" ,
      "mrp": "11233"
     },
     {
      "image":"div8/image16.jpg",
      "productname": "Juana Leaf Linked Bracelet",
      "price":"29929" ,
      "mrp": "30121"
     },
     {
      "image":"div8/image17.jpg",
      "productname": "Malvika Bloom Nose Pin",
      "price":"6596" ,
      "mrp": "7760"
     },
     {
      "image":"div8/image18.jpg",
      "productname": "Clover Petal Stud Earrings",
      "price":"8983",
      "mrp": "9981"
     },
     {
      "image":"div8/image19.jpg",
      "productname": "Halo Diamond Band",
      "price":"22306" ,
      "mrp": "24860"
     },
     {
      "image":"div8/image20.jpg",
      "productname": "Interwined Glim Ring",
      "price":"15478" ,
      "mrp": "17198"
     },
     {
      "image":"div8/image21.jpg",
      "productname": "Butterfly Flexi Ring",
      "price":"6229" ,
      "mrp": "7557"
     },
     {
      "image":"div8/image22.jpg",
      "productname": "Navya Mangalsutra",
      "price":"29359" ,
      "mrp": "32394"
     },
     {
      "image":"div8/image23.jpg",
      "productname": "Samaira Dazzle Nose Pin",
      "price":"5839" ,
      "mrp": "6869"
     },
     {
      "image":"div8/image24.jpg",
      "productname": "Emily Miracle Plate Stud Earrings",
      "price":"11197" ,
      "mrp": "12441"
     }
    ]

*/