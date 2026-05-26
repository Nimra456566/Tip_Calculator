Q1. How to run app?

1.  Download the project folder
2.  Open index.html in any browser

No installation required. No commands needed.

Q2.
why i choose this design and stack

I used vanilla HTML, CSS, and JavaScript because I am not
yet confident with React professionally. As I work more,
I will move towards React. For this task, plain JS was
enough and gets the job done well.

**Design Decision 1 — Two Card Layout:**
I split the screen into two cards (left: inputs, right: output)
using Flexbox so the user can see inputs and results
at the same time without scrolling.

**Design Decision 2 — Green Output Card:**
I made the output card green so it stands out clearly
from the dark input card. The per person amount is the
biggest text because that is the most important number
for the user.

 Q3. Responsive & Accessibility

**Responsive:**
On a 360px phone: the two cards stack on top of each other
(input card first, output card below) so the user can
scroll naturally.
On a 1440px laptop: both cards appear side by side
using Flexbox.

**Accessibility I handled:**
All inputs have proper labels so screen readers
can read them.
Error messages appear inline near the wrong field
so the user knows exactly what to fix.

**Accessibility I skipped:**
I did not add keyboard focus styles on buttons.
With more time I would add a visible outline on
focus so keyboard users can see which button
is selected.

 Q4. AI Usage

I used Claude AI (claude.ai) for help in this project.

Where I used AI:

 Understanding the assignment requirements
 Some CSS styling help
Validation logic guidance
 Generating README.md

**What I changed from AI output:**

 Claude used rem units in CSS but I changed them
  to px because I understand pixels better.
 Claude used CSS Grid for layout but I changed it
  to Flexbox because I am more comfortable with it.

Note:
A good coder knows how to use both coding skills
and tools together. AI helped me understand concepts
faster but all the code understood by me.

 Q5. Honest Gap

**What is not polished:**
Media query is not implemented in my app.
On a mobile screen (360px) both cards appear
side by side which is not a good experience
for mobile users.

**What I would fix with another day:**
I would learn media query properly and make
the app fully responsive so that on mobile
the cards stack on top of each other and
the app looks good on all screen sizes.
