// Code goes here
angular.module('app', []);


angular.module('app').controller('FetchCtrl', ['$scope', 'restservice', FetchCtrl]);

function FetchCtrl($scope, restservice) {
  $scope.currency = "BTC-ETH";
  var data1;
  var cur = $scope.currency;
  var buy;
  var limit = 50;
  $scope.showgraph = false;
  var color = Chart.helpers.color;


  // Function for fetching the Type of currency...

  $scope.click = function() {
    cur = $scope.currency;
    $scope.cur1 = cur.substr(4, 6);

  };

  // Function for fetching the Ask,Bid,Last...

  $scope.fetch = function() {
    restservice.get("https://bittrex.com/api/v1.1/public/getticker", {
      "market": cur
    }).then(function(data) {
      $scope.bid = data.data.result.Bid;
      $scope.ask = data.data.result.Ask;
      $scope.last = data.data.result.Last;
    }, function(error) {
      alert("Fetching Failed");
    });
  };

  // Function for fetching the OrderBook...

  $scope.orderbook = function() {
    restservice.get("https://bittrex.com/api/v1.1/public/getorderbook", {
      "market": cur,
      "type": "both"
    }).then(function(data) {
      $scope.tab = data.data.result.buy;
      $scope.tab1 = data.data.result.sell;
    }, function(error) {
      alert("Fetching Failed");
    });
  };

  // Function for fetching the MarketHistory...

  $scope.markethistory = function() {

    restservice.get("https://bittrex.com/api/v1.1/public/getmarkethistory", {
      "market": cur
    }).then(function(data) {
      $scope.market = data.data.result;
      $scope.x1 = [];
      $scope.y1 = [];

      var i = 0;
      angular.forEach($scope.market, function(oneEntry) {
        if (i !== 10) {

          $scope.x1.push(
            new Date(oneEntry.TimeStamp)
          );
          $scope.y1.push(oneEntry.Price);
          i++;
        }
      });

    }, function(error) {
      alert("Fetching Failed");
    });

  };

  // Function for Drawing Graph...

  $scope.graph = function() {
    $scope.graph1();
    $scope.graph2();
    $scope.graph3();
    $scope.graph4();
    $scope.graph5();
    $scope.graph6();
    $scope.graph7();
  };

  $scope.graph1 = function() {
    $scope.showgraph = true;
    var config = {
      type: 'line',
      data: {
        labels: $scope.x1,
        datasets: [{
          label: "BITCOIN VALUES",
          backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
          borderColor: window.chartColors.blue,
          fill: true,
          data: $scope.y1
        }]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: "MARKET INFORMATION CHART"
        },
        scales: {
          xAxes: [{
            type: "time",
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'TimeStamp'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'value (BTC)'
            }
          }]
        }
      }
    };
    var ctx = document.getElementById("canvas1").getContext("2d");
    window.myLine = new Chart(ctx, config);

  };

  $scope.graph2 = function() {
    $scope.showgraph = true;
    var config = {
      type: 'bar',
      data: {
        labels: $scope.x1,
        datasets: [{
          label: "BITCOIN VALUES",
          backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
          borderColor: window.chartColors.blue,
          fill: true,
          data: $scope.y1
        }]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: "MARKET INFORMATION CHART"
        },
        scales: {
          xAxes: [{
            type: "time",
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'TimeStamp'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'value (BTC)'
            }
          }]
        }
      }
    };
    var ctx = document.getElementById("canvas2").getContext("2d");
    window.myLine = new Chart(ctx, config);

  };

  $scope.graph3 = function() {
    $scope.showgraph = true;
    var config = {
      type: 'pie',
      data: {
        labels: $scope.x1,
        datasets: [{
          label: "BITCOIN VALUES",
          backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
          borderColor: window.chartColors.blue,
          fill: true,
          data: $scope.y1
        }]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: "MARKET INFORMATION CHART"
        },
        scales: {
          xAxes: [{
            type: "time",
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'TimeStamp'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'value (BTC)'
            }
          }]
        }
      }
    };
    var ctx = document.getElementById("canvas3").getContext("2d");
    window.myLine = new Chart(ctx, config);

  };
  
  $scope.graph4 = function() {
    $scope.showgraph = true;
    var config = {
      type: 'polarArea',
      data: {
        labels: $scope.x1,
        datasets: [{
          label: "BITCOIN VALUES",
          backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
          borderColor: window.chartColors.blue,
          fill: true,
          data: $scope.y1
        }]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: "MARKET INFORMATION CHART"
        },
        scales: {
          xAxes: [{
            type: "time",
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'TimeStamp'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'value (BTC)'
            }
          }]
        }
      }
    };
    var ctx = document.getElementById("canvas4").getContext("2d");
    window.myLine = new Chart(ctx, config);

  };
  
  $scope.graph5 = function() {
    $scope.showgraph = true;
    var config = {
      type: 'doughnut',
      data: {
        labels: $scope.x1,
        datasets: [{
          label: "BITCOIN VALUES",
          backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
          borderColor: window.chartColors.blue,
          fill: true,
          data: $scope.y1
        }]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: "MARKET INFORMATION CHART"
        },
        scales: {
          xAxes: [{
            type: "time",
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'TimeStamp'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'value (BTC)'
            }
          }]
        }
      }
    };
    var ctx = document.getElementById("canvas5").getContext("2d");
    window.myLine = new Chart(ctx, config);

  };
  
  $scope.graph6 = function() {
    $scope.showgraph = true;
    var config = {
      type: 'radar',
      data: {
        labels: $scope.x1,
        datasets: [{
          label: "BITCOIN VALUES",
          backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
          borderColor: window.chartColors.blue,
          fill: true,
          data: $scope.y1
        }]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: "MARKET INFORMATION CHART"
        },
        scales: {
          xAxes: [{
            type: "time",
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'TimeStamp'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'value (BTC)'
            }
          }]
        }
      }
    };
    var ctx = document.getElementById("canvas6").getContext("2d");
    window.myLine = new Chart(ctx, config);

  };
  
  $scope.graph7 = function() {
    $scope.showgraph = true;
    var config = {
      type: 'bubble',
      data: {
        labels: $scope.x1,
        datasets: [{
          label: "BITCOIN VALUES",
          backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
          borderColor: window.chartColors.blue,
          fill: true,
          data: $scope.y1
        }]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: "MARKET INFORMATION CHART"
        },
        scales: {
          xAxes: [{
            type: "time",
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'TimeStamp'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'value (BTC)'
            }
          }]
        }
      }
    };
    var ctx = document.getElementById("canvas7").getContext("2d");
    window.myLine = new Chart(ctx, config);

  };

  // Function for Real Time Fetching...

  $scope.loop = function() {
    $scope.rtxt = "Real Time Fetching is on.....";
    if (document.getElementById("min").checked === true) {
      repeat = setInterval(function() {
        $scope.fetch();
        $scope.orderbook();
        $scope.markethistory();
        $scope.graph();

      }, 1000);
    } else {

      $scope.rtxt = "";
      clearInterval(repeat);
    }
  };

  // Function for Clearing all values...

  $scope.clear = function() {
    $scope.bid = "";
    $scope.ask = "";
    $scope.last = "";
    $scope.tab = "";
    $scope.tab1 = "";
    $scope.market = "";
    $scope.gData = [];
    $scope.showgraph = false;
  };

}