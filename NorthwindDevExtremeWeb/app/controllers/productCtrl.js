app.controller('productCtrl', function ($scope, $http) {
    $http.get('/Product/List').success(function (res) {
        $scope.gridData = res;
        $scope.dataGridOptions = {
            dataSource: $scope.gridData.listProduct,
            export: {
                allowExportSelectedData: true,
                enabled: true,
                excelFilterEnabled: true,
                excelWrapTextEnabled: true,
                fileName: 'exportaaa'
            },
            filterRow: {
                visible: true
            },
            searchPanel: {
                visible: true
            },
            editing: {
                allowAdding: true,
                allowDeleting: true,
                allowUpdating: true,
                mode: 'form'
            },
            paging: {
                pageSize: 10
            },
            pager: {
                showPageSizeSelector: true,
                allowedPageSizes: [5, 10, 20],
                showInfo: true
            },
            selection: {
                mode: "single"
            },
            columns: ["ProductName",
                    {
                        caption: "Category",
                        dataField: 'CategoryID',
                        lookup: {
                            dataSource: $scope.gridData.listCategory, valueExpr: 'CategoryID', displayExpr: 'CategoryName'
                        }
                    },
                    {
                        caption: "Supplier",
                        dataField: 'SupplierID',
                        lookup: {
                            dataSource: $scope.gridData.listSupplier, valueExpr: 'SupplierID', displayExpr: 'CompanyName'
                        }
                    }
            ],
            onRowInserting: function (selectedItems) {
                var data = selectedItems.data;
                $http.post('/Product/Insert', data).success(function (res) {
                    
                });
            },
            onRowInserted: function (e) {
                // update key
            },
            onRowUpdating: function (selectedItems) {
                var data = selectedItems.oldData;
                $http.post('/Product/Update', data).success(function () {

                });
            },
            onRowRemoving: function (selectedItems) {
                var data = selectedItems.data;
                $http.get('/Product/Delete?ProductID=' + data.ProductID);
            }
        };
    });
});