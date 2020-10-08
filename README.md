Hello, a website specifically for accumulating all known information for 42 Silicon Valley, located in Fremont, California.

My reason for creating this project was that there wasn't much known about 42 SV, so I had to spend hours and hours looking through the internet to find any relevant information. Hopefully I've made it just a little bit easier for anyone who might come across this website.

It's a work in progress.

Relevant Kanban: https://github.com/PocketPiggy/42-Silicon-Valley-Information-Trove/projects


### v0.2.0

This branch includes:

##### *   All components fully functional!

*   Scrolling side bar
    - Highlights current actively viewed/focused on item in side navigation
    - Currently hardcoded, will add mapping functions
*   Contact form
    - Using emailjs currently, good for use case; not expecting many if any emails
    - Fast to set up & free
    - All secrets hidden currently, though from further research, exposing userID only
      was apparently safe
    - Works in local & production/deployment
*   Loading component
    - Currently works well but not polished/customized.
    - When changing routes, comes up but currently rendered only.
    - Focusing on making it a modal or adding minimum animation play time.
*   Cards
    - Now accept JSON data instead of javascript object/array.
    - Current functional flow: Page -> SelectCard -> Card

*   Current focus: Readding all content & coverting old JS files into JSON.

____

Past builds

### v0.1.1

This branch includes:

*   Fully functional navigation bar for mobile & desktop
*   Fully functional footer with links working
*   All currently planned pages have placeholders made
*   All routes for pages functional
