// Get the current URL
var currentUrl = window.location.href;

// Create a URL object
var url = new URL(currentUrl);

// Get the current query parameters
var queryParams = url.searchParams;

// Update or add a new query parameter
queryParams.set('paramName', 'paramValue');

// Update the query parameters in the URL
url.search = queryParams.toString();

// Get the updated URL
var updatedUrl = url.toString();

// Replace the current URL with the updated URL
window.history.replaceState(null, null, updatedUrl);
