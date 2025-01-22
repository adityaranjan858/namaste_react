# Time for Test
## Types of testing:
1. **Manual testing:** Testing the functionality that we have 
developed. E.g → we have developed a search bar, manual 
testing is checking the search bar manually by searching the 
query.

    💡This is not a very efficient way because we can’t test 
    every new feature in a big application. A single line can 
    introduce bugs in our whole app because multiple 
    components are connected to each other.

2.  **Automatic testing:** We can write the test cases for testing the functionality. It includes

    a. **Unit Testing:** This involves writing test cases for specific, isolated components of the application. The goal is to verify that individual functions or methods work as intended.

    b. **Integration Testing:** This type of testing is focused on the interaction between components. It checks the interactions between integrated units/modules to ensure they work together correctly. For example, testing the connection between the menu page and the cart page. 

    c. **End-to-End Testing:** This involves writing test cases that simulate real user scenarios from the moment a user enters the website until they leave. It ensures that the overall flow of the application functions as expected, covering multiple components and their interactions. 
    It requires different types of tools such as *Cypress, puppeteer, Selenium etc*

# Install libraries:

> 📢NOTE: If you are using create-react-app or vite. please 
ignore these installation steps because these packages 
already include the testing library

1. **React Testing library:** It is provided by react that allows to test react components. *React Testing library is build on top of DOM TESTING LIBRARY.*  
```
npm i -D @testing-library/react
```
2. **jest:**  Jest ia a standard to write test cases whenever it comes to javascript. It is basically a javascript testing framework and that DOM testing library or React Testing library uses jest behind the scenes.

- React testing library uses jest so we need to install it.
```
npm i -D jest
``` 
Since we are using Babel as a bundler so we need to install some extra libraries.

For more details check the official website: https://jestjs.io/ and https://babeljs.io/docs/usage

3. install extra babel libraries
```
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```
4. create babel.config.js
```
const presets = [
  [
    "@babel/preset-env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
      corejs: "3.6.4",
    },
  ],
];
module.exports = { presets };
```
> 📢NOTE: If you are following this series, then you must 
know parcel is using Babel. We just added babel.config 
file but the parcel also has a babel configuration behind 
it. that creates a conflict. To solve this we have to 
disable the parcel config. Create a .parcel.rc file

```
// .parcel.rc
{
  "extends": "@parcel/config-default",
 "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
  }
}
```
To check that you have installed successfully without an error. 

Try to run the testcase

> **npm run test** →  will give no test case found

5. Let’s configure the jest 
```
npx jest --init // executing the jest package 
```
After running this command, you have to select some options 

![alt text](image.png)

> 💡We are using jsdom as a test environment. When we run 
test cases, there is no browser or server. For running 
the test cases we need an environment which is jsdom

6. Install jsdom environment
```
npm install --save-dev jest-environment-jsdom
```

## Start writing testcases:
Let’s start with writing testcases for simple function that 
returns the sum of two numbers

1. create a file for which we need to write the test case
```
//sum.js
export const sum  = (a,b) => {
return a + b;
}
```
2. create a folder __test__ and create a file in this folder 
**sum.test.js**

![alt text](image-1.png)
>Note : This double underscore ( __ ) before and after in test folder known as dunder. We use it as reserved word.

3. Let’s write out first test case

Syntax :
```
test(" ", ()=>{

})
First argument is string that means description of the test, 
Second argument is callback function that means we actually write the implementation of the test cases.
```
Example: 
```
import {sum} from "../components/sum"
test("Function should calculate the sum of two numbers",() => {
const result = sum(3,4) // call the function
expect(result).toBe(7)  // assertion provided by jest. I
}
// test will take two arg name and callback function
```
if there is error in terminal such as :
```
Expected : 5 *expected* means what I have written in expected.
Received : 7 *received* means what I have get from function, so always try to get *received* in *expected*
```

4.  Run the test case using command :
```
npm run test
```
I hope now you have the overview that how testing works. So now let’s write the original test case for our project.

## Unit test: 

**Render :**
Whenever you are testing a UI component inside React, you will have to **render** that component onto the JS DOM first of all.
```
Example :
render(<Contactus />) 
```

