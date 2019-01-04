<a href="https://project2-crypto.herokuapp.com/">
    <img src="./client/src/assets/images/btlogo3.png" alt="BlockTrd logo" title="" align="right" height="60" />
</a>

Cryptocurrency Simulator
======================

:star: Star us on GitHub — it helps!

[BlockTrade](https://project2-crypto.herokuapp.com/) is your source for cracking into the crypto market. It's a trade market simulator that gives you an imaginary $10,000.00 to spend in the market to test your luck with. 

### This was built as a UC Davis project group project. We built it out on a SQL database and with a React Front-End to make our currency simulator application better than ever

Sign up for a portfolio with us and play the cyrpto markets without the risk of losing your own money. This is a great application for you to realize your talents when it comes to investing in the markets prior to taking them on for real.

Contributions:
Front-End React was handled by Riley, Dakokta, Jake
Back-End implementation was handled by Aman, Jill and Jake

#### Note: to run the repo you will need the follow:
First fork the files and install dependencies for the server and client package.json by running the following lines in your command line

```
npm i -g
cd client
npm i -g
```

Create a mysql file and link it to our sequelize ORM. We use dotenv here and I would advice you do the same, creating a .env file like below to link to everything. 

```
DB_HOST = yourHostName
DB_PASS = yourDbPassWord
DB_USER = yourDbUserName
```

Now make sure to run your MySQL DB then begin the servers

```
npm run dev 
```

## Authors

* **Riley, Jake** - Front-End React
* **Jill, Aman, Jake** - Back-End Routing and DB Connection

## Built With

* [React](https://reactjs.org/) - The front-end library used
* [Sequelize](http://docs.sequelizejs.com/) - ORM used to communicate with MySQL
* [MySQL](https://www.mysql.com/) - Our Database

## Acknowledgments

* Big shout out to the very helpful API we used from cryptocompare.com. Huge help here.
