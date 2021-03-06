# project-PersonalWiki
Project repository for 'PersonalWiki' team

# Overview

* Our team creates a Personal Wiki web service that enable individual users to manage their own personal knowledgebase. 
     * Create the frontend on Meteor platform with React/Javascript/CSS/Html, allowing users to view/add/edit/delete/search wiki contents;
     * Build the backend on Mongodb to interact with database and frontend, managing operations on wiki pages;
     * Implement Semantic-UI-React to design beautiful and responsive UI layouts.
     * Integrate with Wikipedia API for advanced search functionality.
     * Deploy on Heroku Cloud Application Platform.


* [Project Demo](https://mywiki5500.herokuapp.com/app)
* [Project Page](https://pages.github.ccs.neu.edu/2020SPCS5500SV/project-PersonalWiki/)
* [Project Wiki](https://github.ccs.neu.edu/2020SPCS5500SV/project-PersonalWiki/wiki)
* [Project Board](https://github.ccs.neu.edu/2020SPCS5500SV/project-PersonalWiki/projects/1)
* [Communication Plan](https://github.ccs.neu.edu/2020SPCS5500SV/project-PersonalWiki/blob/master/docs/Communications%20Plan.pdf)


# Team


|Name|CCIS-ID|
|------|-------|
|Ziqi Tang|paultzq|
|Shengfu Zhang|otaku0628|
|Fang Song|fangsong|
|Qimin Cao|qimin|
|Xun Wang|xunwang|
|Yan Zhao|adoudouzhao|

>Primary customer representative: Ziqi Tang(paultzq)

>Alternate customer representative: Shengfu Zhang(otaku0628)

# Usage

First please make sure you have installed meteor, mongoDB, and React.

Then run the following commands in your terminal.

```
git clone https://github.ccs.neu.edu/2020SPCS5500SV/project-PersonalWiki.git
cd project-PersonalWiki/app
meteor npm install
meteor
```
Open your browser and visit http://localhost:3000 and you should see the application.

# Technologies

- Platform: [Meteor](https://www.meteor.com/) with React - An open source platform for 
web, mobile, and desktop.
- UI: [Semantic UI React](https://react.semantic-ui.com/) - A development framework that helps create beautiful, responsive layouts using human-friendly HTML.
- Database: [MongoDB](https://www.mongodb.com/) - A cross-platform document-oriented database program, using JSON-like documents with schema.

# Design of MongoDB


Collection Name: users


| column | data type| description |
|-------|-----|------|
| _id | string | user id created by meteor |
| password | string | user's password processed by bcrypt |
| username | string | registered username |
| address | string | registered email address |


Collection Name: WikiItem


| column | data type| description |
|-------|-----|------|
| _id | string | item id created by meteor |
| title | string | title of the item |
| contents | string | contents of the item |
| picture | string | picture link of the item |
| author | string | username of who creates this item |
| authorId | string | user id of who creates this item |
| createdDate | date | date this item is created |


# Team Collaboration
* We use a feature branch workflow
     * Team members commit branches and submit pull requests to have code reviewed and committed to the master branch
* [Meeting Minutes](https://docs.google.com/document/d/1DFHlC-FHMITzVBR0lqLWufN_jOsb-JION9-rKtzQ54k/edit)
