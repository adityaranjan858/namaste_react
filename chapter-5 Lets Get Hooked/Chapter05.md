## Common Questions 
Q. **Why do we use React? Some of us might wonder why we don't 
just stick to HTML, CSS, and JAVASCRIPT for everything we've 
been doing?**

A. Of course! It's absolutely possible to accomplish 
everything using regular HTML, CSS and JAVASCRIPT without 
using REACT. 
+ However, we choose React because 
    + It enhances our developer experience, making it more seamless and efficient.
    + It makes you write less code and do more on the web page, also optimizes somethings on web page. So that, Things happen very fast, this is what the major job of a UI Library or framework.

> It's best to create separate files for each component.

1. How can we achieve this?

    + To achieve this, Let's discuss the folder structure. 

    + We are going to Restructure our project folder "NAMASTE-REACT"
    + There is a very good convention in the industry that all the code in a React project is kept in a `src-folder`, there is no compulsion to use a `src-folder` in a project. But here we are following what the industry follows. 
    + We are creating and moving our  App.js  file in the `src-folder` and whatever new files we create we put them in the `src-folder`.

> **NOTE: Don't forget to update the path of the  `App.js`  file in `index.html`  otherwise we will get an Error.**


+ The best practice is to make separate files for every component.

    We have the following components.
```
1. Header
2. RestaurantCard
3. Body
```
+ We put all the above components inside the folder named 
`components`(child-folder) which has been placed inside the 
`src- folder`(parent folder). When we are creating separate 
component files inside the `components-folder` always start with a capital letter like.

In this course, we are using (.js) as an extension.
```
1. Header.js
2. RestaurantCard.js 
3. Body.js 
```
> NOTE: We can use (.jsx) as an extension instead of (.js) it's up to the developer's wish. 

```
 1. Header.jsx
 2. RestaurantCard.jsx
 3. Body.jsx
```
> `.tsx` stands for typescript. 

> 📢NOTE: NO Thumb Rule to use this convention, we could use 
any folder structure you wish.

Example of folder structure :

![alt text](<folder structure.png>)

## Understanding Export and Import in React

Two types of export/import in React, We will understand each of them in details.

1. Default export/import.
2. Named export/import.

As we know we move each component's code and create new files 
individually. 
Still, Our React project throws an error because our 
`App.js` file doesn't have components in it and we are using 
components inside the  `App.js` to solve this we need to import the components from their respective files which have been kept inside the `components-folder` in src.

to understand it well let's take an example of the 
`Header.js`  component.

Example:

The **Header.js**  component is missing in  **App.js**  so we are not able to use it, if we try to use it, It throws an error, To solve this, here we have to _import_  **Header.js**   inside the  **App.js**  and before the _import_, we have to 1st initially _export_  **Header.js**  component.

1. **Default export/import.** 

Step-1 (export)————————>

We use the `‘export’` and `‘default’` keywords with the component name at the end of the component file. 
Understand the Syntax properly.

**Export** example :

```
export default Header;
```
or 

```
export default Header.js;
```

Step-2 (import)————————>

Inside `App.js` We use `‘import’` with the component name at the start of the file. Understand the Syntax properly.

**Import** Example :

```
import Header from "./components/Header";
```

2. **Named export/import.**
We use it , when we have to import/export multiple files.

**Named Export** Example : In the name export, we just `export` keyword before `const`.

```
export const RES_IMG_CDN =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/";
```

**Named Import** Example : In the named import, we use `curly bracket`.

```
import { RES_IMG_CDN } from "../utils/constants";
```

*But there's a catch:* If we intend to export multiple items 
simultaneously, from single file `‘default export/import’` won't work; it'll result in an error. 
For instance, in our `' constants.js '` file, we've stored  URLs  for logos and images using separate variables, which means default export/import won't be feasible. 
Instead, we can employ `‘named export/import’` to handle this 
scenario effectively.

3. **Can we use default export with named export ?**
    + yes

> 📢NOTE: 
    
    1. If you are using Vs-Code Editor during 
    import it automatically tracks the path of the component 
    and gives suggestions to us. so we don't have to worry 
    about the path.
    2. We don't have to put an extension in the file in the 
    import statement. If want to put then completely Fine.

> Important Note : `resList` contains hard-coded data and we never put any hard-coded data like the source-URL of logo and images inside the component file. That's not the best practice 
the industry follows.
**Never ever keep Hard-coded data in  the component files.**

1. where should we keep the hard-coded files ?
    + Created a new folder within the `'src'` folder called `'utils'`
        > (Utils means common utilities that can we use  across all our app & some people named it as "common", "config" etc. but follow industry standard.)
        
        , and inside it, we've created a file named `'constants.js'` 
        
        
        ```
        constants.js
        ```
            why this file name is in samll letter?
            - because, this is not a component, 
            - differentiate between component and utilities we use naming conventions.
        to store all hard coded data. You can choose any name for this file, but we've opted for lowercase letters since it's not a component. Additionally, we've included the source of images in this file.
    + We've stored our mock data for `' resList '` in a file named `' mockData.js '`, which resides within the `'utils'` folder.
    + We need to export data from `' constants.js '` and `' mockData.js '`, and then import it into the necessary component files where it will be used 

> 2. It's good practice to keep our component clean and small, make sure our component file should not exceed more than 100 no of lines code.


## Introducing React-Hooks.

