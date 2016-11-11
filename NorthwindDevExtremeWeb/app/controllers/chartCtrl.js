app.controller('chartCtrl', function ($scope, $http) {
    var dataSource = [{
        month: "1",
        avgT: 9.8,
        avgT1: 8.8,
        minT: 4.1,
        maxT: 15.5,
        prec: 109
    }, {
        month: "2",
        avgT: 11.8,
        avgT1: 11.5,
        minT: 5.8,
        maxT: 17.8,
        prec: 104
    }, {
        month: "3",
        avgT: 13.4,
        avgT1: 12.8,
        minT: 7.2,
        maxT: 19.6,
        prec: 92
    }, {
        month: "4",
        avgT: 15.4,
        avgT1: 13.8,
        minT: 8.1,
        maxT: 22.8,
        prec: 30
    }, {
        month: "5",
        avgT: 18,
        avgT1: 12.8,
        minT: 10.3,
        maxT: 25.7,
        prec: 10
    }, {
        month: "6",
        avgT: 20.6,
        avgT1: 12.8,
        minT: 12.2,
        maxT: 29,
        prec: 2
    }, {
        month: "7",
        avgT: 22.2,
        avgT1: 12.8,
        minT: 13.2,
        maxT: 31.3,
        prec: 2
    }, {
        month: "8",
        avgT: 22.2,
        avgT1: 12.8,
        minT: 13.2,
        maxT: 31.1,
        prec: 1
    }, {
        month: "9",
        avgT: 21.2,
        avgT1: 12.8,
        minT: 12.4,
        maxT: 29.9,
        prec: 8
    }, {
        month: "10",
        avgT: 17.9,
        avgT1: 12.8,
        minT: 9.7,
        maxT: 26.1,
        prec: 24
    }, {
        month: "11",
        avgT: 12.9,
        avgT1: 12.8,
        minT: 6.2,
        maxT: 19.6,
        prec: 64
    }, {
        month: "12",
        avgT: 9.6,
        avgT1: 12.8,
        minT: 3.4,
        maxT: 15.7,
        prec: 76
    } , {
        month: "13",
        avgT: 9.6,
        avgT1: 12.8,
        minT: 3.4,
        maxT: 15.7,
        prec: 76
    },
     {
        month: "14",
        avgT: 9.6,
        avgT1: 12.8,
        minT: 3.4,
        maxT: 15.7,
        prec: 76
     }, {
         month: "15",
         avgT: 9.6,
         avgT1: 12.8,
         minT: 3.4,
         maxT: 15.7,
         prec: 76
     }, {
         month: "31",
         avgT: 9.6,
         avgT1: 12.8,
         minT: 3.4,
         maxT: 15.7,
         prec: 76
     }];

    $scope.chartOptions = {
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: "month"
        },
        panes: [{
            name: "topPane"
        }],
        defaultPane: "bottomPane",
        series: [ {
            pane: "topPane",
            valueField: "avgT",
            name: "January",
            label: {
                visible: true,
                customizeText: function () {
                    return this.valueText + " °C";
                }
            }
        },
         {
             pane: "topPane",
             valueField: "avgT1",
             name: "February",
             label: {
                 visible: true,
                 customizeText: function () {
                     return this.valueText + " °C";
                 }
             }
         }
        ],
        valueAxis: [ {
            pane: "topPane",
            min: 0,
            max: 30,
            grid: {
                visible: true
            },
            title: {
                text: "°C"
            }
        }],
        legend: {
            verticalAlignment: "bottom",
            horizontalAlignment: "center"
        },
        "export": {
            enabled: false
        },
        title: {
            text: "Test chart"
        }
    };
});
