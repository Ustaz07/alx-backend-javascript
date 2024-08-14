// Create a WeakMap instance
export const weakMap = new WeakMap();

// Function to track API query counts
export function queryAPI(endpoint) {
  if (!endpoint || typeof endpoint !== 'object') {
    throw new Error('Invalid endpoint');
  }

  // Retrieve the current count for the endpoint
  const count = weakMap.get(endpoint) || 0;

  // Increment the count
  const newCount = count + 1;

  // Check if the count reaches the threshold
  if (newCount >= 5) {
    throw new Error('Endpoint load is high');
  }

  // Update the count in the WeakMap
  weakMap.set(endpoint, newCount);
}
