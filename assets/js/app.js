let navTop = document.querySelector("header .top");
let goUpBtn = document.querySelector("#goUp");
let addBookBtnAll = document.querySelectorAll("#addBook");
let bookList = document.querySelector("#listBook .offcanvas-body");
let booksNumber = document.querySelector("header .top .number");
let links = document.querySelectorAll("header .bottom ul li a");
console.log(links);

links.forEach(element => {
    element.onclick = _ => {
        links.forEach(element => {

            element.classList.remove("active");
        });
        element.classList.add("active");
    }
    
});

onscroll = _=>{
    if (scrollY > 100) {
        navTop.classList.add("fixed-top" ,  "bg-white" , "shadow-sm")
        goUpBtn.classList.remove("opacity-0")
    }else{
        navTop.classList.remove("fixed-top" ,  "bg-white" , "shadow-sm")
        goUpBtn.classList.add("opacity-0")


    }
}

goUpBtn.onclick = _=> {
    scrollTo(0 , 0)
    // scrollTo({left:0 , top:0 , behavior : "smooth"})
}

//nav-bottom




let count = 0;
//add book to books list

addBookBtnAll.forEach(btn => {
    btn.onclick = _ => {
        // let = bookName = btn.parentElement.children[0].innerText;
        // let = bookCatg = btn.parentElement.children[2].innerText;
        // let = bookAuth = btn.parentElement.children[3].children[1].children[0].innerText;
         
        let = bookName = btn.parentElement.querySelector(".card-title").innerText;
        let = bookCatg = btn.parentElement.querySelector(".text-muted ").innerText;
        let = bookAuth = btn.parentElement.querySelector("span").innerText;
        let = bookImgSrc = btn.parentElement.parentElement.querySelector("img").src;
         
        booksNumber.innerText = ++count;

        bookList.innerHTML += `
         <div class="row mb-4 shadow">
        <div class="col">
            <img class="w-25" src="${bookImgSrc}" alt="">
        </div>
        <div class="col">Name : ${bookName}</div>
        <div class="col">Catg : ${bookCatg}</div>
        <div class="col">Author : ${bookAuth}</div>
        <div class="col">
            <button id="delBook">Delete</button>
        </div>
    </div>`
       
    }
});

//remove book delBook

document.addEventListener("click", event => {
    // console.log(event.target);
    if (event.target.id == "delBook" ) {
        booksNumber.innerText = --count;

        // console.log("Succesful")
        event.target.parentElement.parentElement.remove();
    }

})


let star = document.querySelectorAll(".card .card-body .stars i");

star[0].onclick = _ => {
    console.log(star);
    star.classList.remove("active")
}

star.forEach(element => {
    element.onclick = _ => {
        element.classList.toggle("active")
    }
    
});




