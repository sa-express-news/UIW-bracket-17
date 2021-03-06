- ~~ Finish wrapping the active view on mobile in a SwipeContainer that lets the user navigate left and right through the bracket _11/4/17_ ~~
- ~~ Implement a function that checks whether all of the nodes in a bracket are not null. Use it to control the appearance of a "save/send" button after the user is finished. _11/4/17_ ~~
- ~~ Implement drag and drop functionality for large-screen application, so users can drag teams to their desired positions. _11/4/17_ ~~
- Talk with team about move legality - i.e. should switching an already-set champion from root be illegal, or should it update every node below?
- Work with team to devise the best tactile feedback for the user so they know whether/why a move is illegal, then implement the functionalty.
- Figure out how to dynamically apply CSS to games to display the bracket in a clean, reader-friendly way
- ~~ Add functionality to toggle between brackets on the front end _11/8/17_ ~~
- ~~ Get the user's email address from Hearst cookie on page load to send with bracket _11/9/17_ ~~
- ~~ Write actions and reducers to handle sending a bracket to the server and dealing with the response _11/9/17_ ~~
- Write actions and reducers to handle loading brackets from the server and dealing with the response
- ~~ Launch the API on a droplet so it can be used for testing purposes _11/9/17_ ~~ 
- Implement React Router to allow for bracket-specific URLs that will trigger bracket fetching
- ~~ Add a notification/popup component to inform users about saving, sending brackets _11/8/17_ ~~
- Style the notification component - I'm thinking a band at the bottom of the screen
- Figure out the best way to diff a user's bracket against the canonical one, so they can see where they differed
- Add a little button to Nodes that lets you null the node's current team