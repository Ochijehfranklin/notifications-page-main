
const unreadMessages = document.querySelectorAll(".notifications");
const unread = document.getElementById("top-number");
const markAll = document.getElementById("all-read");
notifications.innerText=unreadMessages.length;

unreadMessages.forEach((message) => {
    message.addEventListener("click", () => {
     message.classList.remove("notifications");
     const newUnreadMessages = document.querySelectorAll(".notifications");
    notifications.innerText = newUnreadMessages.length;
   })
})
markAll.addEventListener("click", () => {
    unreadMessages.forEach(message => 
        message.classList.remove("notifications"))
    const newUnreadMessages = document.querySelectorAll(".notifications");
    notifications.innerText = newUnreadMessages.length;
})
