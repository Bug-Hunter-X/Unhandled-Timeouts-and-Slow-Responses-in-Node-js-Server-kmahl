# Node.js Server Timeout Bug

This repository demonstrates a common issue in Node.js servers: unhandled timeouts and slow responses. The server simulates a 5-second delay before responding.  Without proper error handling and timeout management, this can lead to frustrating user experiences and potentially unstable applications.

## Bug Description

The `bug.js` file contains a simple Express.js server.  The `/` route introduces a 5-second delay before sending a response.  This delay can cause problems if clients have short timeout settings.  Furthermore, any errors during the delay won't be handled gracefully.

## Solution

The `bugSolution.js` file demonstrates a more robust solution. It addresses the timeout issue by setting an appropriate timeout for the response and providing more comprehensive error handling.