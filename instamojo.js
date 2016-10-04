var request = require('request');

var HOSTS = {
  'production' : "https://www.instamojo.com/api/1.1/",
  'test'       : "https://test.instamojo.com/api/1.1/"
};

var API = {
  'createPayment' : 'payment-requests/',
  'links'         : 'links/',
  'paymentStatus' : 'payment-requests/',
  'refunds'       : 'refunds/'
};

module.exports = {
  HEADERS: {
    'X-Api-Key'    : "YOUR-API-KEY",
    'X-Auth-Token' : "YOUR-AUTH-TOKEN"
  },

  CURRENT_HOST : 'production',

  isSandboxMode : function(isSandbox) {
    if (isSandbox) {
      this.CURRENT_HOST = 'test';
    } else {
      this.CURRENT_HOST = 'production';
    }
  },

  setKeys: function(apiKey, authKey) {
    this.HEADERS['X-Api-Key']  = apiKey;
    this.HEADERS['X-Auth-Token'] = authKey;
  },

  createPayment: function(data, callback) {
    request.post({
      headers : this.HEADERS,
      url     : HOSTS[this.CURRENT_HOST] + API.createPayment,
      form    : data
    }, function(error, response, body){
      var result = body;
      callback(error, result);
    });
  },

  seeAllLinks: function(callback) {
    request.get({
      headers : this.HEADERS,
      url     : HOSTS[this.CURRENT_HOST] + API.links
    }, function(error, response, body){
      var result = JSON.parse(body);
      callback(error, result);
    });
  },

  getAllPaymentRequests: function(callback) {
    request.get({
      headers : this.HEADERS,
      url     : HOSTS[this.CURRENT_HOST] + API.paymentStatus
    }, function(error, response, body){
      var result = JSON.parse(body);
      callback(error, result);
    });
  },

  getPaymentRequestStatus: function(id, callback) {
    request.get({
      headers : this.HEADERS,
      url     : HOSTS[this.CURRENT_HOST] + API.paymentStatus + id + '/'
    }, function(error, response, body){
      var result = JSON.parse(body);
      callback(error, result);
    });
  },

  getPaymentDetails: function(payment_request_id, payment_id, callback) {
    request.get({
      headers : this.HEADERS,
      url     : HOSTS[this.CURRENT_HOST] + API.paymentStatus + payment_request_id + '/' + payment_id + '/'
    }, function(error, response, body){
      var result = JSON.parse(body);
      callback(error, result);
    });
  },

  createRefund: function(refundRequest, callback) {
    request.post({
      headers : this.HEADERS,
      url     : HOSTS[this.CURRENT_HOST] + API.refunds + '/',
      form    : refundRequest
    }, function(error, response, body){
      var result = JSON.parse(body);
      callback(error, result);
    });
  },

  getAllRefunds: function(callback) {
    request.get({
      headers: this.HEADERS,
      url: HOSTS[this.CURRENT_HOST] + API.refunds
    }, function(error, response, body){
      var result = JSON.parse(body);
      callback(error, result);
    });
  },

  getRefundDetails: function(id, callback) {
    request.get({
      headers: this.HEADERS,
      url: HOSTS[this.CURRENT_HOST] + API.refunds + id + '/'
    }, function(error, response, body){
      var result = JSON.parse(body);
      callback(error, result);
    });
  },

  PaymentData: function() {
    return ({
      'purpose'                 : '', // required
      'amount'                  : 0,  // required
      'currency'                : 'INR',
      'buyer_name'              : '',
      'email'                   : '',
      'phone'                   : null,
      'send_email'              : '',
      'send_sms'                : '',
      'allow_repeated_payments' : '',
      'webhook'                 : '',
      'redirect_url'            : '',

      setWebhook: function(hook) {
        this.webhook = hook;
      },

      setRedirectUrl: function(redirectUrl) {
        this.redirect_url = redirectUrl;
      }
    });
  },

  RefundRequest: function() {
    return ({
      'payment_id'    : '',
      'type'          : '',  // Available : ['RFD', 'TNR', 'QFL', 'QNR', 'EWN', 'TAN', 'PTH']
      'body'          : '',

      setRefundAmount: function(refundAmount) {
        this.refund_amount = refundAmount;
      }
    });
  }
};