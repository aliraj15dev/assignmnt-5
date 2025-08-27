✅. Answer the following questions clearly:

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans : getElementById select the element that has a specific Id name provide single element. getElementsByClassName select all the tag that has same className and provide a HTMLCollection. now querySelector use css selector to select the first element that has specific ".class" or '#id'. and quirySelectorAll select all element with the same classsname or id name as a NodeList.

2. How do you create and insert a new element into the DOM?
Ans : To create a element you need to write "document.createElement('tag name')". To insert firstly select where you want to insert. after selecting parent then append created child by appendChild(child).

3. What is Event Bubbling and how does it work?
Ans: Event bubbling is a process where when an event, like a click, occurs on a child element, it first triggers on the child, then on its parent, and then propagates upward through each parent element.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event Delegation is a technique where instead of attaching events directly to child elements, we attach an event listener to their parent element. Then, through event bubbling, the event on the child element is detected.

Why it is useful?
i. You do not need separate listeners for each child. one parent listener handles them all.

ii. Elements added dynamically to the DOM automatically have their events handled.

iii. Using fewer listeners reduces browser memory usage.

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans : Main Different between preventDefault() and stopPropagation() is preventDefault() stop the default behavious of the form, link, checkbox, ect. And stopPropagation() stop the event bubbling or capturing.
