

Pages Overview

1) Venue Page 
This is the main listing page that displays all sports venues in a responsive grid format.

Features:

* Fetches venue data from `VenueContext`.
* Displays venue name, image, rating, distance, sports, and price info.
* Includes a **"Add to Favorite"** button for each venue.
* Users can navigate to the **Venue Details** page by clicking on a venue.
* Includes a button to view all favorite venues.

2) Favorites Page
This page displays only the venues marked as favorite by the user.

Features:

* Pulls the favorites list from `VenueContext`.
* Allows users to **remove venues from favorites**.
* Shows the same venue card design as on the Venue page.
* Helps users quickly find and manage their preferred venues.

3) Venue Details Page 
This is a dynamic page that shows detailed information about a specific venue.

Features:

* Uses `useParams()` from React Router to get the venue `id` from the URL.
* Finds the selected venue from `VenueContext`.
* Displays:

  * Venue image
  * Name, address, distance, and rating
  * List of available sports and their prices
* If the venue is not found, displays an error message.
