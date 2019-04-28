Learning Drupal 8

- Look into how to using Drupal 8 with MAMP; currently PHPMyAdmin does not work

**Directory**: some of the directories will be changed when doing a security update
- Core : where core code of Drupal is being used; do not edit this dir
- Vendor : where third party code can be found
- Module : you download these to add to your CMS
- Profile : contributed by Drupal community with specific kinds of config (i.e. - shopping cart)
- Themes : as name suggests
- Sites : where all the site content is
  - default > files : where the code is stored; including the css, js, php, icons, etc.
  - default > settings.php : has a lot of useful config information, at the bottom is the configuration for accessing the database.
  - default > config_<hash_value> : where all the configuration information is sent to

**Articles**

Out of the box:
  - Article: Title - Body - Tags - Image - Alt-text
  - Basic Page: creates a tab

Save as unpublished will have content in pink once you're previewing. If you look at it from Mozilla, you will get an access denied.

You can set up 403 & 404; put in custom url.
