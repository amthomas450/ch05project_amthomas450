Performance:

Use efficient cache lifetimes - long cache lifetimes can speed up repeat visits to the webpage.

Optimize DOM size - keeping a compact DOM reduces style calculations and layout reflows, impacting page responsiveness.

Page didn't prevent back/forward cache restoration - many navigations are preformed by going back to a previous page, or forwards again.
The back/forward cache can speed up these return navigations.

Accessibility:

Input buttons have discernable text - adding discernable and accessible text to input buttons may help screen reader users understand the 
purpose of the input button.

Select elements have associated label elements - form elements without effective labels can create frustrating experiences for screen
reader users.

Background and foreground colors have a sufficient contrast ratio - low-contrast text is difficult or impossible for many users to read.

Best Practices:

Uses HTTPS - all sites should be protected with HTTPS, even ones that handle sensitive data. HTTPS prevents intruders from tampering with
or passively listening in on the communications between the application and the users.

Allows users to paste into input fields - preventing input pasting is a bad practice for the UX, and weakens security by blocking
password managers.

Avoids requesting the geolocation permission on page load - user are mistrustful of or confused by sites that request their location without context.

SEO:

Page isn't blocked from indexing - search engines are unable to include pages in search results if they don't have permission to crawl them.

Links have descriptive text - descriptive link text helps search engines understand the content.

Links are crawlable - search engines may use href attributes on links to crawl websites. 
