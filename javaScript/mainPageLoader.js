let homePage = `
<section class="video-grid">
        <div class="video-preview">
          <div class="thumbnail-row">
            <img class="thumbnail" src="thumbnails/thumbnail-1.webp">
            <div class="video-time">14:20</div>
          </div>
          <div class="video-info-grid">
            <div class="channel-picture">
              <img class="profile-picture" src="channel-pictures/channel-1.jpeg">
            </div>
            <div class="video-info">
              <p class="video-title">
                Talking Tech and AI with Google CEO Sundar Pichai!
              </p>
              <p class="video-author">
                Marques Brownlee
              </p>
              <p class="video-stats">
                3.4M views &#183; 6 months ago
              </p>
            </div>
          </div>
        </div>

        <div class="video-preview">
          <div class="thumbnail-row">
            <img class="thumbnail" src="thumbnails/thumbnail-2.webp">
            <div class="video-time">8:22</div>
          </div>
          <div class="video-info-grid">
            <div class="channel-picture">
              <img class="profile-picture" src="channel-pictures/channel-2.jpeg">
            </div>
            <div class="video-info">
              <p class="video-title">
                Try Not To Laugh Challenge #9
              </p>
              <p class="video-author">
                Markiplier
              </p>
              <p class="video-stats">
                19M views &#183; 4 years ago
              </p>
            </div>
          </div>
        </div>

        <div class="video-preview">
          <div class="thumbnail-row">
            <img class="thumbnail" src="thumbnails/thumbnail-3.webp">
            <div class="video-time">9:13</div>
          </div>
          <div class="video-info-grid">
            <div class="channel-picture">
              <img class="profile-picture" src="channel-pictures/channel-3.jpeg">
            </div>
            <div class="video-info">
              <p class="video-title">
                Crazy Tik Toks Taken Moments Before DISASTER
              </p>
              <p class="video-author">
                SSSniperWolf
              </p>
              <p class="video-stats">
                12M views &#183; 1 year ago
              </p>
            </div>
          </div>
        </div>

        <div class="video-preview">
          <div class="thumbnail-row">
            <img class="thumbnail" src="thumbnails/thumbnail-4.webp">
            <div class="video-time">22:09</div>
          </div>
          <div class="video-info-grid">
            <div class="channel-picture">
              <img class="profile-picture" src="channel-pictures/channel-4.jpeg">
            </div>
            <div class="video-info">
              <p class="video-title">
                The Simplest Math Problem No One Can Solve - Collatz Conjecture
              </p>
              <p class="video-author">
                Veritasium
              </p>
              <p class="video-stats">
                18M views &#183; 4 months ago
              </p>
            </div>
          </div>
        </div>

        <div class="video-preview">
          <div class="thumbnail-row">
            <img class="thumbnail" src="thumbnails/thumbnail-5.webp">
            <div class="video-time">11:17</div>
          </div>
          <div class="video-info-grid">
            <div class="channel-picture">
              <img class="profile-picture" src="channel-pictures/channel-5.jpeg">
            </div>
            <div class="video-info">
              <p class="video-title">
                Kadane's Algorithm to Maximum Sum Subarray Problem
              </p>
              <p class="video-author">
                CS Dojo
              </p>
              <p class="video-stats">
                519K views &#183; 5 years ago
              </p>
            </div>
          </div>
        </div>

        <div class="video-preview">
          <div class="thumbnail-row">
            <img class="thumbnail" src="thumbnails/thumbnail-6.webp">
            <div class="video-time">19:59</div>
          </div>
          <div class="video-info-grid">
            <div class="channel-picture">
              <img class="profile-picture" src="channel-pictures/channel-6.jpeg">
            </div>
            <div class="video-info">
              <p class="video-title">
                Anything You Can Fit In The Circle I’ll Pay For
              </p>
              <p class="video-author">
                MrBeast
              </p>
              <p class="video-stats">
                141M views &#183; 1 year ago
              </p>
            </div>
          </div>
        </div>
      </section>
`;
let videoPage = `
<div class="video-page">
        <div class="current-video">
            <div>
                <video class="video-play" controls="controls">
                    <source src="images/video/Red birb.mp4" type="video/mp4" />
            </div>
            <div class="about-video">
                <div class="video-title">Red Parrot doing HUIHUIHUIHUI</div>
                <div class="video-interface">
                    <div class="interface-left-section">
                        <div class="author-image-div"><img class="author-image"
                                src="images/profile-picture/jod.png" /></div>
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
            <div class="video-recomended">
                <div class="reco-vid-thumbnail">
                    <img src="images/thumbnail/RaGa.png">
                    <div class="time-count">11:23</div>
                </div>
                <div class="reco-vid-details">
                    <div class="title-author-views">
                        <div class="reco-vid-title">Easiest way to convert potato to GOLD | आलू को सोना बनाने का सबसे आसान तरीका</div>
                        <div class="author-views">
                            <div class="reco-vid-author">RaGa Vlogs</div>
                            <div class="views-uploaddate">1.2B Scams &#183; 9 Years Ago</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="video-recomended">
                <div class="reco-vid-thumbnail">
                    <img src="images/thumbnail/coke.png">
                    <div class="time-count">23:30</div>
                </div>
                <div class="reco-vid-details">
                    <div class="title-author-views">
                        <div class="reco-vid-title">What happens when you open coke bottle upside down</div>
                        <div class="author-views">
                            <div class="reco-vid-author">Niqqa Vlogs</div>
                            <div class="views-uploaddate">2.2M Openers &#183; 11 Months Ago</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="video-recomended">
                <div class="reco-vid-thumbnail">
                    <img src="images/thumbnail/AMAY.png">
                    <div class="time-count">13:32</div>
                </div>
                <div class="reco-vid-details">
                    <div class="title-author-views">
                        <div class="reco-vid-title">Apni mansik tanaw theek kare in 10 tariko se</div>
                        <div class="author-views">
                            <div class="reco-vid-author">Amay Hacks</div>
                            <div class="views-uploaddate">1M Reliefs &#183; 6 Days Ago</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="video-recomended">
                <div class="reco-vid-thumbnail">
                    <img src="images/thumbnail/kota.png">
                    <div class="time-count">15:25</div>
                </div>
                <div class="reco-vid-details">
                    <div class="title-author-views">
                        <div class="reco-vid-title">Freshers guide for students living in Kota</div>
                        <div class="author-views">
                            <div class="reco-vid-author">Unka Kollege</div>
                            <div class="views-uploaddate">203k Died &#183; 7 Years Ago</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="video-recomended">
                <div class="reco-vid-thumbnail">
                    <img src="images/thumbnail/flying-tutorial.png">
                    <div class="time-count">9:11</div>
                </div>
                <div class="reco-vid-details">
                    <div class="title-author-views">
                        <div class="reco-vid-title">Beginerrs guide on How to fly an airplane</div>
                        <div class="author-views">
                            <div class="reco-vid-author">Captan Salmon Bhoi</div>
                            <div class="views-uploaddate">911 Flyings &#183; 2 Years Ago</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="video-recomended">
                <div class="reco-vid-thumbnail">
                    <img src="images/thumbnail/CARRY.png">
                    <div class="time-count"></div>
                </div>
                <div class="reco-vid-details">
                    <div class="title-author-views">
                        <div class="reco-vid-title">How to attract a bootiful garls</div>
                        <div class="author-views">
                            <div class="reco-vid-author">CarryMinati Tips</div>
                            <div class="views-uploaddate">1M Lerners &#183; 29 Days Ago</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
let shortsPage = `
<div class="scroll-video-button">
<button class="scroll-up-button">
  <ion-icon name="arrow-up-outline"></ion-icon>
