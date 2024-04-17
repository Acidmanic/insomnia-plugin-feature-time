Feature Time Plugin
===================


What is Now+Seconds
----------

Now+Seconds is a template tag which will be replaced by linux format time value at the moment of sending the request. You can add a fixed amount of seconds the this time by changing the _Adding Seconds_ property. 




How to install
---------------

__Using Insomnia Hub:__ You can navigate to [Insomnia Plugin Hub Page](https://insomnia.rest/plugins) and search for Feature Time plugin, Open the details page and click __Install Plugin__ button. This throw an installation link which you can open with your insomnia on your desktop.


__Directly installing the zip file:__: You can [download](https://github.com/Acidmanic/insomnia-plugin-feature-time/archive/refs/heads/master.zip) project zip file from github. 
Then extract the content into a directory at your [insomnia's plugin's directory](https://docs.insomnia.rest/insomnia/introduction-to-plugins#plugin-file-location).


__Using Insomnia Application:__ You can Open your insomnia application, go to Preferences menu, open the plugins tab and enter the name Now+Seconds into text box, the click __Install Plugin__ button.


How to Use
------------

This plugin will add a template tag named: Now+Seconds. Inside your requests, you can use it like any other template tag. By clicking the template tag, you can edit the options:

 * Adding Seconds: This is the number of seconds that will be added to time instance. This value can be positive or negative.


  * TimeZone: This value will set the time zone for the template tag using the time difference in HH:mm format.


  