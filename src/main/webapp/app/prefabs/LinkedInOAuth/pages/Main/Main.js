Application.$controller("LinkedInOAuthController", ["$scope", function($scope) {
    "use strict";

    /* 
     * This function will be invoked when any of this prefab's property is changed
     * @key: property name
     * @newVal: new value of the property
     * @oldVal: old value of the property
     */
    function propertyChangeHandler(key, newVal, oldVal) {
            /*
		switch (key) {
			case "prop1":
				// do something with newVal for property 'prop1'
				break;
			case "prop2":
				// do something with newVal for property 'prop2'
				break;
		}
		*/
        }
        /* register the property change handler */
    $scope.propertyManager.add($scope.propertyManager.ACTIONS.CHANGE, propertyChangeHandler);

    $scope.OAuthHandlerServiceGetLoginURLonSuccess = function(variable, data) {

        window.location = data;
    };

    $scope.OAuthHandlerServiceGetAccessTokenonSuccess = function(variable, data) {

        if (data === "") {
            $scope.Variables.OAuthHandlerServiceGetLoginURL.update();
        } else {
            $scope.accesstoken = data;
        }
    };

}]);