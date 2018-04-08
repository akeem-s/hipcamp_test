Hi! This is my Hipcamp FrontEnd Test submission.

A few things -
* npm install to build node_modules
* npm start to start the app
* npm test to run the test suite
* I moved camp_features.js to the src/assets folder, and changed it from a variable to a constant and exported it. I did this to make it easier to write a test suite. I was having a hard time referencing the window object in tests, and this made it much easier. When my CampsiteContainer's componentDidMount method runs, it sets the state from src/assets/camp_features.js Adding or removing features from camp_features.js will automatically update the DOM when the page is reloaded.
* I created a functional component instead of a ul/li structure. I hope thats ok. It just seemed much more like production quality code to me.  
* I wrote a basic test suite. All my tests are passing, but I'm getting a warning about a unique key prop when running the tests. This error isn't present when I run the app. I didn't have time to resolve it before submitting, but normally wouldn't leave that sort of thing in the code.
