# **Codecademy Store**


In this project, you’ll build a program that mimics [Codecademy’s own online store](https://shop.codecademy.com/)! The application should display products from the Codecademy store and allow the user to add them to their cart. In the cart, the user can adjust the quantity of each item and the running total will be displayed at the bottom. Lastly, the user can choose the currency for the entire application.


This application has three slices of state:

- `inventory`: An array of objects representing the items that are available to purchase.
- `cart`: An object that maps the name of each item added to the cart to an object with the price and desired quantity for that item.
- `currencyFilter`: A string that represents the currency used to calculate the prices displayed to the user: `'USD'`, `'CAD'` or `'EUR'`.


As you will see, the file structure has been organized using the recommended feature-based pattern and most of the inventory and currency features have been built for you. It will be up to you to:

- complete the cart’s action creators and reducer logic
- create the store using `createStore()` and `combineReducers()`
- pass the store resources to presentational components via the top-level `<App />` component
- render the `<Cart />` component using the current state data
- dispatch actions to the store

## Technologies

- React
- Redux

