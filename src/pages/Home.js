import React from "react";

function Home() {
    return (
        <>
        <h1>Charlotte Lin</h1>
        <h2>computer programmer + digital artist</h2>
        <SocialText text="github.com/charlottexlin" icon="github"/>
        <SocialText text="linkedin.com/charlotte-lin-nyu" icon="linkedin"/>
        </>
    );
}

// Social text: small text on landing page, with icon
function SocialText([text, icon]) {
    return (
        <>
        <SocialIcon icon={icon}/>
        <div className="socialText">{text}</div>
        </>
    );
}

// Social icon: image to go on the left of social links
function SocialIcon([icon]) {
    return (
        <>{icon}</>
    );
}

export default Home;