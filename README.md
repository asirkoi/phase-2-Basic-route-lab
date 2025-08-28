# phase-2-Basic-route-lab
pages 
1. Home - Just displays Home page in an h1
2. Movie- information about a specific movie in a h1 tag the movie time in p tag and genres in span tag
3. Directors-h1 directors page, article for each director,h2 directors name, ul for list of movies
4. Actors- h1 Actors page, article for each actor, h2 name of actor and ul to be in list format
5. Error page- h1 oop s something went wrong


App.jsx- central router set up route.js- stores all the routes Be sure to install react router DOM (npm install react react-dom react-router-dom)

In your main.jsx is where you set up your routing (createBrowserRouter to define all routes) Wraps everything in so routing works.

index: true makes Home load by default at /.

In the APP.JSX- Purpose: Layout & navigation.

Key points:

Renders a

with s for navigation.
Uses to display the active page.

Acts as the main layout wrapper for all child page

main.jsx = router setup + entry point App.jsx = UI layout + navigation shell