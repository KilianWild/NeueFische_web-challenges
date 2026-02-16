console.clear();

function handleLikeButtonClick(event) {
   const buttonElement = event.target;
   buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

for (let i = 0; i < 10; i++) {
   createPost();
}

function createPost() {
   const articlePost = document.createElement("article");
   articlePost.classList.add("post");

   const paragraph = document.createElement("p");
   paragraph.classList.add("post__content");
   paragraph.textContent =
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

   const footer = document.createElement("footer");
   footer.classList.add("post__footer");

   const span = document.createElement("span");
   span.classList.add("post__username");
   span.textContent = "@username";

   const button = document.createElement("button");
   button.classList.add("post__button");
   button.type = "button";
   button.setAttribute("data-js", "like-button");
   button.textContent = "♥ Like";

   button.addEventListener("click", handleLikeButtonClick);

   // append elements
   articlePost.append(paragraph);
   articlePost.append(footer);
   footer.append(span);
   footer.append(button);

   document.body.append(articlePost);
}
