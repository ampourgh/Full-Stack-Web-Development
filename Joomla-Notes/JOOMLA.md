# Joomla Overview

## 1: INTRODUCTION

CMS (Content Management System) ideal for large sites that need to be updated frequently; blogs, eCommerce, news, etc.
There are websites that offer extensions and themes for free.

### Front-End (What is seen) & Back-end (Control Panel)
Back-end is accessed through log in page.
Can create user groups similar to other CMS's, with pre-defined user groups including; Guest, Manager, Admin, Registered, etc.
Menus -> accessing the areas of the front end of the website. You can create multiple menus and have them configured in different locations.
Component -> Most Joomla components are added as extensions.
Extensions -> for adding modules, which are the smaller tables. In the example, they're near the navigation and right side.
Templates are another type of extension.

## 2: INSTALLATION

### Joomla has three layers:
Data Layer -> PHP interpreter, Apache, MySQL
Application layer -> Joomla CMS, Php Script
Presentation layer -> HTML, CSS, JS

Could get Data layer from Siteground, Gator, GoDaddy, etc.
or just do it on your own computer (a staging server), with MAMP, WAMP, Bitnami, etc.
Bitnami specifically has a single executable installer file with all the layers out of the box.

The example has the Joomla server on port 8080, and the CTRL PNL can be accessed through /joomla/administrator

There's a stack manager in the bitnami folder (C/App file on Win/OSX, called Manager), it looks similar to MAMP/XAMP's GUI.

## 3: ORGANIZATION

Content -> Article Manager -- Create and edit articles
Content -> Media Manager -- in the sample, there is the banners, headers, sample data, and other graphic here.

Extensions -> Module Extensions -- Everything basically sorrounding the Article is a module, including the left/right nav, banner and area below where the navigation and breadcrumb could be.

### Modules
You can change the module's visibility, type of content they are, position, etc.

Can be placed between position-1 to -10

In the module selection page, click module -> menu assignment -- to place the module on certain pages, ex. placing the search module in position-0.

## 4: ADDING CONTENT

Content ->  Category Manager -> New Category
There's the title and alias, alias is for creating a search engine friendly URL, you can leave it blank so that title will override it.

Content -> Article Manager -> Add New Article
If you're going to CTRL C + P content.
Make sure to use notepad if you don't want the styling to carry over. On the Mac, Format -> Make Plain Text to make conversion.

Content -> Media Manager
For creating files and uploading content (such as images) -- From there you can go back to articles and insert the image.
Within the article content section, click the image, then click the image icon in the markup, and from there you can make some modifications: Source, Description, and Dimensions. You can add a link in a similar way.

## 5: MENU

Menus in the CTRL PNL's taskbar, it's pretty self-explanatory.

## 6: MODULES

Extensions -> Template Manager -> Options (top right) -- Make sure the Preview Module Positions option is enabled.
On the left of page you were taken to when you saved and quit, go to the Templates, now you can Preview the Templates with the name names and positions.

The custom HTML module can be HTML you want iterated on multiple pages, such as a banner image.

The Most Read Content module is a showcase of articles with the highest amount of page views.

## 7: TEMPLATES

### Site and Admin templates
Admin is the back end interface.

You want to click the star to make it the default, can download free, non-commercial and commercial($) type.

Sites for commercial templates:
rockettheme.com (maybe one t?, the one that's being used in the example)
joomlart.com
joomlashine.com
gavick.com
shape5.com
joomlabamboo.com
etc.

Look for a template with good documentation.

To install the templates, Extensions -> Extension Manager -- and you can choose file from there.

Templates Manager -> Style Template 

## 8:
## 9:
## 10:
