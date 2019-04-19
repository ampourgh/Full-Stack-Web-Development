# INTRO TO DRUPAL 8

What is Drupal?
* PHP, AJAX, JS powered CMS.
* Drupal is open source & flexible; it's a CMS & a web development platform.
* Dates of each update:
  * 2001: 1.0, 2.0, 3.0
  * 2002: 4.0
  * 2007: 5.0
  * 2008: 6.0
  * 2011: 7.0
  * 2015: 8.0
  * 2020: 9.0 (?)
* Add-ons are called Modules and themes.
* Mobile ready & strong for big projects.
* Runs 3% of the entire web & 15% of the top 10k websites; popular among government, nonprofits & enterprises.

**NOTE:** Tutorial suggests using Acquia, but Mac does not identify it as an App Store recognized vendor.

Ports in Acquia:
* Apache Server HTTP & HTTPS
* MySQL

In Cloud, there is a Dev, Stage & Prod.

Configure web URLs through HTAccess files (look up Configure clean URLs for more information on a dedicated server)

Every Drupal content item is a node.

Drupal Design Structure:
* Articles - body items
* Blocks - side nav items

Settings > Bartik - will take you to the color scheme, which uses hexadecimal code. There is a preview at the bottom of the section.

**Extend** has the modules.

**People** has list, permissions and roles for managing account types.

Every content item is called a node, and each node belongs to a single content type.

Text editor has basic, strict and full HTML. Strict has nothing, basic is very simple syntax.

There is a front-end editor as well.

## **Drupal 8 Search** (video - May 31, 2017)

It's a module which you add either by url or through an upload.

Search options: (checkmarks are what video checks on)
* Database Search √
* Database Search Defaults √
* Search API √
* Search API Taxonomy Term

From there you  click install.

Once installed:
Config > Search and Metadata > Search API

Need Apache Solr for anything bigger than a standard site.

Can then check on the type of data sources that you want to check on.

Structure > Add Veiw

Veiw name: set a name of your choice
Show: Default Content Index
Save & Edit.


There's a field choice that makes it so that you can go a little deeper (with what looks like boolean operators)

Can customize so that you can display different type of content with the search; not just the title. For instance, the tutorial checked to be able to see images.

## Google Site Search
https://www.drupal.org/project/gss
**updated 12 September 2017**

```
We discourage use this module, since Google decided to discontinue Google Site Search* as a paid service. The alternative is Google's ad-powered free custom search engine, which another module has support for: google_cse
```

## Google Custom Search Engine
https://www.drupal.org/project/google_cse
**updated 16 April 2019**

```
Current Branches
7.x-2.x and 8.x-2.x
These branches include the paid version of Google CSE, Site Search, which is currently being deprecated by Google and will be finally phased out by April 1, 2018. You should plan to phase out your use of Site Search and switch to the free version of Google CSE if you are to continue using this module.

The port of this module to from Drupal 7 to Drupal 8 has begun and is in active development. The current maintainers will try to keep as much of the functionality of the D7 module intact; however, some features will be left behind due to the fact the maintainers might not have complete enough info to properly port that feature. You can reference the planning issue here.

7.x-3.x and 8.x-3.x
These branches no longer depend on Drupal's core Search module. Because Drupal updates the internal search tables on cron, only using CSE can improve the performance of large sites with thousands of nodes. These branches also completely remove everything relating to paid Site Search and only include the free version of Google CSE. The current maintainers will work on keeping these branches up-to-date and actively developed starting with a 7.30 release. If you are just starting to use this module, please use these dev branches or related releases.
```

Note: the Google Search has Google's watermark/icon on it, compared to the regular search which is your standard input. 
