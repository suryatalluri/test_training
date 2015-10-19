/*global Application */
Application.$controller('YoutubeController', ['$scope', '$sce', 'Utils', function ($scope, $sce, Utils) {
    "use strict";

    /* Define the property change handler. This function will be triggered when there is a change in the prefab property */
    function propertyChangeHandler(key, newVal) {
        switch (key) {
        case "youtubeurl":
            if (!newVal) {
                return;
            }

            /* remove http or https from the url (to follow the protocol which the app is using) */
            newVal = Utils.removeProtocol(newVal);

            newVal = newVal.replace("/watch?v=", "/embed/");
            newVal += (newVal.indexOf("?") === -1 ? "?" : "&") + "wmode=transparent";
            $scope.url = $sce.trustAsResourceUrl(newVal);
            break;
        }
    }

    /* register the property change handler */
    $scope.propertyManager.add($scope.propertyManager.ACTIONS.CHANGE, propertyChangeHandler);

    /* this will be triggered after the prefab is initialized */
    $scope.onInitPrefab = function () {
        // do nothing
    };
}]);
