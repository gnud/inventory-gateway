# inventory-gateway
Inventory management system with API endpoints


# Tasks

## Details
```Small inventory managments, should have the following components:

- Product Catalog
- Inventory Quantity
- User Management with Tokens 
- Log of activity

- Each should have all CRUD API
```

## Project plan
### Milestone 1: Setup project
0. System dependencies [x]

   0.1 NVM setup [x]
   ```
   curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
   ```

   #### Put this in ~/.bashrc:
   ```
   export NVM_DIR="$HOME/.nvm"```
   nvm[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm install v7.9.0
   ```
   #### Install and use nvm
   ```
   nvm install v7.9.0
   nvm use v7.9.0
   ```
   0.2 node sass global
   ```
   npm install node-sass -g
   ```
1. Generate Express.js project [x]
   - ```npm install express-generator -g```
   - ```express -e --ejs --view=ejs -c sass inventory-gateway```
2. Create github git repo [x]
   ```
   git init
   git remote add origin https://github.com/gnud/inventory-gateway.git```
   git fetch && git pull
   ```

   2.1 Generate nodejs .gitignore template [x]

   2.2 Git init && Git remote for github GIT repo [x]
   ```
   git add .
   git commit -m 'inital commit'
   git push origin master
   ```
   
3. Install needed npm dependencies [x]
   ```
   npm install chai chai-http mocha sinon -S
   ``` 
   This will install and save the new dependencies. 
4. Setup Unit testing [x]

   4.1 Create test directory [x]

   4.2 Move the business logic of the users request to a new file called getUsers.js
   to ease the testing [x]
   
   4.3 Create users.test.js file for test template which will be used through
   out the project as unit test template [x]
### Milestone 2: Project structure
1. Expressjs tokens authorization []

   1.1 Unit test []

   1.2 Mongodb model []

2. Product Catalog []

   2.1 Unit test []

   2.1 Mongodb model []
   
   2.2 CRUD API []

3. Inventory management []

   3.1 Unit test []

   3.1 Mongodb model []

   3.2 CRUD API []

4. Log off activity []

   4.1 Unit test []

   4.2 CRUD API []