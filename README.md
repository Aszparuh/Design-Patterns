# Design Patterns
## Creational Patterns
Deal with initializing and configuring classes and objects

---
### Simple Factory
1. Encapsulates object creation logic
    + If we are making specific class selection logic changes, we make them in one place
    + We can hide complex object creation
2. This is not a real Pattern
    + This is the preparation for the real Pattern
3. It is used quite often
4. Each time we add new type we need to modify the simple factory code

---

### Factory Method
Provides an interface for creating objects in superclass, but allow subclasses to alter the type of objects that will be created.
1. Objects are created by separate method(s)
2. Produces objects as normal factory
    + Adds an interface to the simple factory
    + Add new factories and classes without breaking Open/Closed Principle

---

### Abstract Factory
Lets you produce families of related objects without specifying their concrete classes.
1. Abstraction in object creation
    + Create a family of related objects
2. The Abstract Factory Pattern defines interface for creating sets of linked objects
    + Without knowing their concrete classes
3. Used in systems that are frequently changed
4. Provides flexible mechanism for replacement of different sets