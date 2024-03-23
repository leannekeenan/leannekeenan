<h1>ChromaBlend: A Random Background Color Generator</h1>

<p>
     This is a simple web application that generates a random background gradient. The gradient smoothly transitions between two random colors, creating a visually dynamic effect
</p>

<span>
Link to project can be found here: <a href="https://chromablend.netlify.app">https://chromablend.netlify.app</a>
</span>

<p align="center">
     <img src="https://img.freepik.com/premium-photo/light-bulb-with-colorful-paint-splashes-black-background_887999-890.jpg" alt="">
</p>

<h2>
How It's Made:
</h2>

<p>
Languages: HTML, CSS, JavaScript

The HTML file (index.html) defines the structure of the web page. It includes a <div> element with the class spinner, which serves as the container for the background gradient.

The CSS file (style.css) contains the styling rules for the web page. It sets the initial styles for the body and html elements, ensuring no margin, padding, or overflow. The .spinner class defines the styles for the background container, setting its dimensions to cover the entire viewport and applying the rainbow animation for the background gradient effect.

 The JavaScript file (script.js) contains the logic for generating random colors and applying them to the background gradient. The getRandomColor function generates a random hexadecimal color code. The setRandomBackgroundColor function sets the initial background gradient with two random colors, ensuring both colors are unique. The changeBackgroundColor function changes the background gradient every 20 seconds by generating two new random colors. The application uses JavaScript's setInterval function, automatically changing the background gradient every 20 seconds. The gradient smoothly transitions between colors using CSS animations (@keyframes). 
</p>

<h2>
Lessons Learned:
</h2>

<p>
This project marks my introduction to random color generation, achieved through a "for" loop implementation. Leveraging the digit values within the loop, I dynamically crafted hexadecimal color codes. These codes were then utilized to define the CSS colors, infusing the project with vibrant and ever-changing backgrounds.

The project also implements CSS animations to create a smooth transition effect for the background gradients.  Building this application allowed me to use CSS animations, and add a dynamic visual effect to web pages, enhancing user experience.

In conjunction with the animation in CSS, interval-based updates were applied to allow the background gradient to be updated automatically.

Overall, this project serves as a practical exercise for learning various web development concepts and techniques
</p>

<h2>
Examples:
</h2>

<p>
Projects I have worked on similar to this include:
</p>

<ul>
   <li> <a href="https://codepen.io/lkeenan/pen/ExLVjJR">#100 DEVS Class 12 HW: Color Picker [HTML, CSS, & JavaScript]</a>
   </li>
</ul>

