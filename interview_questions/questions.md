# JavaScript Interview Questions

## 01_basic

**Q1: What is the difference between `var`, `let`, and `const`?**
- `var` is the old way, has functional/global scope, and can lead to bugs. 
- `let` allows you to reassign values later and has block scope. 
- `const` creates a constant variable that can never be reassigned.

**Q2: What will `typeof null` return, and why?**
- It returns `"object"`. This is a known, historical bug in the JavaScript language that cannot be fixed without breaking old websites.

**Q3: What is the difference between `==` and `===`?**
- `==` only checks if the values are equal, and will automatically try to convert the types (e.g., `"2" == 2` is true). 
- `===` (Strict Equality) checks both value AND data type without converting anything (e.g., `"2" === 2` is false).

**Q4: Explain Stack vs. Heap memory in JavaScript.**
- **Stack:** Used for Primitive types (Numbers, Strings). It creates a fresh photocopy. Changing a copied variable does not affect the original.
- **Heap:** Used for Reference types (Objects, Arrays). It creates a reference/link to the original data. Changing a copied object WILL change the original object because they share the same memory.

## 02_basic

**Q5: What is the difference between `slice` and `splice` in arrays?**
- `slice()` creates a safe copy of a portion of the array. It does not modify the original array.
- `splice()` physically removes items from the array. It modifies/destroys the original array.

**Q6: What happens if you try to merge arrays using `array1.push(array2)`?**
- It does not merge them into a single list. Instead, it adds the entire `array2` as a single item at the end of `array1`, resulting in an array inside of an array. You should use the Spread Operator `[...array1, ...array2]` instead.

**Q7: When MUST you use bracket notation (e.g., `obj["key"]`) instead of dot notation (e.g., `obj.key`) for objects?**
- You must use bracket notation if the key has spaces/special characters (like `"full name"`) or if the key is a `Symbol`.

**Q8: What is Object Destructuring?**
- It is a shortcut syntax that allows you to extract properties from an object and bind them to standalone variables in a single line (e.g., `const { price } = course`).

## 03_basic

**Q9: What is the difference between Parameters and Arguments in a function?**
- **Parameters** are the empty variables defined in the function's declaration (the placeholders).
- **Arguments** are the actual data values passed into the function when it is called.

**Q10: What is the Rest Operator in a function parameter and how does it differ from the Spread Operator?**
- Both use three dots (`...`). 
- When used in a function definition (e.g., `function calculate(...num1)`), it is the **Rest Operator**. It gathers an unlimited number of loose arguments and bundles them *into* an Array.
- When used on an existing array (e.g., `[...arr1, ...arr2]`), it is the **Spread Operator**. It takes an array and spreads/spills its items *out* into loose pieces.

**Q11: Explain Block Scope vs. Global Scope.**
- **Global Scope:** Variables declared completely outside of any function or `{}` block. They can be accessed from anywhere in the file.
- **Block Scope:** Variables declared inside curly braces `{}` (like inside an `if` statement or a `for` loop) using `let` or `const`. They can *only* be accessed from inside those specific braces. (Note: `var` ignores block scope, which is why it causes bugs).

**Q12: What is an Arrow Function, and what is an "Implicit Return"?**
- An Arrow Function `() => {}` is a modern, shorter syntax for writing functions. 
- An **Implicit Return** means that if you omit the curly braces `{}` and just use parentheses `()` (or nothing) after the arrow, the function will *automatically* return the value without you having to type the word `return`. (e.g., `const add = (a, b) => (a + b)`).

**Q13: What is an IIFE (Immediately Invoked Function Expression) and why is it used?**
- An IIFE is a function that runs the exact moment it is defined, written by wrapping the function in parentheses and adding `()` at the end: `(function myFunc() { ... })()`.
- It is used to prevent variables inside the function from leaking out and polluting the Global Scope.

## 04_control_flow

**Q14: Explain the difference between the logical operators `&&` (AND) and `||` (OR).**
- `&&` (AND) requires **all** conditions to be true. If even one condition is false, the entire statement is false.
- `||` (OR) requires **only one** condition to be true. If any of the conditions are true, the entire statement is true.

**Q15: What is the purpose of the `break` keyword in a `switch` statement?**
- The `break` keyword stops the execution of the `switch` block once a match is found. If you forget to include `break`, the code will "fall through" and automatically execute every single case below the matched one.

**Q16: How does a `switch` statement compare values?**
- A `switch` statement uses strict equality (`===`) to compare the expression with the cases. This means it checks both the value AND the data type without doing any automatic type conversion.

**Q17: What are "Truthy" and "Falsy" values in JavaScript? Give examples.**
- A **falsy** value is a value that is considered `false` when placed in an `if` statement. The only falsy values in JS are: `false`, `0`, `-0`, `BigInt 0n`, `""` (empty string), `null`, `undefined`, and `NaN`.
- A **truthy** value is literally anything else. For example, `"0"` (a string containing zero), `"false"` (a string), `[]` (empty array), and `{}` (empty object) are all truthy!

**Q18: What is the Nullish Coalescing Operator (`??`) and how is it different from logical OR (`||`)?**
- The `??` operator returns the right-hand value ONLY when the left-hand value is strictly `null` or `undefined`. 
- It differs from `||` because `||` triggers on ANY falsy value (like `0` or `""`). `??` is much safer for assigning default values when `0` or `""` are actually valid inputs.

## 05_iterations

**Q19: Explain the three parts of a standard `for` loop declaration.**
- A standard `for` loop (e.g., `for (let i = 0; i < 10; i++)`) has three parts separated by semicolons:
  1. **Initialization (`let i = 0`)**: Creates the starting variable. Runs only once.
  2. **Condition (`i < 10`)**: The rule that must be `true` for the loop to keep running. Checked before every loop.
  3. **Iteration/Increment (`i++`)**: How the variable changes after every loop cycle.

