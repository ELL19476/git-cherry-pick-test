class Payment {
  async handlePayment(userId, plan) {
    new Promise(function (resolve, reject) {
        // Payment logic goes here.
        // For now, mock success
        resolve()
    });
  }
}

module.exports = new Payment();