<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <nav class="navbar">
            <div class="logo"><img src="1c54f7b06d7723c21afc5035bf88a5ef-removebg-preview.png" alt=""></div>
            <div class="menu">
                
                <a  href="#skills">My Skills</a>
                <!-- <a href="#">Portfolio</a> -->
                <a  href="#experience">Experience</a>
                <a class="testimonial" href="#testimonial">Testimonial</a>
                <a  href="#contact">Contact Me</a>
                <div  class="menu-button">
                    <button onclick="toggleMenu()"><img src="icons8-menu-48.png" alt="menu"></button>
                    <div class="menu-content" id="menuContent">
                        <a href="#contact">Contact Me</a>
                        <a href="#portfolio">Projects</a>
                        <a href="#experience">Testimonial</a>
                    </div>
                </div>

            </div>
        </nav>

        <section id="about" class="about-section">
            <div class="about-content">
             
                <h1 class="animated-heading" >Hi  &nbsp;I‘&nbsp;am   <span class="auto-type"></span></h1>
                <p>A professional Web Developer &lt;/&gt; <br>
                    Our main Goal to help & Satisficed the Local & 
                    Global <br>Clients By Web Development Solutions.</p>
                <div class="logos">
                    <a href="https://www.linkedin.com/in/tayyab-ilyas-367a032b6/"> <img class="icons"
                            src="assets/icons8-linkedin-48 (1).png" alt=""></a>
                            <a href="https://www.instagram.com/codewithustad/"><img class="icons" src="assets/icons8-instagram-48 (1).png" alt=""></a>
                    <a href="https://www.facebook.com/codewithustaad"><img class="icons" src="assets/icons8-facebook-48 (2).png" alt=""></a>
                    <a href="#"><img class="icons" src="assets/icons8-twitter-48.png" alt=""></a>
                </div>
                <button class="cvbtn">Hire Me</button>

            </div>
    
        <div class="mypic"><img class="none-img-850" src="My pic (Favrouite).png" alt="mypic">         <div class="after700pxpic"> <img  src="programmer imge ai.png" alt="mypic"></div>
        </div>
        </section>

        <section id="skills" class="skills-section">
            <h2>My Skills</h2>
            <div class="skills-grid">
                <!-- Add skill items here -->
                <div class="skill-item"><img src="svgies/python-5.svg" alt=""></div>
                <div class="skill-item"><img src="svgies/logo-javascript.svg" alt=""></div>
                <div class="skill-item"><img src="svgies/typescript-2.svg" alt=""></div>
                <div class="skill-item"><img src="svgies/html-1.svg" alt=""></div>
                <div class="skill-item"><img class="w_small" src="svgies/css-3.svg" alt=""></div>
                <div class="skill-item"><img src="svgies/bootstrap-5-1.svg" alt=""></div>
                <div class="skill-item"><img class="w_small" src="svgies/tailwind-css-2.svg" alt=""></div>
                <div class="skill-item"><img src="svgies/react-2.svg" alt=""></div>
                <div class="skill-item"><img class="w_nextjs_small" src="svgies/nextjs-13.svg" alt=""></div>
                <div class="skill-item"><img src="svgies/wordpress-icon-1.svg" alt=""></div>
                <div class="skill-item"><img src="svgies/git-bash.svg" alt=""></div>
                <div class="skill-item"><img  src="svgies/github-icon-2.svg" alt=""></div>
                <!-- Add more skills as needed -->
            </div>
        </section>

        <section id="portfolio" class="portfolio-section">
            <h2>Projects <img class="tick-mark" src="icons8-symantec-32.png" alt="tick mark"></h2>
            <div class="portfolio-grid">
                <!-- Add portfolio items here -->
                 
                <div class="portfolio-item"><img src="portfolio pic.png" alt="Project 1"></div>
                <div class="portfolio-item"><img src="desi sweets pic.png" alt="Project 1"></div>
                <div class="portfolio-item"><img src="tic tac toe.png" alt="Project 1"></div>
                <div class="portfolio-item"><img src="stickynotes.png" alt="Project 1"></div>
                <div class="portfolio-item"><img src="sync study we shot.png" alt="Project 1"></div>

                <!-- Add more portfolio items as needed -->
            </div>
        </section>

        <section id="experience" class="experience-section">
            <h2>Experience</h2>
            <div class="experience-list">
                <!-- Add experience items here -->
                <div class="experience-item">
                    <h3>Web & Mobile App Developer</h3>
                    <p class="company-name">Freelancer</p>
                    <p>Skilled web and mobile app developer proficient in creating dynamic, user-friendly web applications and high-performance iOS and Android apps. Passionate about delivering innovative solutions to enhance user experiences.</p>
                </div>
                <!-- Add more experience items as needed -->
            </div>
        </section>

        <section id="testimonial" class="testimonial-section">
            <h2>Testimonial</h2>
            <div class="testimonial-item">
                <img src="My pic (Favrouite) - Copy.png" alt="Testimonial">
                <p>"My Portfolio & My feedback😊"</p>
                <p>"[ My Self ] designed a fantastic portfolio website that showcases their skills and creativity. That u are Using.  The design is both beautiful and functional. Highly recommend for my self for web development!"</p>
                <p><a href="https://portfolio-tayyab.netlify.app/">link: 🔗</a></p>
            </div>
            <div class="testimonial-item">
                <img src="testimonials1.jpg" alt="Testimonial">
                <p>"Beautiful feedback By - Ahmed"</p>
                <p>"[ Tayyab ] developed a stunning and functional portfolio website for me. Their creativity and technical expertise exceeded my expectations. Highly recommend [ Tayyab ] for web development!"</p>
                <p><a href="https://portfolio-tayyab.netlify.app/">link: 🔗</a></p>

            </div>
            <div class="testimonial-item">
                <img src="Abdullah cn.png" alt="Testimonial">
                <p>"Excellent feedback By - Abdullah"</p>
                <p>"[ Tayyab ] created a beautiful and user-friendly website for my sweets business. Their professionalism and attention to detail have greatly improved my customers' online experience. Highly recommend!"</p>
                <p><a href="https://desi-sweets.netlify.app/">link: 🔗</a></p>

            </div>
        </section>

        <section id="contact" class="contact-section">
            <h2>Contact Me</h2>
            <form>
                <input type="text" placeholder="Your Name">
                <input type="email" placeholder="Your Email">
                <textarea placeholder="Your Message"></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
<script>
var typed = new Typed(".auto-type", {
strings: ["Tayyab", "Web Developer"],
typeSpeed: 156,
backSpeed: 154,
loop: true
})
</script>
    <script src="script.js"></script>
</body>
</html>


<!-- 

-->