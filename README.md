# Instamojo NodeJs Wrapper 
A node wrapper library for [Instamojo APIs](https://www.instamojo.com/developers/rest).

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
* [Get all payments](#get_all_payment_requests)
* [See payment request details](#get_payment_request_details)
* [See payment details](#get_payment_details)
* [Initiate refund](#create_refund)
* [Get refund details](#get_refund_details)
* [Get all refunds](#get_all_refunds)
* [Set sanbox mode](#set_sandbox_mode)

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

### <a name="get_all_payment_requests"></a>Get all payment requests
```javascript
Insta.getAllPaymentRequests(function(error, response) {
  if (error) {
    // Some error
  } else {
    console.log(response);
  }
});
```

### <a name="get_payment_request_details"></a>Get payment status for a particular payment request id
```javascript
Insta.getPaymentRequestStatus("PAYMENT-REQUEST-ID", function(error, response) {
  if (error) {
    // Some error
  } else {
    console.log(response);
  }
});
```

### <a name="get_payment_details"></a>Get payment details for a particular payment id and payment request id
```javascript
Insta.getPaymentDetails("PAYMENT-REQUEST-ID", "PAYMENT-ID", function(error, response) {
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
refund.body       = '';     // Reason for refund
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

### <a name="get_all_refunds"></a>Get all refunds
```javascript
Insta.getAllRefunds(function(error, response) {
  if (error) {
    // Some error
  } else {
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

#### <a name="set_sandbox_mode"></a>Set sandbox mode
Add this line after setting your keys
```javascript
Insta.isSandboxMode(true);
```
---

### Changes in v0.0.4
- [Added sandbox mode](#set_sandbox_mode)


### Changes in v0.0.3
- [Added get all refunds API](#get_all_refunds)
- [Added payment details API](#get_payment_details)
- [Updated payment request details API](#get_payment_request_details)
- [Updated get all payment requests API](#get_all_payment_requests)

---
### Submit issues
You can raise an issue in this repo or mail me at sidhant@hashexclude.com
