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
