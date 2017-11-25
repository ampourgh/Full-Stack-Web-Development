#### Author: ampourgh | Version: 2.0.0 | Last Modified: 9/17/2017

# Project 5 — flaskapp-server Ubuntu server
### located: Ohio, Zone A (us-east-2a)

###Table of Contents
#### I. Steps taken to Deploy Webpage
#### II. Lightsail server & Information

## Steps taken to deploy webpage:

### Registering for an account at Lightsail
* Head to lightsail.aws.amazon.com
* Click to create an instance, choose the choice for a Linux platform, with an OS only of Ubuntu.
* Create and download the secret key for logging onto the server, transferring content, and for connecting websites. The name of the secret key in this project is called 'LightsailSecretKey.pem'.
* Choose a payment plan and give your instance a name.

### To Change the SSH Port from a Linux Server
* Connect to instances' browser terminal
* Use command 'sudo su -' to change to the root user.
* vi /etc/ssh/sshd_config to view the SSH configuration, and click 'i' to be able to modify the page's information.
* locate the line 'Port 22' and change the port to 2200.
* Exit the browser terminal.
* Click to manage the instance and delete the SSH port, add custom ports 2200 and 123.

### Connecting remotely and copying files over to Apache2:
* First, I added the flaskapp.wsgi file in the folder where my app is, for convenience. Information on the contents of the .wsgi file can be lower later in this readme.
* Change directories to where your SecretKey.pem file is located.
* Use the command below to transfer the file over to your account's folder. The breakdown of this command includes the scp to copy the file, -i PrivateKey.pem to access as the user, -P 2200 to specify the port, and /c/path/to/folder/ to copy the desired folder. The last section includes your username@public.port.number:/folder/you/want/to/copy/the/files/to.
```
scp -i LightsailPrivateKey.pem -P 2200 -r /c/path/to/folder/ ubuntu@52.14.27.203:/home/ubuntu
```
* The following command is for logging into the page:
```
ssh ubuntu@52.14.27.203 -p 2200 -i LightsailPrivateKey.pem
```
* To install Apache2, the server needs to be up to date so that the www folder is created for storing the webpage's contents. After the Linux server is updated, install Apache2.
```
apt-get update
sudo apt-get install apache2
```
* Created a directory will house the FlaskApp in /www, move the webpage's folder there, followed by moving the .wsgi outside the webpage folder.
```
mkdir /var/www/FlaskApp
mv /home/ubuntu/FlaskApp /var/www/FlaskApp
mv ./flaskapp.wsig ../
```

### Installing wsgi and the virtual environment, and activating the virtual environment.

* Now use the command to install mod-wsgi-p3, the '-p3' extension added for Python 3+.  
```
sudo apt-get install libapache2-mod-wsgi-py3
```

* Go to Apache2's folder for seeing what sites are enabled for viewing on the ip. 
```
cd /etc/apache2/sites-enabled/
```

* If you see 000-default.conf enabled, or anything outside of FlaskApp.conf, use the following commands to switch what site port 80 is connected to.
```
sudo a2dissite 000-default.conf
sudo a2ensite FlaskApp.conf
service apache2 reload
sudo service apache2 restart
```

* Next, use the built in install command to install pip.
```
sudo apt-get install python-pip 
```

* Switch back to the Flask app folder to install and activate a virtual environment.
```
cd /var/www/FlaskApp/FlaskApp
apt-get install python3-venv
source venv/bin/activate 
```

* Install the following libraries/toolsets so that __init__.py can run with the imports.
```
pip install Flask SQLAlchemy psycopg2 requests oauth2client httplib2
```

* At the end pip will mention that the version it's running is not the latest version. Update 
```
>You are using pip version 8.1.1, however version 9.0.1 is available.
pip install --upgrade pip
```

* See if the webpage is served within the virtual environment.
```
python __init__.py
*Deactivate the virtual environment.
deactivate
```

## Lightsail server & Information

### Vim cookbook:
* View file in Vim: vi insert-filename
* Modify text: 'i' 
* Save and quit:':' followed by 'wq' 
* Quit without editing: ':q!'
* Scroll Faster: press and hold either shift or use the number while pressing the up/down arrow key pad.
Additional commands for Vim can be found [here](https://vim.rtorr.com).

### To SSH from Git to Amazon Lightsail
```
ssh ubuntu@52.14.27.203 -p 2200 -i LightsailPrivateKey.pem
```

### To SSH as the grader
```
ssh grader@52.14.27.203 -p 2200 -i LightsailPrivateKey.pem
```
Password is grader.

### Ubuntu Firewall ports

Sudo UFW (Ubuntu Firewall) is currently active, and allows for SSH port 2200, HTTP/www port 80 and  NTP port 123. To check the status and active ports on the server, use the command 'sudo ufw status'.

### Changing Webpages showing up on the IP address

After getting Apache2 installed, /etc/apache2/ has the folders related to putting the webpages on port 80. The folders include sites-available and sites enabled. Currently, there are two files available that boots up different pages. 000-default.conf connects the default ubuntu page, and FlaskApp.conf boots up the items catalog page.

In order to connect a site to a port, use the following command:
sudo a2ensite <insert virtual host file name>

To disconnect the site:
sudo a2dissite <insert virtual host file name>

After connecting or disconnecting, Apache2 will need to be reloaded in order to update the service:
sudo service apache2 reload

### Flask App's wsgi File

From the previously discussed FlaskApp.conf files, the WSGIScriptAlias is connected to 'flaskapp.wsgi'. This file gives the basic configuration to run the flask app. Below is the code for the modifiable sections of the wsgi that connects it between one app to another, along with the place for were Lightsail's secret key is inserted. 

```python
#!/usr/bin/python
import sys
import logging

logging.basicConfig(stream=sys.stderr)
sys.path.insert(0,"/var/www/FlaskApp/")

// from /var/www/FlaskApp/FlaskApp/__init__.py
// import app = Flask(__name__)
from FlaskApp import app as application
// requires quotation marks for multlined private key
application.secret_key = """<insert LightsailPrivateKey here>"""
```

For Python 2 or lower, According to Flask's doc: "This sets up the load paths according to the settings of the virtual environment."
```python
activate_this = '/var/www/FlaskApp/FlaskApp/venv/bin/activate_this.py'
exec(compile(open(activate_this, "rb").read(), activate_this, 'exec'), dict(__file__=activate_this))
```
