# bulaangularjs
This is my first independent AngularJS project, here I will work on services, providers, and directives
First, I have created Git hub account
second, I have created a new repository bkhan2015/bulaangularJS
Install git bash from https://git-scm.com/download/win
Install node.js from https://nodejs.org/en/download/
Install ATOM text editor which is free (https://atom.io/)
Go to Linux base terminal git bash
create file .gitignore in your project folder( doesn't have any extention) it will ignor to commit some hidden files
In git bash terminal, write the command $git init (To intialized the svn)
It will create folder .git ( which is hidden file)
Install bower through npm command in git bash ($ npm install -g bower) - Automatic file dependency downloder - it's dpwnload JQuery, AngularJS dependency for us.
$npm init - To create package.json file to store all information in json package and hold server dependency
$npm install express - create folder node_modules but it wouldn't update json file.
$npm install express --save - to save into jason package file
$npm install bourne body-parser --save ------(bourne - I will use as a local database and body-parser --- serving html file
$git status - To see what we have added
Create a public folder for frontend work
Under public folder create three more folders such as css, src, lib
$bower install angular bootstarp angular-route --save - It will create bower-componenet folder under server , but I want it under public folder.
Create a .bowerrc file manually under public folder - tells bower what should be the directory for bower component, it also tells to create .bowerrc file inside public directory instead of root directory.
$bower init (sometimes this command doesn't work on Git bash command, the use windows cmd)it will create bower.jason file.
$bower install angular bootstrap angular-route --save (All the dependencies will be install inside public/lib folder)
create server.js file (static server to run your application locally)
create main.html
Add css folder and add bootstarp.css file 
This is a full stack development that is MEAN stack (Mongo Express Angular NodeJS) currently I am not using boune instead of Mongo


