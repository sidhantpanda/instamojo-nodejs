var request = require('request');

var HOST = "https://www.instamojo.com/api/1.1/";

var API = {
  'createPayment' : 'payment-requests/',
  'links'         : 'links/',
  'paymentStatus' : 'payment-requests/',
  'refunds'       : 'refunds/',
}

module.exports = {
  HEADERS: {
    'X-Api-Key'    : "YOUR-API-KEY",
    'X-Auth-Token' : "YOUR-AUTH-TOKEN",
  },

  setKeys: function(apiKey, authKey) {
    this.HEADERS['X-Api-Key']  = apiKey;
    this.HEADERS['X-Auth-Token'] = authKey;
  },

  createPayment: function(data, callback) {
    request.post({
      headers: this.HEADERS,
      url: HOST + API.createPayment,
      form: data,
    }, function(error, response, body){
      var result = JSON.parse(body);
      callback(error, result);
    });
  },

  seeAllLinks: function(callback) {
    request.get({
      headers: this.HEADERS,
      url: HOST + API.links,
    }, function(error, response, body){
      var result = JSON.parse(body);
      callback(error, result);
    });
  },

  getAllPayments: function(callback) {
    request.get({
      headers: this.HEADERS,
      url: HOST + API.paymentStatus,
    }, function(error, response, body){
      var result = JSON.parse(body);
      callback(error, result);
    });
  },

  getPaymentStatus: function(id, callback) {
    request.get({
      headers: this.HEADERS,
      url: HOST + API.paymentStatus + id + '/',
    }, function(error, response, body){
      var result = JSON.parse(body);
      callback(error, result);
    });
  },

  getRefundDetails: function(id, callback) {
    request.get({
      headers: this.HEADERS,
      url: HOST + API.refunds + id + '/',
    }, function(error, response, body){
      var result = JSON.parse(body);
      callback(error, result);
    });
  },

  PaymentData: function() {
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

      setWebhook: function(hook) {
        this.webhook = hook;
      },

      setRedirectUrl: function(redirectUrl) {
        this.redirect_url = redirectUrl;
      }
    });
  }
};