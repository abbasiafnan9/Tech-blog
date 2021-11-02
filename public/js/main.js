const newPost = document.querySelector("#newpost");

//listens for new post button

newPost.addEventListener("click", (e)=>{
    e.preventDefault();
    location.href = "/newpost"
})


