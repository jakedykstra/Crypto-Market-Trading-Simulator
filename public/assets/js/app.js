//buyCrypto function
//1. Checks if input is a valid number and not a letter
//2. Calculates Total Amount
//3. Checks if the customer has the cash to spend
//4. Updates customers account
//5. call Reavaluate

function buyCrypto(amount, crypto, objCrypto) {
  if (!amount || typeof amount === "Number") {
    // alert("Invalid Input");
    return;
  } else {
    var totalAmount = amount / crypto;
    if (amount > userPort.USD) {
      // alert("You dont have enough");
    } else {
      userPort.USD -= amount;
      userPort[objCrypto] += totalAmount;
    }
    reAvaluate(userPort);
    console.log(userPort);
    tradeHistoryDb(crypto, amount, totalAmount, "Buy", objCrypto);
    apiCallToCrypto();
  }
}

//Sell Crypto function
//1. Checks if input is valid
//2. Calculates total amount
//3. Checks if user has amount to sell
//4. Reavaluates amount
function sellCrypto(amount, crypto, objCrypto) {
  console.log("sell button clicked");
  if (!amount || typeof amount === "Number") {
    // alert("Invalid Input");
    return;
  } else {
    var totalAmount = amount * crypto;
    if (amount > userPort[objCrypto]) {
      // alert('you dont have enough');
    } else {
      userPort.USD += totalAmount;
      userPort[objCrypto] -= amount;

      reAvaluate();
      tradeHistoryDb(crypto, totalAmount, amount, "Sell", objCrypto);
      apiCallToCrypto();
    }
  }
}

//Reavaluate
//1. Calculates USD value of current holdings
//2. Updates user profile with USD value and holdings
//3. Updates current price for coins
function reAvaluate(userPort) {
  console.log(userPort);
  userPort.BTCVal = userPort.BTC * bitcoinPrice;
  userPort.LTCVal = userPort.LTC * litecoinPrice;
  userPort.ETHVal = userPort.ETH * ethereumPrice;
  userPort.XRPVal = userPort.XRP * ripplePrice;
  userPort.totalNet =
    userPort.BTCVal +
    userPort.ETHVal +
    userPort.USD +
    userPort.LTCVal +
    userPort.XRPVal;

  // Places the user purchased text into the user field
  $("#jqueryUSD").text(
    userPort.USD.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  );
  $("#jqueryNet").text(
    userPort.totalNet.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  );
  $("#userPortBTC").text(
    userPort.BTC.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  );
  $("#BTCVal").text(
    userPort.BTCVal.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  );
  $("#userPortLTC").text(
    userPort.LTC.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  );
  $("#LTCVal").text(
    userPort.LTCVal.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  );
  $("#userPortEther").text(
    userPort.ETH.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  );
  $("#ETHVal").text(
    userPort.ETHVal.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  );
  $("#userPortRipple").text(
    userPort.XRP.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  );
  $("#XRPVal").text(
    userPort.XRPVal.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  );

  updateDatabase(userPort);
}

//TODO: Make sure this works

$("#buybtc").on("click", function() {
  event.preventDefault();
  var amount = parseFloat(
    $("#amount-btc")
      .val()
      .trim()
  );
  buyCrypto(amount, bitcoinPrice, "BTC");
  $("#amount-btc").val("");
});

$("#sellbtc").on("click", function() {
  event.preventDefault();
  var amount = parseFloat(
    $("#amount-btc2")
      .val()
      .trim()
  );
  sellCrypto(amount, bitcoinPrice, "BTC");
  $("#amount-btc2").val("");
});

$("#buyLTC").on("click", function() {
  event.preventDefault();
  var amount = parseFloat(
    $("#amount-ltc")
      .val()
      .trim()
  );
  buyCrypto(amount, litecoinPrice, "LTC");
  $("#amount-ltc").val("");
});

$("#sellLTC").on("click", function() {
  event.preventDefault();
  var amount = parseFloat(
    $("#amount-ltc2")
      .val()
      .trim()
  );
  sellCrypto(amount, litecoinPrice, "LTC");
  $("#amount-ltc2").val("");
});

$("#buyEther").on("click", function() {
  event.preventDefault();
  var amount = parseFloat(
    $("#amount-eth")
      .val()
      .trim()
  );
  buyCrypto(amount, ethereumPrice, "ETH");
  $("#amount-eth").val("");
});

$("#sellEther").on("click", function() {
  event.preventDefault();
  var amount = parseFlaot(
    $("#amount-eth2")
      .val()
      .trim()
  );
  sellCrypto(amount, ethereumPrice, "ETH");
  $("#amount-eth2").val("");
});

$("#buyXRP").on("click", function() {
  event.preventDefault();
  var amount = parseFloat(
    $("#amount-xrp")
      .val()
      .trim()
  );
  buyCrypto(amount, ripplePrice, "XRP");
  $("#amount-xrp").val("");
});

$("#sellXRP").on("click", function() {
  event.preventDefault();
  var amount = parseFloat(
    $("#amount-xrp2")
      .val()
      .trim()
  );
  sellCrypto(amount, ripplePrice, "XRP");
  $("#amount-xrp2").val("");
});