**Screen :** 
Screen is an object which comes from "React testing Library". 
Whatever we will *render* , will get access through *screen*.

```
<!-- heading is h1 in contactus component. -->
const header = screen.getByRole("heading")
```

---
Let’s write a test case to check the component is loading or 
not. To check any component loads or not, we need to check in 
the jsdom. 
```
test('check component loads or not',() => {
render(<Contactus/>   // render the component that want 
    const heading = screen.getByRole("heading")  // check the sp
expect("heading").toBeInTheDocument()   // check heading
})
```
> 📢Note: If you are using parcel, you will encounter an 
error. The error is we haven’t enable JSX yet. So, we are 
not able to render the compoent that uses JSX. Let’s 
enable it

To enable JSX in testing environment:
+ a. install babel: npm i -D @babel/preset-react
    > @babel/preset-react is helping our testing library to convert JSX code to HTML. So it can read properly.
+ b.  set babel config:

![alt text](image-2.png)

> 📢Note: Install one more library to use the dom functions
>  + npm i -D @testing-library/jest-dom

Now, run the testcase. It will pass

We found the heading using “getByRole”. But we can also find 
using different functions like
```
const button = screen.getByText("submit") // It will find the te
expect(button).toBeInTheDocument()
```

> Whenever we have to check something whether it has loaded or not in the DOM then we use funtion **toBeInTheDocument()**

**Note :** 
1. for testing single thing/item , we can use **getBy...**.
2. for testing multiple item of same thing such as "*input*" , we can use **getAll...**.
3. we use *getByRole* for *input* as **textbox**.
4. *getBy..*, *getAllBy..* are all these called a querying.

```
if error is something like this :
+ Received has type:  array,
+ Received has value: [`<input class="border rounded-5 border-black my-2 p-2" id="" name="name" placeholder="name" type="text" />, <input class="border rounded-5 border-black my-2 p-2" id="" name="message" placeholder="message" type="textarea" />`]*

then test using **length** property:

test("should load multiple headings inside the contact us component", () => {
  render(<ContactUs />);

  // Querying
  let heading = screen.getAllByRole("heading");

  // Assertion
  expect(heading.length).toBe(3); 
});
```
> 💡We can use **it** instead of **test** keyword, both are same things.

To write multiple testcases

**describe()** : - Group these multiple test cases into a single block that block is known as `describe()`. We can also nesting this describe() into describe().  

```
describe('To test the header component',() => {
it("Should load the header component",() => {})
it("Should include the button",() => {})
}
```

> 💡After creating testcase, git will show many files 
changed. We don’t need to upload the coverage folder to 
the github. So, add **coverage** to the **.gitignore** file

**Let’s make one more test case for testing Header to 
check button is rendered or not
**
```
// import render and header 
it("should test header compoenent",() => {
render(<Header/>)
}
```
We will get a few Errors because we are testing the isolated 
component.

> 📢Note: We used redux store in the header (useSelector) but 
the store is provided to the app component. To test the 
Header component, we need to provide the store to Header 
component as well

> 📢Note: We used the Link component provided by react-
router-dom. But we have provided router to the App 
component. So, To test the Header we have to provide the 
router to the Header component

![alt text](image-3.png)

To check the button click, you can use the fireEvent which 
behaves like an onclick method 

## Integration Testing:

> 💡To run the test automatically, make a script in the 
package.json like “watch-test”:”jest --watch” . Now we 
can simple run npm run watch-test.

Let’s write the test case for the Search component. It should 
show the card in the body when we search some restaurant

**Fetch the body component** first (because search bar is in body)
```
it("should show the search button",() => {
render(<Body/>)     // will throw an error 
}
```
 
> 📢Note: Error generated because the Body component uses the 
fetch function which is provided by the browser. But we 
are using jsdom. So we need to make a mock fetch function 
with mock data that will replace the original fetch 
function.

For creating fetch function, we need to **create mock data** for restaurant list. So, create a new file **Mock_Data** and store the data by coping the restaurant list from the api.

