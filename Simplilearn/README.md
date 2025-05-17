JS is lightweight , object-oriented programmiing language
it is open and cross-platform
It is designed for creating a dynamic web application
JS usage has extended to mobile app development ,desktop app development , and also game development


document.write() //write into a browser


# Array Methods
1. tosring()
2. pop() :remove last element from an array
3. push(): add new element at the end of an array
4. shift(): reomve the first element from an array
5. unshift(): add element at the beginning of an array
6. concat(): merge two different array
7. sort(): sort into ascending form
8. reverse(): reverse order 

# Array.map():
    -> creates a new array and perform a function on each array element

# Array.filter():
    -> takes each element in an array and it applies a conditional statement against it

# Array.reduce():
    -> reduces an array of valuea down to just one value using a function


# Loops
    -> for loop :enty control loop
    -> Do while :Exit control loop

# object 
 - JS object is like real worls entity having state and behaviour
 
 ## Js Object Acessor
 -> Getter is used to get the value of the properties of an object
 -> Setters is used to set the value of the properties of an object

# Function
    - A function is  group of resuable code which can be called anywhere in a program


# Promise
 - States:
    -> Pending : operation is not yet completed
    -> Fulfilled : Has finish
    -> Rejected : error occur

    A promise is said to be settled when it is either fullfilled or rejected.
    -> after settled , it can immutable , and its state cannot change

    .then( callback) :-> promise is resolve
    .catch(callback):-> promise is rejected

<!-- 
    new promise(function(resolve,reject){}) 
    
-->

# Regular Expression(REGEXE)
- Flag:
    ->g: Globel
    ->i: ignore case
    ->m: multiple line
    ->u: unicode
    ->y: find all consecutive/adjeent match

- Patterns:
    -> [a,b]:find all character from a to b (lowercase only)
    -> [0,9]: find only digit between 0 to 9
    -> [a-b|0-9]: find any character of digits seperated by "| "

- Quantifiers
    -> N+: one or more 
    -> N*: zero or more
    ->N?: zero or one