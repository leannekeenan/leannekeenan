fetch("https://api.nasa.gov/planetary/apod?api_key=hZ7NOTCBoWdhjN98rrFroBgKPBczMQsD9Ol60StZ")
.then(res => res.json())
.then(data => {
    console.log(data);
    document.querySelector('.date').innerText = new Date().toDateString();
    document.querySelector('h2').innerText = data.title;
    document.querySelector('.description').innerText = data.explanation;

    // Set the background image of the body
    document.querySelector('body').style.backgroundImage = `url(${data.url})`;
})
.catch(error => console.error('Error:', error));
