let homePageHTML = `<section class="video-grid"></section>`;

let videoPageHTML = `
<div class="video-page">
    <div class="current-video">
        <div>
            <video class="video-play" controls="controls" autoplay>
                <source src="assets/video-page/video/Aero_India.mp4" type="video/mp4" />
        </div>
        <div class="about-video">
            <div class="current-video-title">Aero India 2023 Bengaluru</div>
            <div class="video-interface">
                <div class="interface-left-section">
                    <div class="author-image-div"><img class="author-image"
                            src="assets/video-page/profile-picture/jod.png" /></div>
                    <div class="author-name-subscribers">
                        <div class="author-name">Indian Aiforce</div>
                        <div class="author-subscribers">432k Subscribers</div>
                    </div>
                    <div><button class="subscribe-button">Subscribe</button></div>
                </div>
                <div class="interface-right-section">
                    <div class="like-dislike-button">
                        <div><button class="like-button"><ion-icon name="thumbs-up-outline"></ion-icon>Like</button></div>
                        <div><button class="dislike-button"><ion-icon name="thumbs-down-outline"></ion-icon>Dislike</button></div>
                    </div>
                    <div><button class="share-button"><ion-icon name="share-social-outline"></ion-icon>Share</button></div>
                    <div><button class="download-button"><ion-icon name="arrow-down-outline"></ion-icon>Download</button></div>
                </div>
            </div>
        </div>
    </div>
    <div class="video-recommendation"></div>
</div>
`;

let musicPageHTML = `
<div class="main-content-audio">
    <div class="right-section">
        <div class="audio-image"><img src="assets/music-page/thumbnails/thumbnail-1.jpg"></div>
        <div class="audio-player"><audio controls autoplay loop>
                <source src="assets/music-page/song/videoplayback.ogg" type="audio/ogg">
            </audio></div>
        <div class="audio-title">Rondeau des fleurs et des rapieres</div>
    </div>
    <div class="left-section">
        <div class="audio-navigation">
            <button>UP Next</button>
            <button>LYRICS</button>
            <button>RELATED</button>
        </div>
        <div class="audio-sort">
            <button>All</button>
            <button>Familier</button>
            <button>Instrumental</button>
        </div>
        <div class="audio-recomendation"></div>
    </div>
</div>
`;

let shortsPageHTML = `
<div class="scroll-video-button">
<button class="scroll-up-button" onclick="scrollUp();">
  <ion-icon name="arrow-up-outline"></ion-icon>
</button>
<button class="scroll-down-button" onclick="scrollDown();">
  <ion-icon name="arrow-down-outline"></ion-icon>
</button>
</div>
<div class="shorts-video-container"></div>
`;

let communityTabHTML = `
<div class="com-container">
<div class="com-create-post">
    <div class="com-post-profile">
        <img class="com-creator-image" src="assets/creator-page/khushboo.png" />
    </div>
    <input class="com-input-post" type="text" placeholder="Type to create Post">
    <button class="com-post-button"><ion-icon name="paper-plane-outline"></ion-icon>Post</button>
</div>
<div class="com-indi-container"></div>
</div>
`;

let loginPageHTML = `
<div class="login-container">
<h1 class="login-title">Choose Account</h1>
<div class="login-box"></div>
</div>
`;

let creatorPageHTML = `
<div class="cp-viewport">
    <div class="cp-content"></div>
</div>
`;


let videoUploadPageHTML = `
<div class="upload-container">
<div class="upload-section">
    <div class="up-top-section">
        Upload Video
    </div>
    <div class="up-bottom-section">
        <ion-icon class="up-icon" name="cloud-upload-outline"></ion-icon>
        <div class="up-instructions">Drag and drop file to uplaod</div>
        <div class="up-discription">Your videos will be private until you publish them.</div>
        <button class="up-button">UPLOAD</button>
    </div>
</div>
</div>
`;