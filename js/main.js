const UserList = document.getElementById("user-list");

function loadUser() {
  let userRequest = new XMLHttpRequest();
  userRequest.open("GET", "https://reqres.in/api/users");
  userRequest.onload = function(){
    let user = JSON.parse(userRequest.responseText);
    console.log(user);
    userMain(user);
  }
  userRequest.send();
}
loadUser();

function userMain(user) {
  user.data.forEach((element) => {
    let li = document.createElement("li");
    li.className = `user__item col-md-4 col-lg-3 animate__fadeInDown animate__animated`;
    li.innerHTML = `
        <div class="user__main">
        <div class="d-flex align-items-center mb-3 user__imgbox">
          <img class="user__img" src="${element.avatar}" alt="user">
          <div>
            <h3 class="user__name">${element.first_name}</h3>
            <p class="user__job">${element.last_name}</p>
          </div>
        </div>
        <div class="user__box">
          <div class="d-flex align-items-center justify-content-between user__imgbox">
            <span class="user__info">company</span>
            <p class="user__text">Romaguera-Crona</p>
          </div>
        </div>
        <div class="user__box">
          <div class="d-flex align-items-center justify-content-between user__imgbox">
            <span class="user__info">email</span>
            <p class="user__text">${element.email}</p>
          </div>
        </div>
        <div class="user__box">
          <div class="d-flex align-items-center justify-content-between user__imgbox">
            <span class="user__info">phone</span>
            <p class="user__text">1-22-3-4555-13-3235</p>
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-between user__imgbox user__wrapper">
          <span class="user__info">website</span>
          <p class="user__text">Kale.biz</p>
        </div>
        <button class="btn btn-danger user__del">Remove User</button>
      </div>
    `
    UserList.appendChild(li);
  });
  
  const UserDel = document.querySelectorAll(".user__del");
  UserDel.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.target.parentNode.parentNode.remove();
    })
  })
}