</button>
<button class="scroll-down-button">
  <ion-icon name="arrow-down-outline"></ion-icon>
</button>
</div>
`;
let musicPage = `
<div class="main-content-audio">
        <!--Right side of the page-->
        <div class="right-section">
            <div class="audio-image"><img src="images/thumbnails/thumbnail-1.jpg"></div>
            <div class="audio-player"><audio controls>
                    <source src="song/videoplayback.ogg" type="audio/ogg">
                </audio></div>
            <div class="audio-title">Rondeau des fleurs et des rapieres</div>
        </div>
        <!--Left side of the page-->
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
            <!--Shows songs recomendations-->
            <div class="audio-recomendation">
                <div class="audio-recomendation-container">
                    <div class="reco-audio-image-title-author">
                        <img src="images/thumbnails/thumbnail-2.png">
                        <div class="reco-audio-title-author">
                            <div class="reco-audio-title">ラグトレイン</div>
                            <div class="reco-audio-author">Inabakumori</div>
                        </div>
                    </div>
                    <div class="reco-audio-duration">2:30</div>
                </div>
                <div class="audio-recomendation-container">
                    <div class="reco-audio-image-title-author">
                        <img src="images/thumbnails/thumbnail-3.png">
                        <div class="reco-audio-title-author">
                            <div class="reco-audio-title">Hello Bachooooo</div>
                            <div class="reco-audio-author">Alakh Pandey</div>
                        </div>
                    </div>
                    <div class="reco-audio-duration">3:37</div>
                </div>
                <div class="audio-recomendation-container">
                    <div class="reco-audio-image-title-author">
                        <img src="images/thumbnails/thumbnail-4.png">
                        <div class="reco-audio-title-author">
                            <div class="reco-audio-title">Charas Ganja</div>
                            <div class="reco-audio-author">Carryminati</div>
                        </div>
                    </div>
                    <div class="reco-audio-duration">2:43</div>
                </div>
                <div class="audio-recomendation-container">
                    <div class="reco-audio-image-title-author">
                        <img src="images/thumbnails/thumbnail-5.png">
                        <div class="reco-audio-title-author">
                            <div class="reco-audio-title">YOASOBI「アイドル」</div>
                            <div class="reco-audio-author">Ayase/YOASOBI</div>
                        </div>
                    </div>
                    <div class="reco-audio-duration">2:30</div>
                </div>
                <div class="audio-recomendation-container">
                    <div class="reco-audio-image-title-author">
                        <img src="images/thumbnails/thumbnail-6.png">
                        <div class="reco-audio-title-author">
                            <div class="reco-audio-title">Judgment of Euthymia</div>
                            <div class="reco-audio-author">tnbee</div>
                        </div>
                    </div>
                    <div class="reco-audio-duration">2:30</div>
                </div>
                <div class="audio-recomendation-container">
                    <div class="reco-audio-image-title-author">
                        <img src="images/thumbnails/thumbnail-7.png">
                        <div class="reco-audio-title-author">
                            <div class="reco-audio-title">Dance of Sumeru</div>
                            <div class="reco-audio-author">Chen Yupeng</div>
                        </div>
                    </div>
                    <div class="reco-audio-duration">2:30</div>
                </div>
                <div class="audio-recomendation-container">
                    <div class="reco-audio-image-title-author">
                        <img src="images/thumbnails/thumbnail-8.png">
                        <div class="reco-audio-title-author">
                            <div class="reco-audio-title">Oracle</div>
                            <div class="reco-audio-author">HiFi-Audio</div>
                        </div>
                    </div>
                    <div class="reco-audio-duration">2:30</div>
                </div>
                <div class="audio-recomendation-container">
                    <div class="reco-audio-image-title-author">
                        <img src="images/thumbnails/thumbnail-9.png">
                        <div class="reco-audio-title-author">
                            <div class="reco-audio-title">istanbul</div>
                            <div class="reco-audio-author">yousaobi</div>
                        </div>
                    </div>
                    <div class="reco-audio-duration">2:30</div>
                </div>
                <div class="audio-recomendation-container">
                    <div class="reco-audio-image-title-author">
                        <img src="images/thumbnails/thumbnail-10.png">
                        <div class="reco-audio-title-author">
                            <div class="reco-audio-title">Funeral OST</div>
                            <div class="reco-audio-author">HOYO-MiX</div>
                        </div>
                    </div>
                    <div class="reco-audio-duration">4:38</div>
                </div>
            </div>
        </div>
    </div>
`;
let profilePage = '';


document.addEventListener('DOMContentLoaded', () => {
  const homeButton = document.querySelector('.js-home-button');
  const videoButton = document.querySelector('.js-Video-button');
  const musicButton = document.querySelector('.js-music-button')
  const profileButton = document.querySelector('.js-profile-button');
  const shortsButton = document.querySelector('.js-shorts-button');
  const contentPage = document.querySelector('.js-main-page')
  homeButton.addEventListener('click', () => {
    contentPage.innerHTML = homePage;
  })
  videoButton.addEventListener('click', () => {
    contentPage.innerHTML = videoPage;
  })
  musicButton.addEventListener('click', () => {
    contentPage.innerHTML = musicPage;
  })
  profileButton.addEventListener('click', () => {
    contentPage.innerHTML = profilePage;
  })
  shortsButton.addEventListener('click', () => {
    contentPage.innerHTML = shortsPage;
  })
})