const PORTFOLIO_DATA = {
    bostrent: {
        title: "BoSTRent",
        url: "https://calm-brushlands-43036.herokuapp.com",
        image: "bostrent.jpg",
        description: "This is my biggest project to date, and is the one I am most proud of. I built this site myself from scratch. It is an ongoing work in progress, built in React as a full-stack MERN application with a MongoDB database, hosted on Heroku. The github repository is currently private, as it will be given to somebody else for further development into a production app at a later date. NOTE: Be careful about the website url. There is already a website with the url 'bostrent.com', which is not my work. It is a model created by somebody else for the same project. My own work can only be linked to through the above heroku url.",
        features: ["Redux / Redux Thunk", "Stripe payments", "Fully functional datepicker calendar that blocks appropriate dates once a user makes a reservation", "Dynamic content, including listings, price, available dates based on data from the back-end", "Google Maps API integrated", "Multiple third party libraries to add functionality, including React Router Hash Link library for scroll effect on Navbar click", "Responsive grid design to fit any screen", "POST / GET / PUT routes for handling data", ],
        whatILearned: ["Layout patterns, how to create responsive behavior with large numbers of different and different-sized elements on the same page", "How to write multiple Mongoose schemas and models for intuitive data organization", "How to set up a Node server with Express for both a development environment as well as a production build", "How to set up MongoDB's URI to connect with the back-end and serve data", "How to implement Redux for state management into a React app", "Three different ways to handle the issue of Client-side vs Server-side rendering: Asynchronous Redux calls and a 'Set Items Loading' piece of state, Async GET calls directly in the componentDidMount, or setting static default props to an empty object as a temporary fix to prevent errors on page load", "How to implement Redux Thunk for async Redux functionality", "How to implement the Google Maps API", "How to implement React Router and match by id to generate specific URLs for each unique listing", "How to convert a class-based component to use hooks, and vice versa", "How to integrate React's new hooks useReducer and useState to work alongside Redux seamlessly in cases where third party libraries must be adapted to dissimilar components in the application", "How to process Stripe payments, and how to use the token{} feature to process reservations after confirming successful payment"]
    },
    crownClothing: {
        title: "CRWN-Clothing",
        url: "https://crown-clothing-clc.herokuapp.com",
        image: "crownclothing.jpg",
        description: "My first front-end e-commerce application, it was a large project as part of a Udemy course I took. I learned a lot about things like user authentication, Firebase, and how to process Stripe payments.",
        features: ["Redux / Redux Sagas for state management", "SCSS styling", "Drop-down shopping cart", "Log-in and Sign-up authentication with Firebase, sessions", "Checkout Page with front-end Stripe payments", "On-click 'add to cart' functionality", "Ability to add or remove items at Checkout", "Multiple categories of products", "Memoization through using selectors", ],
        whatILearned: ["How to use Redux: Actions, Types, Reducers, Store, and how to manage each", "Redux Sagas for handling async Redux without using Redux Thunk", "Memoization for help in controlling state", "Firebase, how to use it, and how it can be a useful tool for quick Google account authentication", "How to deploy to Heroku using the terminal and CLI", "How to handle nested routes using React Router", "How to architect a basic e-commerce website front-end from the ground-up" ]
    },
    lightsOut: {
        title: "Lights Out!",
        url: "https://lights-out-clc.herokuapp.com",
        image: "lightsout.jpg",
        description: "A browser version of the popular game 'Lights Out', as part of a Udemy course. This application renders a grid-based game board comprised of 'cell' components with an 'on/off' state, which is passed up to the parent component via function, which then triggers other cells to toggle on or off, and keeps track of the state of the game as a whole. The game is won when every light has been turned out.",
        features: ["Internal state, game logic is entirely front-end"],
        whatILearned: ["How to pass state between React components", "A great exercise for learning how data flow in React works, as well as a puzzle as to how to create the logic of the game"]
    }
};

export default PORTFOLIO_DATA;