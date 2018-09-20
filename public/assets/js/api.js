//User profile
// TODO: figure out how to pull specific user data
// TODO: get user table going and begin using sequalize to build out routes with info we will need
// INFO Needed:
// cryptodato, should be on it's own
// users portfolio data + way to implement users id into url here
// user buying history (might need a table for this)
// update user portfolio, user buying history (could even have a graph charting buying history?)

//

//Pulls from API and saves prices. Calls reAvaluate function to start off
function apiCallToCrypto() {
  jQuery.getJSON(
    "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,LTC&tsyms=USD",
    function(data) {
      bitcoinPrice = data.RAW.BTC.USD.PRICE;
      ethereumPrice = data.RAW.ETH.USD.PRICE;
      ripplePrice = data.RAW.XRP.USD.PRICE;
      litecoinPrice = data.RAW.LTC.USD.PRICE;
      reAvaluate();
    }
  );
}

$.get("api/user", function(data) {
  console.log(data);
  console.log(data.id);
  var userId = data.id;
  return userId;
});

$.get("api/user/userId", function(data) {
  var userPort = data.Porfolio;
  return userPort;
});

$.get("api/tradeHistory", function(data) {
  var history = data.history;
  //save all the history to the tables below
});

function updateDatabase(userPort) {
  $.ajax({
    method: "PUT",
    url: "/api/user/portfolio",
    data: userPort
  });
}

// function updateUserHistory(userHistory) {
//   $.post("/api/user/portfolio", function(data) {});
// }
