# Driven Test Automation with BDD
## A Behavior driven Testing 
- Adding Cucumber style for proper test definition 
- Give: I am 'customer'
- When: I purchase a product 
- Then: The order should show in Admin 
- And: I verify it was delivered.

## How to run automated tests locally
[Pre-requistes] :tada:
- Node.js and Mac, 
- For Windows, change chromedriver to Chromedriver.exe

1. `Git Clone` https://github.com/DrivenByM/pickletests
2. Cd into project -  `npm install`
3. Run test - `npm test`

## Test Plan 

### Objective 
    Create set of regression tests that ensure all the integration and functional tests are working. From Reaction to Admin panel. Basic functionality of the application should be working such as 
        - The page should load.
        - Login functionality.
        - Checkout
        - Placing an order. 

### Architechture

> Admin Console - Driven Web app for business to place and order and keep track of delivery.

   - Test Environment https://testadmin.meteorapp.com/
        - Users
            - SuperAdmin
                admin@drivenbym.com
            - Operator
                operator@drivenbym.com
            - Drivers
                driver@drivenbym.com
    - Staging Environment http://stagingadmin.drivenbym.com/
    - Production
    - Github Repo
        https://github.com/DrivenByM/admin-console

> Reaction Ecommerce Store - Ecommerce site for user to go view products and place an order and the order will show in the admin console.
    
- Test Enviornment.
        https://reaction.drivenbym.com/
- Github Repo https://github.com/DrivenByM/reaction
    
> Devops Galaxy Meteor Hosting
https://galaxy.meteor.com/drivenbym

> GetSwift - Driver Tracking and Delivery serivce. 

## End to End Regression Test Cases
### Admin Console

1. Login as Super Admin.
2. Place a Manual Order 
    - Phone
		2012341465
	- First Name 
		Ronak
	- Last Name
		Chovatiya
	- Address 
		5125 convoy st
	- City
		San Diego 
	- State 
		Zip
	- Total to be collected by Driver
		$100
    - Notes
        Call my phone for pickup.
3. View Manifest
4. View Orders
5. Logout
6. Login as operator
7. Login as Driver.
