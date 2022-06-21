// SignUp
function signup(form){
    const email = form["inputNewEmail"].value;
    const password = form["inputNewPassword"].value;
    const password2 = form["inputNewPassword2"].value;

    if(password == password2) {
    // Authenticate the User
    auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            credentialsLogin(email,password);
        form.reset();
        })
        .catch(function(error) {
            showToast(error);
        });
    }else{
        showToast('Password confirmation does not match')
    }
}

// Logout
function logout(btn){
    auth.signOut().then(() => {
        console.log(auth);
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
  
/* Posts
const postList = document.querySelector(".posts");
const setupPosts = (data) => {
  if (data.length) {
    let html = "";
    data.forEach((doc) => {
      const post = doc.data();
      const li = `
      <li class="list-group-item list-group-item-action">
        <h5>${post.title}</h5>
        <p>${post.content}</p>
      </li>
    `;
      html += li;
    });
    postList.innerHTML = html;
  } else {
    postList.innerHTML = '<h4 class="text-white">Login to See Posts</h4>';
  }
};*/
