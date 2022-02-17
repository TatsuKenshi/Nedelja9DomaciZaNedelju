## Hiawatha Comic Book Store

The Hiawatha Comic Book Store is a basic, one-page React.js app. It allows the user to add new products via the entry form and calculate the price of items put into the shopping cart.

## Motivation

The project was made during the penultimate week of the IT Bootcamp's Front End Development Course as the first experiment with databases (db.JSON) and axios.

## Build status

The project is considered finished, and there won't be any expansions in terms of features. I might add a couple more items to the product list in the future.That said, the project was overhauled recently with responsive design and extra shopping items.

## Tech/framework used

This project is based on React.js, with a couple of well-known libraries.

<b>Built with</b>
Aside from React.js, I also used

- [db.json](https://www.npmjs.com/package/db-json)
  The database is live, and it's deployed on heroku.com. The live project is on netlify.com, and it is connected to the live database.

- [axios](https://www.axios.com/)
- [react router 5](https://reactrouter.com/)
- [styled-components](https://styled-components.com/)
- [uuid](https://www.npmjs.com/package/uuid)

## Features

Main features of this app include:

- fetching/displaying the list of products

- adding new products
  The user can add new products to the database via the product form in the upper portion of the page.

- calculating the price of the shopping cart
  The user can also add any of the displayed products to the cart, which automatically calculates the total price. "-" and "+" buttons allow the user to decrease and increase the amounts for every individual item separately. The Show Info button displays and hides the product description.

## Installation

1. To install this project on your machine and get it up and running, you should first clone this repository. Open the terminal, navigate to the desired destination on your drive, and run the following command:

git clone https://github.com/TatsuKenshi/Nedelja9DomaciZaNedelju

2. When the download is done, navigate to the project's folder with the following command:

cd Nedelja9DomaciZaNedelju

3. next, you'll need to install the necessary dependencies. Use the following command (make sure you're in the project's main folder):

npm install

4. To spin up the local dev environment, open your code editor/IDE and bring up the terminal. Run the following command in the project's main folder:

npm start

If you get an error, try installing an older version of node.js (I recommend 14.18.3), switch to it, and try again.

5. The local and live databases are separate, but their contents are identical. To spin up the local one, open a new terminal instance in your code editor/IDE and enter the following command:

json-server -p 3005 --watch db.json

## API Reference

No APIs were used in this project.

## How to use?

- how to add new products to the list
  You can add new products to the database via the product form in the upper portion of the page. Fill out the required fields and submit the form.

- how to edit the shopping cart
  You can also add any of the displayed products to the cart, which automatically calculates the total price. The "-" and "+" buttons allow you to decrease and increase the amounts for every individual item separately. There is no cap, and you can theoretically add as many copies of each comic book as you want.

- see product description
  The Show Info button displays and hides the product description.
