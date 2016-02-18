# Instamojo NodeJs Wrapper
A NodeJs wrapper for Instamojo APIs

```
npm install instamojo-nodejs
```

### Include and set keys
```javascript
var Insta = require('instamojo-nodejs');
Insta.setKeys(API_KEY, AUTH_KEY);
```

### Create new payment request
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
```


### <a name="payment_data"></a>Additional Payment Data
```javascript
data.currency = 'INR';
data.buyer_name = '<buyer name>';
data.email = '<buyer email>';
data.phone = 1234567890;
data.send_sms = 'False';
data.send_email = 'False';
data.allow_repeated_payments = 'False';
data.webhook = 'Your endpoint to capture POST data from a payment';
data.redirect_url = 'Your endpoint where instamojo redirects user to after payment';
```
