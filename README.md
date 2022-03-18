# StoryApp_javaScript Array
Basic stories application developed in nodejs and using ejs template. It has all CURD operations performed on javascript array.

Steps to install

1. Clone the StoryApp application.
2. Open StoryApp_JavaScriptArray folder in vs Code and run command npm install
3. then run npm start
4. Then in browser run the http://localhost:3000/
5. If you see landing page you are good to go.

Description:
It is an MVC application.

app.js is the entry point of the application.

Model folder includes array of stories in story.js file.

Controller function has everything that is required for routes callback functions.

views folder has all the ejs templates that are rendered in browser.

Routes folder contains files that has all routes of the application.


# StoryApp_Mongo Array
Basic stories application developed in nodejs and using ejs template. It has all CURD operations performed on mongoDB database.

Steps to install

1. Clone the StoryApp application.
2. Open StoryApp_Mongo folder in vs Code and run command npm install
3. then run npm start
4. Then in browser run the http://localhost:3000/
5. If you see landing page you are good to go.

Setup MongoDB Database:

1. Connect to local MongoDB.
2. Create database name demos.
3. Create Collection stories in demos database.
4. Insert data in collection stories.

Document structure for stories:
{
    "_id": {
        "$oid": "6234d099f533859167f48d98"
    },
    "title": "It is rainning",
    "content": "Cras eget urna non quam tempor fermentum ac nec risus. Morbi ornare condimentum accumsan.",
    "author": "Michael",
    "createdAt": "03-01-2021"
}

Description:
It is an MVC application.

app.js is the entry point of the application.

Model folder includes all CURD opertions on stories collection in story.js file.

Controller function has everything that is required for routes callback functions.

views folder has all the ejs templates that are rendered in browser.

Routes folder contains files that has all routes of the application.