**Q20: What is the difference between the `break` and `continue` keywords in a loop?**
- `break` completely destroys the loop. The computer immediately escapes the loop and moves on to the rest of the file.
- `continue` only skips the *current* cycle. The computer skips the rest of the code in the current loop iteration, but goes back to the top to run the *next* iteration.

**Q21: What is the main difference between a `while` loop and a `do...while` loop?**
- A `while` loop checks the condition *before* running the code. If the condition is false from the start, the code never runs.
- A `do...while` loop checks the condition *after* running the code. This guarantees that the code inside the loop will run **at least once**, even if the condition is completely false.

**Q22: What is the `for...of` loop used for in JavaScript?**
- The `for...of` loop is a modern, simple loop designed specifically to iterate over the *values* of iterable objects like Arrays, Strings, and Maps. It automatically figures out the length and goes through every item one by one (e.g., `for (const item of myArray)`).

**Q23: Can you use a `for...of` loop on a standard JavaScript Object?**
- No. If you try to use `for...of` directly on a standard Object (e.g., `const myObj = {a: 1}; for (const x of myObj)`), JavaScript will throw an error saying **"myObject is not iterable"**. You must use a `for...in` loop or `Object.keys()` to loop through standard Objects.

**Q24: What is the `for...in` loop used for, and how does it differ from `for...of`?**
- The `for...in` loop is designed to iterate over the **keys** (or property names) of an Object. 
- Difference: `for...in` grabs the **KEYS** (like `name`, `age`, or array indexes `0, 1, 2`). `for...of` grabs the actual **VALUES** (like `"Yash"`, `25`, or `"apple"`).

**Q25: Explain the `forEach` method for Arrays. What arguments are available to its callback function?**
- `forEach` is a built-in Array method that executes a provided function once for every item in the array. 
- The callback function receives three arguments automatically: `(item, index, wholeArray)`. You can choose to use just the `item`, or all three if you need them. Note that `forEach` does *not* return a new array; it just runs code.

**Q26: What is the main limitation of `forEach`, and how does the `filter` method solve it?**
- The main limitation of `forEach` is that it **cannot return any values** (it always returns `undefined`). You can't use it to easily create a new array.
- The `filter` method solves this. Like `forEach`, it loops through the array, but it **returns a brand new array** containing only the items that passed a true/false condition (e.g., `const bigNums = nums.filter(num => num > 4)`).

**Q27: What does the `.map()` array method do in JavaScript?**
- `.map()` is used to transform every single item in an array. Like `filter`, it returns a brand new array, but instead of keeping/throwing away items, it modifies them (e.g., multiplying every number by 10) and places the modified items into the new array.

**Q28: What is "method chaining" in JavaScript arrays?**
- Method chaining is the process of attaching multiple methods back-to-back (e.g., `array.map().filter().map()`). 
- Because methods like `map` and `filter` return a new array, you can instantly attach another array method to the end of them to perform complex data manipulation in a single block of code.

**Q29: Explain the `.reduce()` array method and its parameters (`accumulator`, `currentValue`, `initialValue`).**
- `.reduce()` loops through an array and collapses (reduces) it down to a single value (like a total sum).
- **`accumulator`**: A running total that remembers the result of the previous loop.
- **`currentValue`**: The current item being processed in the array.
- **`initialValue`**: A starting value provided at the very end of the function (e.g., `0`) to initialize the accumulator before the first loop.

**Q30: Give a practical use case where `.reduce()` is commonly used in web development.**
- The most common real-world use case for `.reduce()` is calculating the total price of all items in an E-commerce Shopping Cart (an array of objects). You loop over the cart, adding each `item.price` to the running total (accumulator).

## 06_dom

**Q31: What is the DOM (Document Object Model)?**
- The DOM is a programming interface for web documents. It represents the page so that programs (like JavaScript) can change the document structure, style, and content. The DOM represents the document as a tree of nodes (objects).

**Q32: Name three common ways to select an HTML element using JavaScript.**
- `document.getElementById('id_name')`: Selects a single element by its unique ID.
- `document.querySelector('.class_name')`: Selects the first element that matches the given CSS selector.
- `document.querySelectorAll('tag_name')`: Selects ALL elements that match the given CSS selector and returns them in a NodeList.

**Q33: How can you traverse (move) from a parent element to its children in the DOM?**
- If you select a parent element, you can access its children using `parent.children` (which gives you an HTMLCollection array of the child elements). You can also use `parent.firstElementChild` or `parent.lastElementChild` to grab specific children quickly.

**Q34: How do you traverse from a child element to its parent or next sibling in the DOM?**
- To go up the tree, you use `child.parentElement`. 
- To move sideways to the next element on the same level, you use `child.nextElementSibling`.

**Q35: How do you create a brand new HTML element using JavaScript?**
- You use `document.createElement('tagName')` (e.g., `document.createElement('div')`). After creating it, you can add classes, styles, and text to it, and finally attach it to the visible page using `document.body.appendChild()`.

**Q36: Why might a developer prefer `createTextNode` over setting `innerText` when building elements in memory?**
- While `innerText` is easier, `createTextNode` is generally considered more optimized and secure (protects against XSS attacks) when generating DOM trees dynamically from scratch, as it explicitly creates a text node without forcing the browser to parse/render any hidden HTML tags.

**Q37: How do you replace an existing element in the DOM with a new one?**
- First, you select the old element. Then, you create or select the new element. Finally, you use `oldElement.replaceWith(newElement)`. 

**Q38: How do you completely remove an element from the DOM?**
- You select the element and simply call `.remove()` on it (e.g., `document.querySelector('li:last-child').remove()`).
