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

---

### Builder Pattern
1. Separates the construction of a complex object (logic) from its representation (data) so that the same construction process can create different representations
    + Separation of logic (multistep) and data
    + Encapsulates the way an object is constructed
2. Solves 3 problems
    + Too many parameters
    + Order dependent
    + Different constructions
3. Example: Building a XML document
StringBuilder is not using the builder pattern
4. Builder is used by Director
5. Builder is implemented by
a concrete builder
6. Product is produced by the concrete builder
7. The client uses director and concrete builder to produce product

---

### Summary
1. Factory Method
    + Used when the factory can easily create the entire object within one method call
    + Common interface to group factories
2. Abstract Factory
    + Interface for creating families of related or dependent objects
3. Builder
    + When you need a lot of things to build an object
    + When construction is order-dependent

---

### Singleton
1. The Singleton class is a class that is supposed to have only one (single) instance
    + Access window manager / file system / console
    + Access global application logger / DC / Mapper
2. Sometimes Singleton is wrongly thought of as a global variable – it is not!
3. Possible problems:
    + Lazy loading (created when first needed)
    + Thread-safe


