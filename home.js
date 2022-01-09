function si(){
    name = document.getElementById("name").value;
    localStorage.setItem("User Id",name);
    window.location="book.html";
}