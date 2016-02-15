var request = require('request');

var HOST = "https://www.instamojo.com/api/1.1/";

var API = {
  'createPayment' : 'payment-requests/',
  'links'         : 'links/',
  'paymentStatus' : 'payment-requests/'
}

var HEADERS = {
  'X-Api-Key'    : "YOUR-API-KEY",
  'X-Auth-Token' : "YOUR-AUTH-TOKEN",
}

exports.PaymentData = function() {
  return ({
    'purpose' : '', // required
    'amount'  : 0,  // required
    'currency': 'INR',
    'buyer_name' : '',
    'email' : '',
    'phone' : null,
    'send_email' : '',
    'send_sms' : '',
    'allow_repeated_payments' : '',
    'webhook' : '',
    'redirect_url' : '',
  });
}

exports.createPayment = function(data, callback) {
  createPayment(data, callback);
}

exports.seeAllLinks = function(callback) {
  seeAllLinks(callback);
}

exports.getPaymentStatus = function(id, callback) {
  getPaymentStatus(id, callback);
}

exports.getAllPayments= function(callback) {
  getAllPayments(callback);
}

function createPayment(paymentData, callback) {
  request.post({
    headers: HEADERS,
    url: HOST + API.createPayment,
    form: paymentData,
  }, function(error, response, body){
    var result = JSON.parse(body);
    callback(error, result);
  });
}

function seeAllLinks(callback) {
  request.get({
    headers: HEADERS,
    url: HOST + API.links,
  }, function(error, response, body){
    var result = JSON.parse(body);
    callback(error, result);
  });
}

function getAllPayments(callback) {
  request.get({
    headers: HEADERS,
    url: HOST + API.paymentStatus,
  }, function(error, response, body){
    var result = JSON.parse(body);
    callback(error, result);
  });
}

function getPaymentStatus(id, callback) {
  request.get({
    headers: HEADERS,
    url: HOST + API.paymentStatus + id + '/',
  }, function(error, response, body){
    var result = JSON.parse(body);
    callback(error, result);
  });
}