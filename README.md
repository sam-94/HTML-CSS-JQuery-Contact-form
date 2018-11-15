# HTML-CSS-jQuery-Contact-form

[Demo](https://sam-94.github.io/HTML-CSS-JQuery-Contact-form/)

## Browser Support:
(Tested on following browsers and confirmed that the Form is working.)
* Latest Chrome
* Latest Firefox
* Opera
* Android 2.2+ or earlier

## Installation:

##### Add style.css to the head of your document:
```
<link rel="stylesheet" type="text/css" href="style.css"> 
```

##### Add Jquery before closing body tag (Use Jquery 3.3.1 or earlier):
```
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
```
##### Add main.js before closing body tag & after jQuery:
```
<script src="main.js"></script>
```
##### Create the form in your HTML:
```
    <main>
       <form name="contact form" id="contact" method="post" class="contact-form">
	    <input id="first_name" class="form-wrap" type="text" name="First_name" placeholder="First Name" />
           <input id="last_name" class="form-wrap" type="text" name="Last_name" placeholder="Last Name" />
           <input id="email" class='form-wrap' type="email" name="Email" placeholder="Email Address"/>
           <textarea id="message" class="form-wrap" name="Message" placeholder="Message"></textarea>
           <input type="submit" id="submit" class="submit-btn" value="Send Message" />
        </form>
    </main>
  ```
  
## Support:
If you need help using form, have a suggestion or idea, or have found a bug, please create an issue.
