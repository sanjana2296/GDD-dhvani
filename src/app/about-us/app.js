$(function() {
    console.log('ready!');
  });
  
  angular.module('ngFormReset', [])
    .controller('FormResetController', function($scope) {
      'use strict';
      $scope.submitForm = function() {
        if ($scope.myForm.$valid) {
            $('#reset-btn').show()
            $('#show').show()
        }
      }
      $scope.reset = function() {
        $scope.formData = {};
        $scope.myForm.$setPristine();
        $('#show').hide()
        $('#reset-btn').hide()
      }
    });
  
  
  