## Laying the foundation 
1. **what is the another way to start the development build instead of writing this `npx parcel index.html` command again & again?**
    + Yes, We can create a `script` that will build our project instead of writing this command again and again.
    +  In `package.json` , in the script section, we can create a different types of scripts like : 
        + *start a project in a dev mode*,
        + *build our production ready app*,
        
            example :
            ```
            "scripts": {
            "start": "parcel index.html",
            "build": "parcel build index.html",
            "test": "jest"
            },
            ```  
        + To run these scripts, enter the following commands in the terminal.
        
        **To start :**
        ```
        npm start
        ```
        or
        ```
        npm run start
        ```

        **For Production Build :**
        ```
        npm run build
        ```
        > we can't write `npm build` as a shortcut. so always write `npm run build`

        > `npm start` only is the shortcut of `npm run start` 

2. **NPM start :**
    + `npm start` is equivalent to `npm run start`
    + `npm run start` behind the scenes, execute the package `parcel` with `index.html` because we have configured this inside our `package.json`.

##  Introducing JSX :

+ JSX is looks like HTML or XML syntax. JSX stands for JavaScript XML. It's a syntax extension for JavaScript.
+ JSX is not HTML, inside JavaScript.
+ JSX is different than HTML.
+ JSX is a convention where we kind of merge these _HTML_ and _JS_ together.
+ JSX is not a part of React. React apps can be built even
without JSX but the code will become very hard to read.
+ JavaScript engine cannot understand JSX as it only
understands ECMAScript.

Using Pure React :
```
const heading = React.createElement(
                    "h1",
                    { id: "heading" },
                    "Namaste React"
                );
```

Using JSX :
```
const jsx_heading = <h1>Namaste React using JSX.</h1>
```
+ when we `console.log()` heading & jsx_heading, it gives same object.

## Introducing Babel
1.  **Is JSX a valid JavaScript?**

    The answer is yes and no.
    > Javascript is a code that JS engine can understand.
    + JSX is not a valid Javascript syntax as it’s not pure HTML or pure JavaScript for a browser to understand. JavaSript does not have built-in JSX. The JavaScript engine does not understand JSX because the JavaScript engine understands ECMAScript or ES6+ code.

2. **If the browser can’t understand JSX how is it still working?**
    + This is because of `Parcel`. Parcel is doing the job behind the scenes.
    + Before the code gets to JS Engine it is sent to Parcel and `Transpiled` there. Then after transpilation, the browser gets the code that it can understand.
    
        `Transpilation` ⇒ Converting the code in such a format that the browsers can understand.
    + Parcel is like a manager who gives the responsibility of
    transpilation to a package called `Babel`.
    + Babel is a package that is a compiler/transpiler of JavaScript that is already present inside ‘node-modules’. It takes JSX and converts it into the code that browsers understand, as soon as we write it and save the file. 
    It is not created by Facebook. [Learn more about Babel](babeljs.io)
    
    ```
    JSX (transpiled by Babel) ⇒ React.createElement ⇒ ReactElement ⇒ JS Object ⇒ HTML Element(render)
    ```

3. **What is the difference between HTML and JSX?**
    + JSX is not HTML. It’s HTML-like syntax.
    + HTML uses ‘class’ property whereas JSX uses ‘className’
    property
    + HTML can use hypens in property names whereas JSX uses
    camelCase syntax.
    
    CamelCase example :
    `tabIndex, htmlFor` etc.

4. **Single Line and Multi Line JSX Code**

    Single line code:
    ```
    const jsxHeading = <h1>Namaste React</h1>
    ```
    Multi-line code:

    If writing JSX in multiple lines then using ‘()’ parenthesis is 
    mandatory. To tell Babel from where JSX is starting and ending.
    ```
    const jsxHeading = (
        <div>
        <h1>Namaste React</h1>
        </div>
    )
    ```
