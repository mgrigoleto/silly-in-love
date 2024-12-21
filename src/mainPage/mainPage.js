import { useEffect, useState } from 'react'
import './mainPage.css'

export default function Builder(){

    const ogTexts = [
        {"seen": false, "text": "If I wake up, will you be gone? I’d die in my sleep to live in your arms."},
        {"seen": false, "text": "Light the fire bright… Oh, let it blaze, alright… Oh, but you’re good to me…"},
        {"seen": false, "text": "Oh whether we like it or not… They say we can love who we trust."},
        {"seen": false, "text": "Wrap me in your arms."},
        {"seen": false, "text": "I fall for you. Over and over, over and over."},
        {"seen": false, "text": "She is everything to me… The unrequited dream."},
        {"seen": false, "text": "I love you because you’re understanding when I'm too shy to show my skin."},
        {"seen": false, "text": "Oh baby I’ll come when you call, I’ll come when you call."},
        {"seen": false, "text": "Don’t go, don’t go so easy… Don’t go, don’t go and leave me…"},
        {"seen": false, "text": "Oh, give me the heart on your neck…"},
        {"seen": false, "text": "But would you love me if I ruled the world?"},
        {"seen": false, "text": "Oh, and my love… Did I mistake you for a sign from God?"},
        {"seen": false, "text": "Your eyes are swallowing me…"},
        {"seen": false, "text": "Maybe I should let her go… But only when she loves me."},
        {"seen": false, "text": "Cause, baby, I’m the one who haunts her dreams at night."},
        {"seen": false, "text": "Your love has got me going like you couldn’t imagine."},
        {"seen": false, "text": "So sweet with a mean streak, nearly brought me to my knees."},
        {"seen": false, "text": "I reach for you on faith alone, and I’m still full of the love you want."},
        {"seen": false, "text": "I need you, I know… Just give me one more time…"},
        {"seen": false, "text": "Something so magic about you, don’t you agree?"},
        {"seen": false, "text": "Come a little closer, then you’ll see."},
        {"seen": false, "text": "You got me in a state of mind… Maybe it’s a heaven sign, let the angel’s fate decide."},
        {"seen": false, "text": "I can’t let you go now that I got it…"},
        {"seen": false, "text": "I want my life in two. Waiting to get there… Waiting for you…"},
        {"seen": false, "text": "I could watch you for a lifetime, you’re my favorite movie."},
        {"seen": false, "text": "I’ll do anything that you want."},
        {"seen": false, "text": "No regrets, just love. We can dance until we die."},
        {"seen": false, "text": "You lift my heart up when the rest of me is down."},
        {"seen": false, "text": "Drooling on the set to feel you. Blessing you with every kiss."},
        {"seen": false, "text": "I’ll love you ‘til the day that I die."},
        {"seen": false, "text": "I sleep so I can see you, and I hate to wait so long…"},
        {"seen": false, "text": "Can you feel… Can you feel my heart?"},
        {"seen": false, "text": "I can’t function without you. Me, you, deals, feels so right."},
        {"seen": false, "text": "And are you watching me, with eyes of a predator…?"},
        {"seen": false, "text": "Kissing and hope they caught us, whether they like or not. I wanna show you off…"},
        {"seen": false, "text": "Everyone’s looking for someone to hold, but I can't let you go…"},
        {"seen": false, "text": "No grave can hold my body down. I’ll crawl home to her."},
        {"seen": false, "text": "You’re the sunflower. I think your love would be too much."},
        {"seen": false, "text": "You exist behind my eyelids… Now I don't wanna wake up…"},
        {"seen": false, "text": "I’d eat you alive."},
        {"seen": false, "text": "You keep me under your spell. It’s like I waited too long."},
        {"seen": false, "text": "Trying to consume, the drug in me is you."},
        {"seen": false, "text": "It was no accident. You know my desire. We were tangled up like branches in a flood."},
        {"seen": false, "text": "Nothing in the world belongs to me but my love, mine, all mine."},
        {"seen": false, "text": "I don’t wanna go to sleep tonight when I can stay up thinking about you."},
        {"seen": false, "text": "Tangled in your trance and I’m certain you have got your hooks in me."}]

    const [texts, setTexts] = useState(ogTexts)

    function getAnotherText(){
        let temp = [...texts]
        if(temp.length>0){
            let counter = seenTextsNumber
            setSeenTextsNumber(counter+1)
            let index = Math.floor(Math.random() * temp.length)
            setCurentText(temp[index].text)
            temp.splice(index, 1)
            setTexts(temp)
        }
    }

    const [curentText, setCurentText] = useState("Click the button, silly")
    const [seenTextsNumber, setSeenTextsNumber] = useState(0)
      

    return (
        <>
        <div className="entire-block">
            <div className='card'>
                <img src={require('./me.jpg')}></img>
                <div className='card-content'>
                    <h2>A little piece of us :)</h2>
                    <div className='card-with-counter'>
                        <div className='message-box'>"{curentText}"</div>
                        <p>{seenTextsNumber}/{ogTexts.length}</p>
                    </div>
                    <button onClick={getAnotherText}>RANDOM QUOTE</button>
                </div>
                <img src={require('./them.jpg')}></img>
            </div>
        </div>
        </>
    )
}