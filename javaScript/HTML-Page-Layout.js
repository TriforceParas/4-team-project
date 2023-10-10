let homePageHTML = `<section class="video-grid"></section>`;

let videoPageHTML = `
<div class="video-page">
    <div class="current-video">
        <div>
            <video class="video-play" controls="controls" autoplay>
                <source src="assets/video-page/video/Red birb.mp4" type="video/mp4" />
        </div>
        <div class="about-video">
            <div class="video-title">Red Parrot doing HUIHUIHUIHUI</div>
            <div class="video-interface">
                <div class="interface-left-section">
                    <div class="author-image-div"><img class="author-image"
                            src="assets/video-page/profile-picture/jod.png" /></div>
                    <div class="author-name-subscribers">
                        <div class="author-name">Mr. Red Parrot</div>
                        <div class="author-subscribers">432k Subscribers</div>
                    </div>
                    <div><button class="subscribe-button">Subscribe</button></div>
                </div>
                <div class="interface-right-section">
                    <div class="like-dislike-button">
                        <div><button class="like-button"><img src="images/icons/like.png" width="17px">Like</button></div>
                        <div><button class="dislike-button"><img src="images/icons/dislike.png" width="17px">Dislike</button></div>
                    </div>
                    <div><button class="share-button"><img src="images/icons/share.png" width="17px">Share</button></div>
                    <div><button class="download-button"><img src="images/icons/download.png" width="13px">Download</button></div>
                </div>
            </div>
        </div>
    </div>
    <div class="video-recommendation">
    
    </div>
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
        <div class="audio-recomendation">

        </div>
    </div>
</div>
`;

let shortsPageHTML = `
<div class="scroll-video-button">
<button class="scroll-up-button">
  <ion-icon name="arrow-up-outline"></ion-icon>
</button>
<button class="scroll-down-button">
  <ion-icon name="arrow-down-outline"></ion-icon>
</button>
</div>
`;

let profilePageHTML = '';