sudo apt-get install npm
sudo npm install phonegap 
apt-get apt-get install nodejs-legacy

download sdk at http://developer.android.com/intl/es/sdk/index.html#Other 

extract the zip 

sudo mv android-sdk-linux /usr/local -R

agregar al basrc y al del sudo 

export PATH=$PATH:/usr/local/android-sdk-linux/
export PATH=$PATH:/usr/local/android-sdk-linux/add-ons
export PATH=$PATH:/usr/local/android-sdk-linux/platform-tools
export PATH=$PATH:/usr/local/android-sdk-linux/tools

source  ~/.bashrc

sudo chmod +x /usr/local/android-sdk-linux/ /usr/local/android-sdk-linux/platform-tools /usr/local/android-sdk-linux/tools 

#intall android libs

sudo android

#en el menu instalar lo necesario, desde la versión 4.3 son aproximadamente 4GB  de espacio para aquellos que tienen ssd de 120


