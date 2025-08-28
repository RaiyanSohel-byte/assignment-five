1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
   Ans: (i) getElementById gets the element with specifically mentioned id, getElementsByClassName gets all the elements of the mentioned class name, querySelector gets the first element from the mentioned CSS selector, querySelectorAll gets all elements from the mentioned CSS selector.

   (ii) getElementById returns a single element object and it must be unique. getElementsByClassName returns a HTML collection which is an array like object, querySelector returns a single element object, querySelectorAll returns a Node list.

2. How do you **create and insert a new element into the DOM**?
   Ans: const p = document.createElement('p');
   document.body.appendChild(p);

3. What is **Event Bubbling** and how does it work?
   Ans: Event Bubbling is a process where an event starts from the lowest/deepest targeted child element and goes up through the parents to the document like Bubbling.
   For example, when we click a button the event starts from the button element and then goes to it's parent div and by going like this it goes all the way to the document.

4. What is **Event Delegation** in JavaScript? Why is it useful?
   Ans: When we use eventListener to an element which is common for every child element and event bubbles up is called Event Delegation.
   It is useful because, it makes the codes cleaner as we don't need to add multiple eventListeners for every child elements. Which also enhances the performance of the webpage. We can add more child elements later and don't need to re add the eventListeners as the child element already has eventListener attached to it's parent.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
   Ans: preventDefault(): It prevents the default behavior of an element. For example, it stops form from submitting automatically.
   stopPropagation(): It prevents the event from bubbling or capturing.
