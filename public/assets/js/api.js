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

var newPortfolio = {
  totalNet: 100000,
  USD: 100000,
  BTC: 0,
  BTC_Val: 0,
  ETH: 0,
  ETHVal: 0,
  XRP: 0,
  XRP_Val: 0,
  LTC: 0,
  LTC_Val: 0
};

function createPort(userId) {
  $.ajax({
    method: "POST",
    url: "api/newPort",
    data: newPortfolio
  });

  // userPortfolio(userId);
}

// gets our users id TODO: find other way to capture
$.get("api/user", function(data) {
  console.log(data);
  var userId = data.id;
  console.log(userId);
  userPortfolio(userId);
});

function userPortfolio(userId) {
  $.get("api/user/" + userId, function(data) {
    console.log(data);
    var userPort = data;
    if (!userPort) {
      createPort(newPortfolio, userId);
    } else {
      console.log(userPort);
      return reAvaluate(userPort);
    }
  });
}

function updateDatabase(userPort) {
  $.ajax({
    method: "PUT",
    url: "/api/user/updatePortfolio",
    data: userPort
  });
}

// function updateUserHistory(userHistory) {
//   $.post("/api/user/portfolio", function(data) {});
// }
