const { initializeCustomAnalytics } = require("@ell19476/analytics-extended")
const analytics = initializeCustomAnalytics();

/* PAGE VIEW TRACKING */
const currentlyViewedPagesStack = []

function startPageView(eventName, properties = {}) {
    currentlyViewedPagesStack.push({name: eventName, properties: {
        timestamp: new Date(),
        ...properties
    }});
}
function endCurrentPageViews() {
    while(endLastPageView()) {  }
}
function endLastPageView() {
    const view = currentlyViewedPagesStack.pop();
    if(view) {
        analytics.pageView(view.name, view.properties);
        return true;
    }
    return false;
}

/* EVENT TRACKING */
function loginEvent(username, metadata={}) {
    analytics.track("login", {
        user: username,
        ...metadata
    })
}

module.exports = {
    startPageView,
    endCurrentPageViews,
    loginEvent
}