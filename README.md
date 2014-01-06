## Software Engineer - Crawling / Frontend Code Test ##

[ZipfWorks](http://www.zipfworks.com/) is currently seeking a software engineer to help with our frontend 
development and web crawlers. This repository contains code test instructions for our
engineering candidates. More information about our company and the position
are available at our [Stack Overflow careers page](http://careers.stackoverflow.com/jobs/42627/software-engineer-javascript-ember-js-css-zipfworks?a=46NLGHC3eg).

### Introduction ###

We are in the process of building the [StyleSpotter](http://www.stylespotter.com/) iOS and
web apps, which rely on web crawlers to populate our API's product database with
fashion-related products. We plan to have crawlers implemented for a large number of
stores and eventually crawl other types of products for apps that we plan to build in the coming
months.

### Requirements ###

Your mission is to write a program that pulls scarves from the "Free People" website: http://www.freepeople.com/scarves-3/ 
(there are about 13 scarves total).

Your program should download and store the **name, photo, price, url, available colors, and description** for
each of these products. _Note: You will need to get the description from the details page for each product._

Once you've pulled in the information for each product, create a simple website to display all the
information you've collected. Your web interface should allow products to be sorted by at least price and name.

### Submitting Your Code ###

1. Clone this [GitHub repository](https://github.com/zipfworks/code-test-crawling).
2. Add all relevant project files and a README with the steps necessary for us to run your code.
3. Send a link to a new repository or a zip file of the completed test to engineering@zipfworks.com.

### Notes ###

* You're welcome to use any language(s) and/or framework(s) of your choosing for both the scraper and website.
  * _We're currently using a web scraping framework for Python called [Scrapy](http://scrapy.org/) and a
    combination of Ember.js, Bootstrap, and LESS for our web frontend._
* The crawled data should be stored to disk, you can choose any format you want (JSON file, SQL/NoSQL database, flat file, etc).
* If you have any questions, please feel free to email us at engineering@zipfworks.com.
