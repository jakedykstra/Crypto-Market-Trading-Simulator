$("#graphButtonContainer button").on("click", function() {
  $(".svg-container svg").remove();
  console.log(this);
  console.log(this.value);
  var coin = this.value;
  if (coin === "ETH") {
    var graphColor = "#393e46";
  } else if (coin === "LTC") {
    var graphColor = "#bebebe";
  } else if (coin === "BTC") {
    var graphColor = "#f1c506";
  } else if (coin === "XRP") {
    var graphColor = "#009dd6";
    var lineColor = "black";
  }
  $("#graphContainer").css("background", graphColor);
  $("#graphButtonContainer").css("background", "#393e46");
  var api =
    "https://min-api.cryptocompare.com/data/histoday?fsym=" +
    coin +
    "&tsym=USD&limit=90";
  loadGraph();

  function loadGraph() {
    fetch(api)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var parsedData = parseData(data);
        console.log(parseData);
        drawChart(parsedData);
      });
  }

  function parseData(data) {
    var arr = [];
    for (var i; i < data.Data.length; i++) {
      arr.push({
        date: new Date(i.time * 1000), //date
        value: i.close //convert string to number
      });
    }
    return arr;
  }

  function drawChart(data) {
    var svgWidth = 600,
      svgHeight = 400;
    var margin = {
      top: 20,
      right: 20,
      bottom: 30,
      left: 50
    };
    var width = svgWidth - margin.left - margin.right;
    var height = svgHeight - margin.top - margin.bottom;
    var svg = d3
      .select("div#container")
      .append("svg")
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", "0 0 600 400")
      .classed("svg-content", true);
    //.attr("width", svgWidth)
    // .attr("height", svgHeight);

    var g = svg
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var x = d3.scaleTime().rangeRound([0, width]);
    var y = d3.scaleLinear().rangeRound([height, 0]);

    var line = d3
      .line()
      .x(function(d) {
        return x(d.date);
      })
      .y(function(d) {
        return y(d.value);
      });
    x.domain(
      d3.extent(data, function(d) {
        return d.date;
      })
    );
    y.domain(
      d3.extent(data, function(d) {
        return d.value;
      })
    );

    g.append("g")
      .attr("transform", "translate(0," + height + ")")
      .attr("stroke", "#000")
      .attr("stroke-width", 1)
      .call(d3.axisBottom(x))
      .select(".domain")
      .remove();

    g.append("g")
      .call(d3.axisLeft(y))
      .append("text")
      .attr("fill", "#000")
      .attr("stroke-width", 1)
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Price ($)");
    if (coin === "XRP") {
      g.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 1.5)
        .attr("d", line);
    } else {
      g.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "#009dd6")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 1.5)
        .attr("d", line);
    }
  }
});
