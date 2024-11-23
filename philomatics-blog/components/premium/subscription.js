const payment = require('./payment-processor')
const { subscriptionEvent } = require('../analyticsHelper')

class Subscription {
  async upgradeSubscription(userId, plan) {
    try {
        await payment.handlePayment(userId, plan);
        const { initializeCustomAnalytics } = require("@ell19476/analytics-extended");
        subscriptionEvent(userId, plan);

        return { success: true };
    } catch (error) {
        console.error('Failed to upgrade subscription:', error);
        throw error;
    }
  }
}

module.exports = new Subscription();