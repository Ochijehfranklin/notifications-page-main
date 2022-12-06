
const unreadMessages = document.querySelectorAll(".notifications");
const unread = document.getElementById("top-number");
const markAll = document.getElementById("all-read");
unread.innerText=unreadMessages.length;

unreadMessages.forEach((message) => {
    message.addEventListener("click", () => {
     message.classList.remove("notifications");
     const newUnreadMessages = document.querySelectorAll(".notifications");
    unread.innerText = newUnreadMessages.length;
   })
})
markAll.addEventListener("click", () => {
    unreadMessages.forEach(message => 
        message.classList.remove("notifications"))
    const newUnreadMessages = document.querySelectorAll(".notifications");
    unread.innerText = newUnreadMessages.length;
})
