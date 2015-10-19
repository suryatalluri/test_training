Application.$controller('FbpostController', ['$scope', '$rootScope', '$location', '$timeout', 'wmToaster',
    function ($scope, $rootScope, $location, $timeout, wmToaster) {
        "use strict";

        /* Define the property change handler. This function will be triggered when there is a change in the prefab property */
        function propertyChangeHandler(key, newVal) {
            switch (key) {
            case "appid":
                $scope.appid = $rootScope[newVal] || newVal;
                FBinit($scope.appid);
                break;
            }
        }

        /* register the property change handler */
        $scope.propertyManager.add($scope.propertyManager.ACTIONS.CHANGE, propertyChangeHandler);

        var promise;
        $scope.model = {
            name: "",
            description: "",
            message: "",
            url: "http://",
            startDate: new Date().toJSON().slice(0, 10)
        };

        function FBinit(appid) {
            SBW.init({
                "protocol": "http:",
                "env": "www",
                "proxyURL": "",
                "callbackDirectory": "../callback",
                "debug": "false",
                "services": {
                    "Facebook": {
                        "appID": appid
                    }
                }
            }, WM.noop);
        }

        function showMessage(type, desc) {
            if (promise) {
                promise();
            }
            $scope.msg = {
                desc: desc,
                type: type,
                show: true
            };
            promise = $timeout(function () {
                $scope.msg.show = false;
            }, 5000);
        }

        function getValidJSON(content) {
            if (!content) {
                return false;
            }
            try {
                /*obtaining json from editor content string*/
                return JSON.parse(content);
            } catch (e) {
                /*terminating execution if new variable object is not valid json.*/
                return false;
            }
        }

        $scope.postToFB = function () {
            var location = $location.$$absUrl.replace('#' + $location.$$path, '') + $scope.uploadImageSrc;
            location = location.replace(location.split('/')[0] + '//', '');
            $scope.loadingState = true;
            SBW.api.postShare(['facebook'], {
                message: $scope.model.message,
                picture: location,
                link: $scope.model.url,
                name: $scope.model.name,
                caption: $scope.model.message,
                description: $scope.model.description,
                actions: {
                    "name": "View",
                    "link": $scope.model.url
                }
            }, function () {
                $rootScope.$safeApply($scope, function () {
                    $scope.loadingState = false;
                    wmToaster.show("success", "Success", "Posted successfully to Facebook");
                });
            }, function (failed) {
                $rootScope.$safeApply($scope, function () {
                    $scope.loadingState = false;
                    showMessage("warn", failed.message);
                });
            });
        };

        $scope.picUploadSuccess = function ($event, params) {
            var response = getValidJSON($event.currentTarget.responseText)[0];
            $scope.uploadImageSrc = 'resources/uploads/' + response.fileName;
        };
    }
]);