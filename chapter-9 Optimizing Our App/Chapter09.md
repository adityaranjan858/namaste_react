## Optimizing Our App

**Modularity**

Modularity means that you break down your code into different different small modules, so that your code becomes more maintainable and more testable   

## Custom Hooks

Creating a custom hook is not a mandatory thing, but it is a very good thing because 
+ that will make your code look, more good readable, 
+ that will make your code more modular, 
+ that will make your code more reusable. 
So, that is the use of creating custom hooks.

Suppose, we have `RestroMenu` component and it is currently concerned about two things :
+ fetching data
+ displaying on the UI

But we want that `RestroMenu` should be only concerned about displaying on the UI. So here custom hook comes into the picture, now abstract fetching data logic part from the `RestroMenu` and put inside the custom hook.   
So `RestroMenu` component will be more readable and modular.

> We will just take out some responsibility from a component and extract it inside a hook. So that our hook and our component becomes more modular.

--------
**Creating a custom hook named as `useRestroMenu hook`**

This custom hook will fetch the data and we will give it to `RestroMenu`.
So, `RestroMenu` will not have to worry about how we are fetching the data.

> Always prefer to create a separate file for a separate hook.
Best place to store a custom hook is `utils` folder.

Example : this is the abstraction of fetching data from the `RestroMenu`
```
import React, { useEffect, useState } from "react";
import { RES_MENU_API } from "./constants";

const useRestroMenu = (resId) => {
  const [resMenuInfo, setResMenuInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_MENU_API + resId);
    const json = await data.json();
    console.log(json.data);
    setResMenuInfo(json.data);
  };
  return resMenuInfo;
};

export default useRestroMenu;
```
Example : this is how we use the custom hook named as `useRestroMenu` inside the `RestroMenu`.
```
  const resInfo = useRestroMenu(resId);
```
> Now, this is how my `RestroMenu` is following a single responsibility principle.
single responsibility principle means to be concerned about only one responsibility.

**_General Steps :_**

Creating a custom hook in React involves a few steps. Here's a general guide to help you create a custom hook:

1. **Define the Hook Function**: Create a JavaScript function that will serve as your custom hook. Custom hooks typically start with the word "use" to follow the convention. For example, you could name your custom hook function as `useCustomHook`.

2. **Determine the Hook Logic**: Decide on the logic your custom hook will encapsulate. This could be anything from handling state, fetching data, event listeners, or any other reusable logic.

3. **Code the Custom Hook**: Write the logic within your custom hook function. You can use existing React hooks within your custom hook if needed.

4. **Return Values**: Ensure your custom hook returns the necessary values, functions, or variables that components using the hook will need.

5. **Using Dependencies**: If your custom hook depends on external libraries or resources, make sure to include them in the hook file.

6. **Testing**: Test your custom hook by using it in a React component to see if it functions as expected.

Here's a simple example of a custom hook that manages a state variable and provides functions to update that state:

```jsx
import { useState } from 'react';

const useCustomHook = (initialState) => {
  const [value, setValue] = useState(initialState);

  const updateValue = (newValue) => {
    setValue(newValue);
  };

  return {
    value,
    updateValue,
  };
};

export default useCustomHook;
```

To use this custom hook in a component:

```jsx
import React from 'react';
import useCustomHook from './useCustomHook';

const MyComponent = () => {
  const { value, updateValue } = useCustomHook(0);

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => updateValue(value + 1)}>Increment</button>
    </div>
  );
};

export default MyComponent;
```

Remember, custom hooks help in keeping your code organized and promoting reusability.  

1. I want to create a custom hook but I don't know how to start writing it, how to think, how to write, my thoughts in the code?
    
    + first thing you should finalize the contract.

2. what do you mean by contract?
    + what is the input of that hook & what is the output of that hook.
    + just like `useRestroMenu`, we had a `resId` as input and `resInfo` as output.
    + So, when you know these two things input & output then it becomes easier to write your hook.
    


