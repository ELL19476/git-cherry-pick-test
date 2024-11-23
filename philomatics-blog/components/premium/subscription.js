const payment = require('./payment-processor')

class Subscription {
  async upgradeSubscription(userId, plan) {
    try {
        await payment.handlePayment(userId, plan);
        const { initializeCustomAnalytics } = require("@ell19476/analytics-extended")
        await initializeCustomAnalytics().track('subscription_upgraded', {
            user: userId,
            plan: plan,
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