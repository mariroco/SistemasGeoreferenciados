// SignUp
function signup(form){
    const email = form["inputNewEmail"].value;
    const password = form["inputNewPassword"].value;
    const password2 = form["inputNewPassword2"].value;

    if(password == password2) {
    // Authenticate the User
    auth
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          credentialsLogin(email,password);
          form.reset();
          scrollTo("home");
        })
        .catch(function(error) {
            showToast(error);
        });
    }else{
        showToast('Password confirmation does not match')
    }
}

function changePassword(form){
  const email = form["inputForgotPasswordEmail"].value;
  firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
    showToast('We have sent you an email to change your password :)');
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    showToast(errorMessage);
  });
}

// Logout
function logout(btn){
    auth.signOut().then(() => {
        sessionStorage.clear();
        location.reload();
    });
}

// SingIn
function login(form){
  const email = form["inputLoginEmail"].value;
  const password = form["inputLoginPassword"].value;

  // Authenticate the User
  auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
    console.log('Succesfully loged in!');
    // clear the form
    form.reset();
    // close the modal
    sessionStorage.setItem("sesion","true");
    sessionStorage.setItem("email",email);

    location.reload();
  })
  .catch(function(error) {
    showToast(error);
});
};

function credentialsLogin(email,password){
    // Authenticate the User
    auth.signInWithEmailAndPassword(email, password).then((userCredential) => {

      // close the modal
      sessionStorage.setItem("sesion","true");
      sessionStorage.setItem("email",email);
  
      location.reload();
    })
    .catch(function(error) {
      showToast(error);
  });
};
  

// ==============FIRESTORE================
var postsQuantity = 0; //Stores the quantity of posted gigs
var fields = 2;

async function getTest(){
  const x = await getAllGigs();
}

//CREATE GIG FROM FORM DATA
function createGigItem(form,id){
  var locationCoords = postMarker[0].getPosition();
  const name = form['postGigInputName'];
  const email = form['postGigInputEmail'];
  const phone = form['postGigInputPhone'];
  const title = form['postGigInputTitle'];
  const category = form['postGigInputCategory'];
  const description = form['postGigInputDescription'];
  var address = form['postGigInputAddress'];
  const address2 = form['postGigInputAddress2'];
  if(address2 != '' && address2 != undefined && address2 != ''){
    address.value += ', '+address2.value;
  };

  var gig = {
    id: id,
    name: name.value,
    email: email.value,
    phone: phone.value,
    title: title.value,
    category: category.value,
    description: description.value,
    address: address.value,
    lat: locationCoords.lat(),
    lng: locationCoords.lng(),
    keywords: keywords
  }

  gigsList.push(gig);
  document.getElementById('kerwordsContainer').innerHTML = '';
  form.reset();
/*
  let marker =  new google.maps.Marker({position: new google.maps.LatLng(gig.lat, gig.lng), map: gigsMap});
  marker.addListener('click',function(){var topPos = document.getElementById(gig.id).offsetTop;
    document.getElementById('gigCardsContainer').scrollTop = topPos-10;
    $('#'+gig.id).css("backgroundColor", "#deebff");
  setTimeout(function(){
    $('#'+gig.id).css("backgroundColor", "white");
  },2000); 
  });

  gigsMarkers.push(marker);
  gigsList.push(newGig);

  var markerCluster = new MarkerClusterer(gigsMap,gigsMarkers,{
    imagePath : 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
    gridSize: 60,
    maxZoom: 0
  });*/


  


  fillModal();
  showMyGigs();
  return gig;

}

//POST NEW GIG
async function postGig(form){
  
  await getGigs();
  const user = auth.currentUser;
  const gig = createGigItem(form,postsQuantity);
  
  db.collection("gigs").doc(user.uid).set({
    posts : postsQuantity+1,
    size : fields+1,
    [postsQuantity] : gig
  }, { merge: true })
  .then(() => {
      console.log("Document successfully written!");
      showGigs(gigsList);
  })
  .catch((error) => {
      console.error("Error writing document: ", error);
  });
}

//GET GIGS
async function getMyGigs(){
  const user = auth.currentUser;
  var docRef = db.collection("gigs").doc(user.uid);

  
  await docRef.get().then((doc) => {
        if (doc.exists) {
          var data = doc.data();
          postsQuantity = data.posts;
          fields = data.size;
          valq = data;
          var x = [data];
          var y =[]
          /*x.forEach(function(item) {
            console.log(item);
            var itemVal = item.value;
            y.push(itemVal);
          });*/

          //console.log(list[0]);
          for(var i=0; i<postsQuantity; i++){
            if(data[i] != undefined){
              myGigsList.push(data[i]);
            }
          }
        } else {
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

//DELETE POST BY POST ID
async function deleteFieldById(id){
  fields--;
  const user = auth.currentUser;
  await db.collection("gigs").doc(user.uid).update({
    [id]: firebase.firestore.FieldValue.delete(),
    size: fields
  });
  getAllGigs();
  showGigs(gigsList);
  showMyGigs();
}

//GET ALL USER'S GIGS
async function getAllGigs(){
  gigsList=[];
  const snapshot = await db.collection('gigs').get()
  snapshot.docs.map(doc => {
    const data = doc.data();
    for(var i=0; i<data.posts; i++){
      if(data[i] != undefined){
        gigsList.push(data[i]);
      }
    }
  });
}
