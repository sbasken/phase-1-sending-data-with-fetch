// Add your code here
const submitData = (userName, userEmail) => {
    fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })  
    })
    .then(res => res.json())
    .then(userInfo => {
        const script = document.querySelector("script");
        const h1 = document.createElement("h1");
        h1.innerHTML = userInfo.id;
        script.appendChild(h1);
    })
}


