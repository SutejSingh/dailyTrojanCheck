# Daily Trojan Check

University of Southern California has implemented a system for covid management and prevention called the Trojan Check. The students are required to answer a questionare in the morning about their health and symptoms. The website provides a QR code in the end that you must use to enter the campus. At each entrance there is checkpoint that scans for the QR code. Therefore, to enter the university it is necessary that you answer the questionare.

This is the code for automating that process. This code allows the use to setup a scheduled `cronjob` that executes the script which answers the questionare on its own. Attached along is also a Mac Automator file that sends the email of the screenshot of QR code to an email address that you specify.

## Warning!
The intention is to save the time answering the questionare in the morning. Please use the software carefully. Do not go to campus if feeling sick. Keep the "on-campus life" safe for us all and use the software mindfully. I do not support lying abou your symptoms using this software.

## Installation
1. You need to install a javascript library called nightwatch.js 
  
      ```
      npm install nightwatch
      ```

2. Install chrome is not already installed from [here](https://www.google.com/chrome/) 

3. Now install the chrome webdriver 
    
      ```
      npm install chromedriver --save-dev
      ```
## Usage
`covid_v3.js` is the file that should be run.

1. Search for the `nightwatch.conf.js` file and change its code with the one provided.
3. Copy the files to a desired location.
4. Open the `covid_v3.js` file and change the capitalized text to what you desire. You must enter your username and password and change the location of where you want the screenshots to be stored. In my case its at `/Desktop/LMAO/reports`
    
    **It is safe to store you username and password in that fie ONLY if you do not upload the file on github or anywhere online. Also keep the file safe from other people's eyes.**
6. In terminal type the following code to schedule it run everyday at. 12:05AM. For this scheduled code to run it is ***important that your laptop must be wake***. You can schedule your macBook to wake and sleep in the "Battery" setting in preferences.

    `crontab -e`
    1. This will open the vim editor. (See if your default is nano or vim, but most likely would be vim)
    2. For the vim editor, press the "i" key once to enter text
    3. Enter the following code
    
           
            5 0 * * * npx nightwatch YOUR_FILE_PATH_TO_covid_v3.js
            
       
       Enter your path to the file. Example:
       
           
           5 0 * * * npx nightwatch Desktop/LMAO/covid_v3.js
5. Open the attached Automator file

    1. Click on add in the "Get Specified Finder Items" section and naviagte to the folder you are storing your screenshots
    2. Enter your email in the "To: " section in "New Mail Message Section" 
      ![Screen Shot 2021-09-09 at 11 58 01 PM](https://user-images.githubusercontent.com/40639516/132812996-59407841-b2c9-499e-bf16-0a8cb80477ca.png)

6. Now open apple calendar app and set a recurring event on weekdays at 12:15AM or whichever time you prefer. In the "alert" section select "custom" and then select "open file". Then click on the "calendar" drop down and slelect the automator file.

      ![Screen Shot 2021-09-10 at 12 07 06 AM](https://user-images.githubusercontent.com/40639516/132816049-f9610e0f-86b3-4fc6-9f3b-96da2de8d546.png)

#### You're all set. FIGHT ON!
     
