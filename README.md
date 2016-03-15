# Instamojo NodeJs Wrapper 
A NodeJs wrapper for [Instamojo APIs](https://www.instamojo.com/developers/rest).

```
npm install instamojo-nodejs
```

### Include and set keys
```javascript
var Insta = require('instamojo-nodejs');
Insta.setKeys(API_KEY, AUTH_KEY);
```

### APIs Available
* [Create a payment request](#create_payment)
* [See all payment links](#see_payment_links)
* [Get all payments](#get_all_payments)
* [See payment details](#get_payment_details)
* [Initiate refund](#create_refund)
* [Get refund details](#get_refund_details)

### <a name="create_payment"></a>Create new payment request
```javascript
var data = new Insta.PaymentData();

data.purpose = "Test";            // REQUIRED
data.amount = 9;                  // REQUIRED
data.setRedirectUrl(REDIRECT_URL);

Insta.createPayment(data, function(error, response) {
  if (error) {
    // some error
  } else {
    // Payment redirection link at response.payment_request.longurl
    console.log(response);
  }
});
```
You can set additional data parameters. [See here](#payment_data)

### <a name="see_payment_links"></a>See all payment links
```javascript
Insta.seeAllLinks(function(error, response) {
  if (error) {
    // Some error
  } else {
    console.log(response);
  }
});
```

### <a name="get_all_payments"></a>Get all payments
```javascript
Insta.getAllPayments(function(error, response) {
  if (error) {
    // Some error
  } else {
    console.log(response);
  }
});
```

### <a name="get_payment_details"></a>Get payment status for a particular payment id
```javascript
Insta.getPaymentStatus("PAYMENT-ID", function(error, response) {
  if (error) {
    // Some error
  } else {
    console.log(response);
  }
});
```
### <a name="create_refund"></a>Initiate refund
```javascript
var refund = new Insta.RefundRequest();
refund.payment_id = '';     // This is the payment_id, NOT payment_request_id
refund.type       = '';     // Available : ['RFD', 'TNR', 'QFL', 'QNR', 'EWN', 'TAN', 'PTH']
refund.body       = '';
refund.setRefundAmount(8);  // Optional, if you want to refund partial amount
Insta.createRefund(refund, function(error, response) {
  console.log(response);
});
```
Details on refund types [here](https://www.instamojo.com/developers/rest/#toc-refunds).


### <a name="get_refund_details"></a>Get refund status for a refund id
```javascript
Insta.getRefundDetails("REFUND-ID", function(error, response) {
  if (error) {
    // Some error
  } else {
    // Refund status at response.refund.status
    console.log(response);
  }
});
```


#### <a name="payment_data"></a>Additional Payment Data
```javascript
data.currency                = 'INR';
data.buyer_name              = '<buyer name>';
data.email                   = '<buyer email>';
data.phone                   = 1234567890;
data.send_sms                = 'False';
data.send_email              = 'False';
data.allow_repeated_payments = 'False';
data.webhook                 = 'Your endpoint to capture POST data from a payment';
data.redirect_url            = 'Your endpoint where instamojo redirects user to after payment';
```
---
![npm version](https://badge.fury.io/js/instamojo-nodejs.svg)
---
### Submit issues
You can raise an issue in this repo or mail me at sidhant@hashexclude.com
