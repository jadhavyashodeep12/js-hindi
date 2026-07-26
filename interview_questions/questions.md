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
