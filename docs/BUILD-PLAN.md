## THE BUILD PLAN

1. Here's a micro-iteration plan for building the carousel:

2. Scaffold the component shell. Create ImageCarousel.jsx that accepts an images prop and renders a single hardcoded <img> tag using images[0]. Import it in your app and verify the first image displays correctly.

3. Add index state and image switching logic. Introduce a useState hook to track the current index, and wire it to display images[currentIndex]. No buttons yet — just confirm the right image renders when you manually change the initial state value.

4. Add the Next and Previous buttons. Render two buttons and connect them to increment/decrement the index. Test that clicking forward and backward changes the image, then confirm the index doesn't go out of bounds (clamp or wrap the value — pick one behavior and stick with it).

5. Add the active image indicator. Render a dot or small icon for each image in the array. Highlight the one matching the current index using a conditional class or style. Verify the correct dot is active as you click through.
Make the indicators clickable. Allow clicking a dot to jump directly to that image. Test that clicking any dot updates both the displayed image and the highlighted indicator.

6. Handle edge cases and prop validation. Test with an empty array, a single image, and a very large array. Add a guard that renders nothing or a fallback message when images is empty. Optionally add PropTypes to document the expected prop shape.

7. Polish the layout and basic styling. Add minimal CSS or inline styles so the buttons, image, and dots are positioned cleanly (buttons flanking the image, dots centered below). Confirm the layout holds up with both portrait and landscape images.

8. Final integration review. Drop the carousel into a realistic page context with real image URLs. Verify nothing breaks when the parent re-renders or the images prop changes. This is also a good moment to extract any magic numbers or repeated styles into named constants.
