# attilaszegedi-cubix-exam
 Angular Cubix Exam

# Basic set up
Created a ng new project and add libaries.
```
ng new attilaszegedi-exam
ng add @angular/material
ng add @angular-eslint/schematics
```

# Base structure

Create a base sturcture,
```
src
L-app
   L-menu
   L-auth
   L-case

```
## Base structure

- Auth will manage the authentication it is a component, service, guard
- Case will manage the COvid data it is a component, service
- Menu will manage the Header funtion with log out it is a component
- Model user create to manage the login 

### Menu
use logo titel and logout icon
### Case component
use the material Card conponenet