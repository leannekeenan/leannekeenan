<h1>TRYLUCK Games Coin Flip</h1>

<p>
TRYLUCK's coin flip app is the ultimate companion for decision-making. With a simple flick, it flips a virtual quarter and meticulously records every outcome, be it heads or tails. Leave chance to fate as you track your luck, making life's choices a thrilling adventure with just a tap of your finger.
</p>

<span>
Link to the project can be found here: <a href="https://tryluckgames-coinflip.netlify.app/">https://tryluckgames-coinflip.netlify.app/</a>
</span>

<p align="center">
     <img src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/we-have-three-confirmations-the-crystal-ball-the-magic-dave-carpenter-no-index.jpg" alt="">
</p>

<h2>
How It's Made:
</h2>

<p>
CSS, HTML, JAVASCRIPT
	
The concept was to build an app that can be easily used to help people who have difficulty making decisions
and could use a virtual coin to let fate decide their choice for them. 

The HTML part defines the structure of the webpage. It includes a header, a body, and various div elements that contain different sections of the page. The CSS part is responsible for the visual appearance of the webpage. It sets the background gradient, defines the layout of elements, and styles the buttons and text. The JavaScript part adds functionality to the webpage. It starts by declaring variables for the number of heads and tails (initialized to 0) and selecting elements from the HTML using their class and id attributes.

An event listener is added to the "Flip" button using the addEventListener function. When the button is clicked, a random number is generated (Math.floor(Math.random() * 2)), which will be either 0 or 1. This number determines whether the coin lands on heads or tails.  If the random number is 1 (representing heads), the coin animation is set to "spin-heads" and the heads variable is incremented by 1. If the random number is 0 (representing tails), the coin animation is set to "spin-tails" and the tails variable is incremented by 1.  After the animation completes (3 seconds), the statistics (number of heads and tails) are updated using the updateStats function.  The disableButton function is called to disable the "Flip" button for 3 seconds to prevent multiple flips before the animation finishes.  Another event listener is added to the "Reset" button. When clicked, it stops the coin animation, resets the heads and tails variables to 0, and updates the statistics.
</p>

<h2>
Lessons Learned:
</h2>

<p>
JavaScript Event Handling, Random Number Generation, Updating and Manipulating HTML Elements, Animation and Timing,
User Experience Considerations
</p>

<h2>
Examples:
</h2>

<p>
Projects I have worked on similar to this include:
</p>

<ul>
   <li> 
	<a href="https://github.com/leannekeenan/leannekeenan/tree/main/Magic%20Eight%20Ball">Lumen Entertainment's Magic Eight Ball</a>
   </li>
</ul>
