# Architectural Decision Record: Step 1 - Basic Arithmetic - Foundation and Logic Management

**Status:** Accepted

**Date:** May 6, 2025

**Author:** Adam A (The one person development team)

## 1. Introduction

This document explains the main design choices we made for the first part of our calculator project, where we're focusing on basic arithmetic (+, -, \*, /). Our goal is to build a strong and organized foundation that will allow us to easily add more features later and create a calculator that works well and is easy to understand.

## 2. Core Architectural Decisions (with Visual Aids)

We've structured our calculator using a set of building blocks called "components." Think of it like building with LEGOs, where each piece has a specific job.

### 2.A Simplified Component Hierarchy

```markdown
Calculator (The main controller)
├── Display (The screen where numbers and results show up)
└── CalculatorKeypad (The panel holding all the buttons)
└── Button (Each individual key you press - there are many of these)
```

The main `Calculator` component is in charge of everything. It contains the `Display` so you can see what you're doing, and the `CalculatorKeypad`, which is like the face of the calculator with all the `Button` keys.

### 2.B Conceptual Data Flow)

Imagine a simple flow:

```markdown
[You Press a Button] --> CalculatorKeypad --> Calculator (Uses its "brain" - useCalculatorLogic) --> Display [Shows the Result]
```

When you tap a button, the `CalculatorKeypad` tells the main `Calculator`. The `Calculator` then uses its internal "brain" (which we call `useCalculatorLogic`) to figure out what to do with that button press and updates the `Display` so you can see the change or the result.

## 3. Rationale and Benefits (Why These Decisions?)

We chose this design for several good reasons:

- **Building Blocks are Easier to Manage:** Like LEGOs, if we need to change one part (like how a button looks or acts), we can do it without messing up the whole calculator.
- **Each Part Has One Job:** The `Display` only shows things, the `Button` only handles presses. This makes each part simpler to understand and less likely to cause problems.
- **Keeping Things Separate:** The rules for how the calculator works (the "brain") are kept separate from how it looks. This means we can change the appearance without changing how it does calculations, and vice versa.
- **Good Communication:** The buttons and the keypad "tell" the main `Calculator` when something happens. This clear communication system makes it easier to follow what's going on.
- **Organized Logic:** By using a special tool called "hooks" (`useCalculatorLogic`), we keep all the calculation rules in one organized place, making the main `Calculator` component cleaner and easier to manage.

## 4. Common Problems Solved by This Architecture

Our design helps avoid some common issues when building software:

- **Messy Code:** By breaking things into components with single jobs, the code is more organized and easier to read.
- **Things Breaking Unexpectedly:** When parts are separate, a change in one area is less likely to break something else.
- **Hard to Test:** With smaller, focused parts, it's easier to test if each part is working correctly.

## 5. Potential Future Considerations and Modern Alternatives

As we add more to the calculator, we might think about:

- **A Bigger "Brain":** If we need to remember lots of things (like past calculations), we might need a more advanced way to manage memory.
- **More Ways to Arrange Things:** For more complex layouts, we might use more sophisticated ways to arrange our building blocks.
- **Making it Work with Other Systems:** If we wanted to save your calculations online, we'd need to connect the calculator to a backend system.

## 6. What This Means For You

- **For Users:** You should get a calculator that is reliable, works as expected, and can have new features added without causing problems.
- **For Developers:** This organized way of building makes it easier to work on the calculator, add new features, and fix any issues. It also makes it easier for new developers to understand how the calculator works.
- **For the Project:** This strong foundation makes the project easier to grow and maintain over the long term.

## 7. Glossary of Terms

Here are some simple explanations of terms we used:

- **Component:** Think of it as a reusable building block for our calculator's interface (like a button or the display screen). Each component has its own specific job.
- **Hook:** A special tool in React that lets us use features like keeping track of information (state) and managing logic within our components in an organized way. Our `useCalculatorLogic` hook is like the _calculator's brain_.
- **State:** Information that our calculator remembers and can change over time, like the current number you've typed or the result of a calculation.
- **Callback:** A way for one component to tell another component to do something when a specific event happens (like a button being clicked). It's like saying, "Hey, when this happens, you do this!"
- **Architecture:** The overall plan and structure of how our calculator is built and how all its different parts work together.

## 8. Conclusion

By carefully choosing this component-based and logic-separated approach, we're aiming to create a calculator that is not only functional for basic arithmetic but also well-prepared for future growth and complexity. This design prioritizes clarity, organization, and maintainability, which are essential for building a high-quality, production-level application.