**Create our fetch function** similar to browser fetch function 
```
// import mock Data
global.fetch = jest.fn(() => {
return Promise.resolve({         //  fetch function retu
json: () => {                // json the promise
return Promise.resolve(Mock_Data)   // r
}
})
}
// Mock_Data will be returned in the end from the fetch function
it("should show the search button",() => {
render(<Body/>)    // will throw an error 
}
```
Run this test, we will get the warning

💡When we use the async operation, we should wrap our 
component inside act function. It will return a promise

Also provide the router to the component because we are using 
the `<Link/>`

```
import {act} from "react-dom/test-utils"
// import mock Data
global.fetch = jest.fn(() => {
return Promise.resolve({         //  fetch function retu
json: () => {                // json the promise
return Promise.resolve(Mock_Data)   // r
}
})
}
// Mock_Data will be returned in the end from the fetch function
it("should show the search button",async() => {
await act(async() => {
render(
<BrowserRouter>    // because we are using L
<Body/>
</BrowserRouter>
)
}
const searchBtn = screen.getByRole("Button",{name: "Sear
expect(searchBtn).toBeInTheDocument()   // check the but
}
```
Now, all testcase will pass successfully.

> 💡If you don’t want to find using getByRole, We can also 
use getByTestId. It will always work

**To use getByTestId,** give the testid to the element
```
<input data-testid="searchinput" type="text"/>
```

```
const searchInput  = search.getByTestId("searchInput")
```
Now, test the input to get the user query to give the restaurant data.
```
const searchInput  = screen.getByTestId("searchInput")
// fireevent is provided by jest which is used to perform the ev
fireEvent.change(searchInput,{target:{value:"burger"}})    // ch
fireEvent.click(SearchButton) // click the search button
```
Now, find the restaurant card rendered on the screen after 
clicking the search button

> 💡To get the restaurant data div, give the testid
```
const searchCards = screen.getAllByTestId("resCard")  // get the
expect(searchCards.length).toBe(2)  // expect the count that sho
```
Now, all test case will pass.

> 💡If we want to write something after and before all the 
testcases or each testcases. jest provide functions

**Final code for Integration testing**

```
import { fireEvent, render, screen} from "@testing-library/react
import Body from "../components/Body"
import { BrowserRouter } from "react-router-dom"
import MockResList from "../__tests__/mocks/MockResList.json"
import { act } from "react-dom/test-utils"
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json:() => {
            return Promise.resolve(MockResList)
                }
    })
})
// describe is used to club multiple testcases
describe("",() =>{
// to print before all testcases
    beforeAll(() => {
        console.log("Before testcase")
    })
// to print before each testcase
    beforeEach(() => {
        console.log("Before Each")
    })
    // to print after all testcases
    afterAll(() => {
        console.log("After testcases") 
    })
    // to print after each testcase
    afterEach(() => {
        console.log("After each")
    })
    it("Should render body component with search feature",async(
        await act(async() => 
            render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        ))
    })
    it("Should search ResList for burger text input",async() => 
        await act(async() => 
            render(
            <BrowserRouter>
      <Body/>
            </BrowserRouter>
        ))
        const TotalCards = screen.getAllByTestId("resCard")
        expect(TotalCards.length).toBe(18)
        const SearchButton = screen.getByRole("button",{name:"Se
        
        const searchInput  = screen.getByTestId("searchInput")
        fireEvent.change(searchInput,{target:{value:"burger"}})
        fireEvent.click(SearchButton)
        const searchCards = screen.getAllByTestId("resCard")
        expect(searchCards.length).toBe(2)
    })
    it("Should filter Top rated restaurant after clicking button
        
        await act(async() => 
            render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        ))
        const TotalCards = screen.getAllByTestId("resCard")
        expect(TotalCards.length).toBe(18)
        const Button = screen.getByRole("button",{name:"Top Rate
        fireEvent.click(Button)
  const searchCards = screen.getAllByTestId("resCard")
        expect(searchCards.length).toBe(6) 
    })
    it("should render Username",async() => {
        await act(async() => 
            render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        ))
        const userInput = screen.getByTestId("userInput")
        expect(userInput.value).toBe("Gourav")  
    }) 
})
```

