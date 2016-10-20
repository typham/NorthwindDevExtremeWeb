app.controller('categoryCtrl', function ($scope, $http) {
    $http.get('/Category/List').success(function (res) {
        $scope.gridData = res;
        $scope.dataGridOptions = {
            dataSource: $scope.gridData.listCategory,
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
            columns: ["CategoryName","Description"],
            onRowInserting: function (selectedItems) {
                var data = selectedItems.data;
                $http.post('/Category/Insert', data).success(function () {

                });
            },
            onRowUpdating: function (selectedItems) {
                var data = selectedItems.oldData;
                $http.post('/Category/Update', data).success(function () {

                });
            },
            onRowRemoving: function (selectedItems) {
                var data = selectedItems.data;
                $http.get('/Category/Delete?CategoryID=' + data.CategoryID);
            }
        };
    });
});