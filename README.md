# Module02_DJS02_PHIBOG534_BCL2401_E02_Phillip-Bogopane_DJS02

### Division Calculator Application

This repository contains a simple division calculator web application that allows users to input two numbers and perform division. The application includes error handling and validation to ensure smooth user experience.

#### Instructions

1. **Review the Starter Code**: Understand the current implementation and its limitations.
2. **Implement User Stories**: Modify the code to fulfill all unresolved user stories. Pay attention to error handling and user input validation.
3. **Error Handling**: Ensure the application handles errors gracefully, providing clear feedback to the user without crashing.
4. **Testing**: Test your application thoroughly with various inputs to ensure it meets all the user stories.

#### Starter Code

The provided HTML and JavaScript set up a basic form for inputting two numbers (dividend and divider) and a button to perform the calculation. The current script captures form submissions and displays the division result. However, it lacks validation, error handling, and the logic to meet all user stories.

#### Resolved Stories

1. **Initial State**: On page load, the message “No calculation performed” is displayed, indicating no action has been taken yet.
2. **Whole Number Division**: Upon submitting two numbers that divide evenly (e.g., 20 divided by 10), the application correctly displays the whole number result.

#### Unresolved Stories

1. **Dividing numbers result in a decimal number**: Ensure that when dividing numbers result in a decimal number, the correct result is displayed.
   
2. **Validation when values are missing**: Implement validation to handle cases where either or both inputs are empty. Display an appropriate message to the user.
   
3. **An invalid division should log an error in the console**: Handle cases where an invalid division is attempted, such as division by zero. Provide clear feedback and log errors gracefully.
   
4. **Providing anything that is not a number should crash the program**: Ensure the application gracefully handles non-numeric inputs and provides appropriate feedback to the user.

#### Scenarios

- **Scenario: Starting program state**
  - GIVEN that the submit button has not been pressed yet
  - AND the code has just loaded
  - THEN “NO calculation performed” should be displayed at the bottom

- **Scenario: Dividing numbers result in a whole number**
  - GIVEN that the submit button is pressed
  - WHEN 20 is entered into the first input
  - AND 10 is entered into the second input
  - THEN 2 should be displayed at the bottom

- **Scenario: Dividing numbers result in a decimal number**
  - GIVEN that the submit button is pressed
  - WHEN 20 is entered into the first input
  - AND 3 is entered into the second input
  - THEN the number 6 with no decimal should be shown

- **Scenario: Validation when values are missing**
  - GIVEN that the submit button is pressed
  - WHEN either or both inputs are empty
  - THEN the divisions should not be done
  - AND the following should be displayed: “Division not performed. Both values are required in inputs. Try again”.

- **Scenario: An invalid division should log an error in the console**
  - GIVEN that the submit button is pressed
  - WHEN 20 is entered into the first input
  - AND 0 is entered into the second input
  - THEN the division should not be done
  - AND the following should be displayed: “Division not performed. Invalid number provided. Try again”.
  - AND an error should be logged in the browser console that shows the call stack
  - BUT the program should not crash entirely

- **Scenario: Providing anything that is not a number should crash the program**
  - GIVEN that the submit button is pressed
  - WHEN ‘YOLO’ is entered into the first input
  - AND ‘+++’ is entered into the second input
  - THEN the entire screen should be replaced with “Something critical went wrong. Please reload the page
  - AND an error should be logged in the browser console that shows the call stack.


