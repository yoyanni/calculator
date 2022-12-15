# Calculator Project - Final project (JS Fundamentals on The Odin Project)

I would assume it would be obvious, I will be creating a calculator using all the information learnt the Javascript Fundamentals on The Odin Project. There will be more that I will require to search for sure but thats where all the learning happens.

## Initial Commit

Just some boilderplate details and the basic files.

## Add some basic JS

Very basic JS functions added for a calculator and also an operator function that accepts an operator and two numbers.

## Add some basic HTML/CSS

Buttons were added to resemble a calculator and also CSS to design it very scarsely. I used a grid for the number and the operator buttons, it felt it was a btter fit than flex.

## Link UI with logic

The HTML was linked to the JS so you can now add, subtract, multiply and divide. The front-end was adjusted a tiny bit to help connect with the logic.

**Note:** The bugs at the moment, as far as I am aware, are:

- You cannot perform more than a two number calculation.
- Once you have chosen the operator, you will have to finish that calculation otherwise it will result in NaN.

## Fix bugs

What bugs were fixed:

- You cannot perform more than a two number calculation.
  - The calculator now can calculate more than two numbers but will first calculate the first two numbers and then go on like that. E.g. 12 + 7 - 5 * 3 = 19 - 5 * 3 = 14 * 3 = 42. (**Note:** There is no precedence since its a sequence of numbers, not the whole set.)
- Once you have chosen the operator, you will have to finish that calculation otherwise it will result in NaN.
  - How it use to work was, it would save the previous value and then display the operator. It would then save the previously incorrectly chosen operator as the value instead of a number. It now checks if the current displayed value is subtracted from itself if it equals zero, which has resolved the issue.
- (new) You cannot input double digits.
  - The issue was when adding an operator, to remove it it would just check if the display was a number or operator but not very well. It now clears the display only if it has been calculated or if there is an operator (using isNew boolean).

## Fix rounding of decimal places

10 / 3 = 3.3333.. Those 3's would bleed out of the normal size of the container and stretch it. So to fix it I have used .toFixed(3) which has rounded any number up to three decimal places.

## Add Clear button

Clear button was added, resetting everything... Finally :P