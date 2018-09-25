//User profile
// TODO: figure out how to pull specific user data
// TODO: get user table going and begin using sequalize to build out routes with info we will need
// INFO Needed:
// cryptodato, should be on it's own
// users portfolio data + way to implement users id into url here
// user buying history (might need a table for this)
// update user portfolio, user buying history (could even have a graph charting buying history?)

var bitcoinPrice;
var ethereumPrice;
var litecoinPrice;
var ripplePrice;

//Pulls from API and saves prices. Calls reAvaluate function to start off
function apiCallToCrypto() {
  jQuery.getJSON(
    "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,LTC&tsyms=USD",
    function(data) {
      bitcoinPrice = data.RAW.BTC.USD.PRICE;
      ethereumPrice = data.RAW.ETH.USD.PRICE;
      ripplePrice = data.RAW.XRP.USD.PRICE;
      litecoinPrice = data.RAW.LTC.USD.PRICE;
      tradeRate(bitcoinPrice, ethereumPrice, ripplePrice, litecoinPrice);
    }
  );
}

function tradeRate(bitcoinPrice, ethereumPrice, ripplePrice, litecoinPrice) {
  $("#jqueryBTC").text(Math.floor(bitcoinPrice).toLocaleString("en"));
  $("#jqueryLTC").text(litecoinPrice.toLocaleString("en"));
  $("#jqueryEther").text(ethereumPrice.toLocaleString("en"));
  $("#jqueryXRP").text(ripplePrice.toLocaleString("en"));
}
apiCallToCrypto();

// gets our users id
$.get("api/user", function(data) {
  console.log(data);
  var userId = data.id;
  console.log(userId);
  userPortfolio(userId);
});

// get request where backend will create a portfolio and send the new data
function createPort(userId) {
  $.get("api/newPort", function(data) {
    console.log(data);
  });
}

// function pulls portfolio data so we can render to the screen. If there is not portfolio data on user then we will call createPort to create one
function userPortfolio(userId) {
  $.get("api/user/" + userId, function(data) {
    console.log(data);
    var userPort = data;
    if (!userPort) {
      createPort(userId);
    } else {
      console.log(userPort);
      return reAvaluate(userPort);
    }
  });
}

// updates portfolio with new data based on recent buy. Function is called after buy/sell functionality
function updateDatabase(userPort) {
  $.ajax({
    method: "PUT",
    url: "/api/user/updatePortfolio",
    data: userPort
  });
}

// getting original tradeHistory data to populate
$.get("/api/tradeHistory", function(data) {
  // for each to seperate out data
  for(let rows in data){
  var newRow = $("<tr>").append(
    $("<td>").text(rows.id),
    $("<td>").text(rows.cryptoType),
    $("<td>").text("$" + rows.coinPrice),
    $("<td>").text(rows.coinAmount),
    $("<td>").text("$" + rows.usdAmount),
    $("<td>").text(rows.tradeType)
  );
  };
});

// function for adding to the database history
function tradeHistoryDb(
  crypto,
  usdAmount,
  coinAmount,
  transactionType,
  objCrypto
) {
  usdAmount = Math.round(usdAmount * 100) / 100;
  coinAmount = Math.round(coinAmount * 100) / 100;
  // setting variables from inputs
  console.log(arguments);
  // posting data to db
  $.post("/api/tradeHistory", arguments);

  // getting db data and placing in history
  $.get("/api/tradeHistory", function(data) {
    console.log("trade history data in database" + data);
    var newRow = $("<tr>").append(
      $("<td>").text(data.id),
      $("<td>").text(data.cryptoType),
      $("<td>").text("$" + data.coinPrice),
      $("<td>").text(data.coinAmount),
      $("<td>").text("$" + data.usdAmount),
      $("<td>").text(data.tradeType)
    );
  });

  // Append the new row to the table
  $(".body").prepend(newRow);
}

// function updateUserHistory(userHistory) {
//   $.post("/api/user/portfolio", function(data) {});
// }
