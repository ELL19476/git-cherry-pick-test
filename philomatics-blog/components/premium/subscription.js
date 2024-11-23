const analyticsHelper = require('../analyticsHelper');
const payment = require('./payment-processor')

class Subscription {
  async upgradeSubscription(userId, plan) {
    try {
        await payment.handlePayment(userId, plan);
        await analyticsHelper.trackCustomEvent('subscription_upgraded', {
            userId,
            plan,
            amount: plan.price
        });

        return { success: true };
    } catch (error) {
        console.error('Failed to upgrade subscription:', error);
        throw error;
    }
  }
}

module.exports = new Subscription();