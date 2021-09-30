## Important Note - Please Read

A quick note before reading on: I'mn afraid due to some restrictions on my laptop I couldn't download Sketch to open the file that was sent. I also attempted to find an online Sketch file viewer but upon opening the sketch file, all the spacing from button to button was different and it seemed skewed. As a result the app was build by "eyeballing" the spacing and sizes of everything. In a normal work situation, I would always ensure the build is pixel perfect according to the design I am sent, and would ensure that I have access to the appropriate programms required to view the design with accurate pixel representation .

## Project Decisions

Please see below for an outline of each technology used in this project, and the reasoning behind each choice.

### React Architecture

- I chose to use React because I felt this project benefitted from the single flow of state, and component architecture.

The parent <CalculatorApp /> component is what holds the state of the calculator. However the functionality has been extracted to a separate file titled calculator-logic.js inside the /logic folder - the purpose of this is twofold:

1. It allows for seperation of concerns, allowing the React Component file to manage event handlers which then call logic functions that return the new state.
2. It allows for testing of the logic functions within the calculator-logic.js file as they are not nested within a React Component.

### Jest - Unit Testing

I have implemented some tests which verify the calculator-logic functions run correctly. Please note, due to the time crunch of this project, I didn't implement as many tests as would be necessary for a production application. In a real work environment I would spend the time to write tests for every possible scenario and/or pass it to the assurance engineer to produce more tests.

## Error handling

You'll notice in the CalculatorApp.jsx file on the handleOperatorInput (line 43) and handleValueInput (line 60) methods I have a comment which states 'do something'. This is to point out that if invalid input is passed in, there should some some error handling code here. It may also be considered a hack attack. In this particular situation, it's not an issue, however in a real world aplication with backend implemented, a discussion for correct error handling would be ideal.

### Webpack and NPM

I'm using NPM, Webpack and Babel for multiple reasons listed below:

- Easily manage dependancies
- Running a local dev server
- Pre-processing of all types of files including JS, SCSS, font etc.
- To generate content hashed bundles for browser caching (performance benefits).
- To transpile modern Javascript features via babel in order for the finished bundle to be compatible with older browsers.
- To minify all html, js and css files, as well as split bundles into multiple smaller files for performance benefits.

### Accessibility

- Aria Attributes
  Regarding accessibility, there is little to no information online about specifically making a calculator accessible. I did consider multiple options, such as wrapping the numpad buttons in a list. However I decided to go with a div with a role="group", in addition to an aria-label="calculator numpad" and a aria-describedby attribute on the child buttons linked to the parent div. In addition, for the buttons which contain symbols as textContent. I used an aria label to explicitely state the correct word, rather than relying on the screen readder to read the symbol correctly.

- Tab Order
  In addition to the above, I ensure correct tab order by correct html placement of each button based on the calculator design that was provided.

- Keyboard Accessibility
  I added an event listener to the window, listening to keyboard inputs, and had some validation which checked the key that was pressed. if the key was a valid input, the handler functions were called.

- role="live"
  I used the semantically correct <output> element for the calculator result panel so as to automatically read the inputs/result.

### HTML & CSS/SCSS

In this project I utilised the BEM naming convention which stands for 'Block Element Modifier'. Using this methodology, blocks are top level abstractions (sections or components), with coupled child elements being named after their parent (block), followed by two underscores and the name of the child, for example:

- Block: main-nav
- Elements: main-nav**list, main-nav**item, main-nav\_\_link

Modifiers are used to manipulate the styles of blocks without global effect:

- Modifier: main-nav\_\_link--purple
- this would turn the link color purple only for the link with this modifier class.

### Benefits of BEM?

- It allows for reusable component styles across an entire platform.
- It allows for a the same specificity level across the board. Preventing the notorious hunt to figure out why your styles are being overwridden by seemingly unrelated declerations.

### Component based architecture

In addition to the BEM methodology, I utilised a component based file structure (similar to the 7-1 architecture, without the top level folders), which makes it easy to locate the styles for every component/block, and therefore make changes.

### SCSS

- I utilised SCSS because it adds many useful features that wouldn't be possible with vanilla CSS. For example, the use of mixins for media queries in combination with a map for the viewport breakpoints makes it easy to globally change the breakpoint values if ever required and make sure all your media queries use the same breakpoint values.
- The nesting structure perhaps makes it slightly nicer to read and udnerstand what elements are block versus children versus modifiers.

### Technologies I chose to ommit

- Redux
- I chose to ommit Redux because this project was a small single page project and I didn't feel it would benefit from more complex state management than what React already provides.

- React Router
- I chose to ommit React Router because this is a simngle page application.
