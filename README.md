# Instamojo NodeJs Wrapper
A NodeJs wrapper for Instamojo APIs

### Configure your keys in instamojo.js
```javascript
var HEADERS = {
  'X-Api-Key'    : "YOUR-API-KEY",
  'X-Auth-Token' : "YOUR-AUTH-TOKEN",
}
```

### Include in your project
```javascript
var Insta = require('path/to/instamojo.js');
```

### Create new payment request
```javascript
var data = new Insta.PaymentData();

data.purpose = "Test";            // REQUIRED
data.amount = 9;                  // REQUIRED
data.currency = 'INR';
data.buyer_name = '<buyer name>';
data.email = '<buyer email>';
data.phone = 1234567890;
data.send_sms = 'False';
data.send_email = 'False';
data.allow_repeated_payments = 'False';
data.webhook = 'Your endpoint to capture POST data from a payment';
data.redirect_url = 'Your endpoint where instamojo redirects user to after payment';

Insta.createPayment(data, function(error, response) {
  if (error) {
    // some error
  } else {
    // Payment redirection link at response.payment_request.longurl
    console.log(response);
  }
});
```

### See all payment links
```javascript
Insta.seeAllLinks(function(error, response) {
  if (error) {
    // Some error
  } else {
    console.log(response);
  }
});
```

### Get all payments
```javascript
Insta.getAllPayments(function(error, response) {
  if (error) {
    // Some error
  } else {
    console.log(response);
  }
});
```

### Get payment status for a particular payment id
```javascript
Insta.getPaymentStatus("PAYMENT-ID", function(error, response) {
  if (error) {
    // Some error
  } else {
    console.log(response);
  }
});
```
### Get refund status for a refund id
```javascript
Insta.getRefundDetails("REFUND-ID", function(error, response) {
  if (error) {
    // Some error
  } else {
    // Refund status at response.refund.status
    console.log(response);
  }
});
