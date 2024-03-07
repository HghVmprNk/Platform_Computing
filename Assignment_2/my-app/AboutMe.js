import React from 'react';
import './about_me.css'; // Import CSS file


function AboutMe() {
    

    return (
        <div>
            <header className="header">
                <h1>
                    <b>About Me </b>
                </h1>
            </header>
            <a href="https://github.com/HghVmprNk/Platform_Computing.git" className="styled-link">
                <button className="styled-button"><b>My Github</b></button>
            </a>
            <a href="https://www.goodreads.com/review/list/24283737?ref=nav_mybooks" className="styled-link">
                <button className="styled-button"><b>My Goodreads</b></button>
            </a>
            

            <br /><hr />
            <h2 className="rounded-header">
                My Journey to CS
            </h2>

            <p>
                Hello, my name is Nicole Lopez. I am 24 years old, senior at California State
                University Of San Bernardino. I picked the major because (mainly) I had to declare
                something. I figured, since I am constantly on the internet I might as well
                do something with it. My road to computer science is very boring. Shockingly enough,
                I didn't really learn how to code. Maybe it has to do with the classes that I took.
                I am a transfer student, and I only took c++.
                But when I started classes here (right when the pandemic started) my classmates
                already knew 5 programming languages. The classes, hardly involved how to program,
                more so theory. Then I find out that my sister - who is studying criminology- let
                me know that she knew how to program python. I ask "how?" she said through her class.
                That is the whole premise of it. "What, how come I didn't know" I really wanted to
                learn python. She said, that some professors will hide the programming classes
                so that computer science students wouldn't fill it. So, here I am a senior, bound to
                graduate in May with my programming skills fitting a beginner. I obviously did not plan
                everything well. However! I have ideas, and I was always heard you learn better doing
                projects. This way you don't get stuck in a tutorial loop.
            </p>

            <h3 className="rounded-header">
                Reading
            </h3>

            <div className="gallery">
                <a target="_blank" href="IMG_7518.heic">
                    <img src="IMG_7518.heic" alt="readingbook" width="600" height="400" />
                </a>
            </div>
            <div className="gallery">
                <a target="_blank" href="IMG_7260.HEIC">
                    <img src="IMG_7260.HEIC" alt="shelves" width="600" height="400" />
                </a>
            </div>
            <p>
                I love to read. It is probably my only hobby besides rotting in my bed. But I
                don't read self-help books. Nor educational books. You won't catch me reading
                about AI on my downtime. I (like the majority of the girlies) love fantasy,
                romance, YA, science fiction, contemporary. Fun books, as I tell my father
                whenever he asks me why I don't buy anything that will develop my mind / career.
                Something about losing yourself in a book just fills a void in me. When I downloaded
                TikTok 3 years ago, I discovered booktok. I had maybe 85 books in my collection,
                now it's <b>300.</b> Have I read everything? Absolutely not. This year, I put myself
                in a year-long book buying ban. Booktok influenced me so much that I was just
                buying and not reading. Book shopping is a whole different hobby. Although, I did
                make an exception to this buying ban for Crescent City 3. Been waiting 2 years since
                that epic ending from book 2. Goal is to read 100 books.
            </p>

            <h4 className="rounded-header">
                Random thoughts
            </h4>
            <div id="clouds">
                <div id="white">
                    <p>
                        Since I can't seem to think of something else to type, I would write about
                        my favorite books. This might be very basic, depending on what side
                        of TikTok you're on. Let me start with (my) classics.
                    </p>
                </div>
            </div>
            <br />
            <div className="gallery">
                <a target="_blank" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeqU7Dc1qSO6FsmJNoEK3DOki1NbPhUj1SfAMS4klbLRwhpai9QFCdvOfoTaq3hbP8hsI&usqp=CAU">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeqU7Dc1qSO6FsmJNoEK3DOki1NbPhUj1SfAMS4klbLRwhpai9QFCdvOfoTaq3hbP8hsI&usqp=CAU" alt="mortal instruments"
                        width="600" height="400" />
                </a>
                <div className="desc"> <i>The Mortal Instruments</i></div>
            </div>
            <div className="gallery">
                <a target="_blank" href="https://m.media-amazon.com/images/I/71+6yF167NL._AC_UF1000,1000_QL80_.jpg">
                    <img src="https://m.media-amazon.com/images/I/71+6yF167NL._AC_UF1000,1000_QL80_.jpg" alt="hushhush"
                        width="600" height="400" />
                </a>
                <div className="desc"><i>Hush Hush Series</i></div>
            </div>
            <div className="gallery">
                <a target="_blank" href="https://m.media-amazon.com/images/I/619oFR2QXXL._AC_UF1000,1000_QL80_.jpg">
                    <img src="https://m.media-amazon.com/images/I/619oFR2QXXL._AC_UF1000,1000_QL80_.jpg" alt="eliza"
                        width="600" height="400" />
                </a>
                <div className="desc"><i>Eliza and Her Monsters</i></div>
            </div>
            <div className="gallery">
                <a target="_blank" href="https://m.media-amazon.com/images/I/81kkr85m+OL._AC_UF1000,1000_QL80_.jpg">
                    <img src="https://m.media-amazon.com/images/I/81kkr85m+OL._AC_UF1000,1000_QL80_.jpg" alt="kingdomofash"
                        width="600" height="400" />
                </a>
                <div className="desc"><i> Book 8 in the <b>Throne Of Glass Series</b></i></div>
            </div>

            <p>
                I read all throughout high school. This had me and my friends in a chokehold.
                A story involving angels, demons, werewolves, vampires, faeries. A girl
                figuring out she is part of a race of shadowhunters that kills demons
                to maintain the balance on earth. While trying her hardest to rescue her
                mother from the evil Valentine who is her evil biological father.
                <i> Hush Hush Series </i> THIS WAS EVERYTHING in 8th grade. Paranormal romance
                between a girl and a fallen angel. Funny, I re-read the first book a year ago, just
                to reminisce and I was so <b> BORED </b>. The story was moving at a slow pace and quickly
                put it down. <b> Current Favorites </b>, <i> Eliza and her monsters,
                Kingdom of Ash,
                </i>
                I think about these books all the time. Kingdom of Ash marks me <i>FINALLY </i> completing
                a series after 7 years of putting it off. Eliza, well, that was the story I needed
                after binge-reading an author's entire book catalog for the month of January.
            </p>
        </div>
    );
}

export default AboutMe;
