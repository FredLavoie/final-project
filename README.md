# FoodCylcle

FoodCycle is an application that allows merchants to post an add for food that remains at the end of the day or week that would otherwise be thrown out. The merchant is then about to recouperate some lost revenue by selling these remaining items at a discount. Users of the app can browse deals in their area and pay for them directly on the site, then simply pick them up before the end of the day.

### Front-end:
The html content is rendered on the client side using the [ReactJS](https://reactjs.org/) framework/library. React allow the developer to create the interactive parts of the app in JavaScript and render the html  needed as well as change the html elements quickly making the application dynamic. 

Using a front-end framework called [Materialize](https://materializecss.com/), the application has a modern and responsive look that users expect. The application also makes use of [Sass](https://sass-lang.com/) to give additional style customization to the content. 

### Back-end:
The back-end server is built using [node.js](https://nodejs.org) and [Express.js](https://expressjs.com/) - a node.js framework. 

## Screenshot

<img src="./docs/#.png" width="800">
<img src="./docs/#.png" width="800">
<img src="./docs/#.png" width="800">
<img src="./docs/#.png" width="800">
<img src="./docs/#.png" width="800">

## Getting started
- clone repository to your local machine
- create a ```.env``` file as per ```.env.example``` and fill out the information
- in terminal, run ```knex migrate:latest```
- in terminal, run ```knex seed:run```

- navigate to ```localhost:3000``` in your browser

## Dependencies

- [express](https://www.npmjs.com/package/express)
- [PostgreSQL 9.x](https://www.postgresql.org/)
- [Stripe]()
- [react](https://www.npmjs.com/package/react)
- [react-dom](https://www.npmjs.com/package/react-dom)
