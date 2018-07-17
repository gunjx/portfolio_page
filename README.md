# README

A single-page responsive portfolio website. The website was created as a learning exercise of career foundry's web development online course. The course teaches hands-on web development skills that are relevant in the job market. More information at: https://careerfoundry.com/en/course/become-a-web-developer/course-plan.

A hosted work-in-progress portfolio of myself can be found here:
http://aspannagel.bitballoon.com/.

## Features

The website is designed to show yourself and your work to the public.
Features include:
* Single-page website with smooth scrolling
* Responsive, i.e. fits mobile and desktop screens.
* Contains work, about, FAQ, contact section.
* Dynamic display of work examples
* Embedded CV
* Contact form (needs to be connected to an email backend service, e.g. Formspree and SendGrid)
* Integrate Youtube videos and interactive Google Maps via APIs
* Effects like transitions, hovers, tooltips, smooth scrolling, carousel, accordion and parallax.
* Fixed, responsive navigation bar
* Footer with interactive twitter and facebook links

## Installation & Usage

* Modify index.html to your needs, e.g. edit headlines, texts and personal information in all sections and embed your Youtube video.
* Change your Google Maps location under js/scripts.js, var myLatLng = {lat: 52.527120, lng: 13.412182}; with lat and lng being the coordinates of your location.
* Add images in img folder and link them in index.html.
* Change your work samples under js/work.js.
* Add your CV in assets folder and link it in index.html.
* Link contact form to an email backend service such as Formspree, more information at: https://formspree.io/.
* Adjust twitter and facebook links.
* Adjust colors and styling under css/styles.css.

# Deployment

The static website can be deployed for free using services such as github pages (https://pages.github.com/) or bitballoon (http://www.bitballoon.com/). Alternatively, you can deploy your website using a custom domain with shared hosting or one of many cloud platforms (Amazon S3, Microsoft Azure, Google Cloud).

## Learning Goal
This project helped me getting familiar with:
* Standard web developer workflow, including Chrome's Developer Tools
* HTML5 and CSS3 with semantic tags
* CSS layout and box model
* Font stacks and color palette
* Adjusting images
* Responsive web design
* Bootstrap framework and plugins
* Basic JavaScript
* jQuery library
* Manipulating DOM elements
* iframes
* Forms and validation
* Using APIs and working with documentations
