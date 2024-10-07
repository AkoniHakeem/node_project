// create node js server
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const users = [
        {
            name: "Iliyas Hassan",
            email: "hassan@gmail.com"
        },
        {
            name: "Jamiu Olalekan",
            email: "olalekan@gmail.com",
        },
        {
            name: "Abdul Qudus Oyelami",
            email: "oyelamiqudus@gmail.com"
        }
    ]
    console.log(url);
    if (url === "/user") {
        res.end(`These are the registered users: ${JSON.stringify(users)}`);
    }
    else if (url.match(/\/user\/\d/)) {
        console.log("this is trying to access a specific resource.");
        const arrayOfStrings = url.split("/");
        console.log(arrayOfStrings);
        const index = arrayOfStrings[2];
        const userAtIndex = users[index]
        res.end(`You made a request with the path id: ${JSON.stringify(userAtIndex)}`);
    }
    else {
        const devName = "Akoni Mayowa";
        res.end('Hello from' + ' ' + devName);
    }
});


server.listen(3000, () => {
    console.log('Server is running on port 3000');
});