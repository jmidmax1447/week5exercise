## What did you build?
The feature I built is an image carousel component that can be reused in React. The component takes an array of images, which can be locally stored or pulled from the internet. I opted to use random images from the internet for testing. It has two navigation options: you can move through the carousel using the side buttons, or you can click on the index dots at the bottom, which show where you are in the carousel.

## How did micro-iteration feel?
Working in small steps through micro‑iteration felt pretty natural because it felt like an evolution of watching a tutorial on how to make the feature. It was almost like I was following a tutorial, but I was able to stop and ask questions or even change certain aspects of the feature in real time.


## What did self-review catch?
When I asked the AI to self‑review, it caught three things in the code. They weren’t major problems, but they were helpful suggestions to improve accessibility. The first thing it caught was that the code was calling a useState hook during a render, which could potentially cause an extra re‑render, so it fixed this by creating a safeIndex variable. The second thing it caught was missing accessibility attributes on the arrow symbols, which screen readers cannot interpret, so it added ARIA attributes with text descriptors. The last thing it caught was that the spans hosting the dots at the bottom of the carousel also didn’t have any accessibility options, so it added ARIA labels to those as well.

## Tool Impressions
What I liked about Claude Web was that I felt like I had more authority and more opportunity to learn while using the tool. Compared to the CLI tools, I felt like most of the coding was done for me there, and I did not actually look at the code much. I mostly described the changes I wanted it to make. With the browser version, I got to read and have the code explained to me before I implemented it, and the step by step process felt like a tutorial with in depth explanations. Because of that, I learned a lot more about certain coding techniques.

## Self-Review Patterns
I think the AI didn’t catch a lot of the issues I encountered with the component I was developing. For example, the CSS for positioning the buttons was hard to get correct, so I had to keep telling the AI over many prompts what was not working. It took about three or four prompts before it finally corrected all the mistakes. At first, the buttons would move because they didn’t have a fixed position and were using flex display. Then they stayed horizontally fixed, but vertically they would shift up and down with taller images. Eventually, it got the code right. However, when it came to the actual image array logic, most of the code was correct, and it handled any errors it found promptly and effectively.

## Browser vs CLI Comparison
As I mentioned, I think the browser‑based experience is a lot better when you are learning new concepts and exploring the code compared to the CLI, which pretty much develops all the code and edits the files by itself. However, I do not think this is inherently bad, because if you already know how to code a certain feature or component, the CLI is perfect since it can do it for you instantly and can save time in your workflow. But if you are not sure how to tackle a certain feature or component, you can consult with the browser‑based AI, and having it explain your options as well as help you learn more in the long run.

## When would yo uuse micro-iteration + self-review?
I think micro‑iteration and self‑review would be beneficial for concepts you do not fully understand. If you incorporate it into your workflow, you will not only get the job done quicker and more efficiently than trying to find the information yourself online, but you will also learn these concepts and be more prepared the next time you develop something similar. I think a good time to skip micro‑iteration and self‑review is when you are confident in what you are developing and understand how it works on a deeper, more methodical level.
