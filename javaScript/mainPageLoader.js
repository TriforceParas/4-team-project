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
let musicPage = '';
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