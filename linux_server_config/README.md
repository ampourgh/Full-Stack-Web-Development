Using Ubuntu-ampourgh Ubuntu server, located: Ohio, Zone A (us-east-2a)

Firewall TCP and in-browser port changed to 2200.

To Change the SSH Port from a Linux Server
* sudo su -
* vi /etc/ssh/sshd_config
* locate this line: Port 2200
* Restart the sshd service by running the following command: service sshd restart

VIM cookbook:
* 'i' to add text
* ':' followed by 'wq' to save and quit

### To SSH from Git to Amazon Lightsail
```
ssh ubuntu@18.216.162.202 -p 2200 -i LightsailPrivateKey.pem
```

### To SSH as the grader
```
ssh grader@18.216.162.202 -p 2200 -i LightsailPrivateKey.pem
```
Password is grader.

Sudo UFW (Ubuntu Firewall) is currenlt active, and allows for SSH port 2200, HTTP/www port 80 and  NTP port 123. To check the status and active ports on the server, use the command 'sudo ufw status'.

For enabling the site on Apache2, the command 'sudo a2ensite 000-default.conf' was used, which contains the route to /var/www/html that port 80 is listening to.

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
// from /var/www/FlaskApp/FlaskApp/__init__.py
// import app = Flask(__name__)
from FlaskApp import app as application
// requires quotation marks for multlined private key
application.secret_key = """<insert LightsailPrivateKey here>"""
```
