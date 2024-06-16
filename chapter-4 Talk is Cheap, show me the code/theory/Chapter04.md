## Talk is Cheap, Show me the Code

> **Before starting to build any app, We have to make a plan, make a wireframe So, We can easily design and do code beautiful**

1. **Planning for the UI**

    Before we start coding, plan things out. Planning will make
    things easier to understand. We should know exactly what to build :

    + Name the App
    + UI Structure
        ```
        + Header
            - Logo
            - Nav Items
        + Search
        + Restaurant Container
        + Restaurant Card
            - Dish Name
            - Image
            - Restaurant Name
            - Rating
            - Cuisines
            - Time to Deliver
        
        + Footer
            - Copyright
            - Links
            - Address
            - Contact

        ```

    + Keep that as a reference and start coding the app

 **Style :**

Inline CSS :

Writing the CSS along with the element in the same file. It is 
not recommended to use inline styling. So you should avoid 
writing it.

Inline CSS Example :

We can store the CSS in a variable :
```
const styleCard = {
    backgroundColor : "#f0f0f0"
}
```
and then use it as :

```
<div class="card" style={styleCard}> Card </div>
```
or

Directly write css as :
```
<div class="card" style={{ backgroundColor : "#f0f0f0" }}> Card </div>

**
> First bracket is to tell that whatever is coming next will be JavaScript 

> The second bracket is for JavaScript object
**
```

External CSS :

+ Inside the `style.css`

CSS Frameworks :
+ BootStrap
+ React BootStrap
+ Tailwind CSS

CSS Modules

## Introducing Props

+ Short form for properties. 
+ To dynamically send data to a component we can use `props`. 
+ Passing a prop to a component is just like passing an argument to a function.
+ Basically, React is wrapping these inside a object and it is passing to that function.
+ Prop is just a javaScript object.

1. **Passing Props to a Component**

    Example :
    ```
    <RestaurantCard
    resName="Meghana Foods"
    cuisine="Biryani, North Indian"
    />
    ```
    > `resName` and `cuisine` are a props and this prop is passing to a component.

2. **Receiving props in the Component**

    Props will be wrapped and send in Javascript object

    Example :
    ```
    const RestaurantCard = (props) => {
        return(
            <div>{props.resName}</div>
        )
    }
    ```
3. **Destructuring Props**

    Example :

    This is known as Destructuring on the fly.
    This destructuring is Javascript (ES6).
    ```
    const RestaurantCard = ({resName, cuisine}) => {
        return(
            <div>{resName}</div>
        )
    }
    ```
    or 
    
    we can write like this :

    ```
    const RestaurantCard = (props) => {
    
        const {resName, cuisine} = props
    
        return(
            <div>{resName}</div>
        )
    }
    ```
4. **How will this restaurant data come from backend into us?**

    + It will come in form of a `json`.

## Config Driven UI

+ It is a user Interface that is built and configured using a 
declaration configuration file or data structure, rather than 
being hardcoded.
+ Config is the data coming from the api which keeps on changing 
according to different factors like user, location, etc. 
     