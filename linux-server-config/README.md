Using Ubuntu-ampourgh Ubuntu server, located: Ohio, Zone A (us-east-2a)

Firewall TCP and in-browser port changed to 2200.

To Change the SSH Port from a Linux Server
* sudo su -
* vi /etc/ssh/sshd_config
* locate this line: # Port 22, remove # and change numbers
* Restart the sshd service by running the following command: service sshd restart

VIM cookbook:
* 'i' to add text
* ':' followed by 'wq' to save and quit

### To SSH from Git to Amazon Lightsail
```
ssh ubuntu@18.216.162.202 -p 2200 -i LightsailPrivateKey.pem
```
