let homePage = '';
let videoPage = '';
let musicPage = '';
let shortsPage = '';
let creatorPage = '';

homePageData.forEach((home) => {
  homePage += `
  <div class="video-preview">
    <div class="thumbnail-row">
      <img class="thumbnail" src="assets/home-page/thumbnails/${home.thumbnailLocation}">
      <div class="video-time">${home.duration}</div>
    </div>
    <div class="video-info-grid">
      <div class="channel-picture">
        <img class="profile-picture" src="assets/home-page/channel-pictures/${home.channelProfilePictureLocation}"></div>
      <div class="video-info">
        <p class="video-title">${home.videoTitle}</p>
        <p class="video-author">${home.videoAuthor}</p>
        <p class="video-stats">${home.videoStats}</p>
      </div>
    </div>
  </div>
  `
});

videoPageData.forEach((video) => {
  videoPage += `
  <div class="video-recomended">
      <div class="reco-vid-thumbnail">
          <img src="assets/video-page/thumbnails/${video.thumbnailLocation}">
          <div class="time-count">${video.duration}</div>
      </div>
      <div class="reco-vid-details">
          <div class="title-author-views">
              <div class="reco-vid-title">${video.videoTitle}</div>
              <div class="author-views">
                  <div class="reco-vid-author">${video.videoAuthor}</div>
                  <div class="views-uploaddate">${video.videoStats}</div>
              </div>
          </div>
      </div>
  </div>
  `
});

musicPageData.forEach((music) => {
  musicPage += `
  <div class="audio-recomendation-container">
      <div class="reco-audio-image-title-author">
          <img src="assets/music-page/thumbnails/${music.thumbnailLocation}">
          <div class="reco-audio-title-author">
              <div class="reco-audio-title">${music.trackName}</div>
              <div class="reco-audio-author">${music.artistName}</div>
          </div>
      </div>
      <div class="reco-audio-duration">${music.trackDuration}</div>
  </div>
  `
});

let currentVideo = 0;

// to make it post
shortsPage = `
<div class="shorts-container">
<div class="video-interact-container">
    <video class="shorts-player" autoplay loop>
        <source src="${shortsPageData[currentVideo].videoLocation}" type="video/mp4" />
    </video>
    <div class="video-overlay">
        <div class="shorts-title">${shortsPageData[currentVideo].title}</div>
        <div class="channel-subscribe-button">
            <div class="profile-picture"><img src="${shortsPageData[currentVideo].profilePictureLocation}"><span>${shortsPageData[currentVideo].creatorName}</span></div>
            <div><button class="subscribe-button">Subscribe</button></div>
        </div>
    </div>
    <div class="side-controls">
        <button class="like-button"><ion-icon name="thumbs-up-outline"></ion-icon></button>
        <span class="like-count">${shortsPageData[currentVideo].like}</span>
        <button class="dislinke-button"><ion-icon name="thumbs-down-outline"></ion-icon></button>
        <span class="dislike-count">${shortsPageData[currentVideo].disLike}</span>
        <button class="comments-button"><ion-icon name="chatbox-outline"></ion-icon></button>
        <span class="comment-count">${shortsPageData[currentVideo].comments}</span>
        <button class="share-button"><ion-icon name="share-social-outline"></ion-icon></button>
        <span class="share-lable">Share</span>
        <button class="more-button"><ion-icon name="add-outline"></ion-icon></button>
        <div class="profile-picture"><img src="${shortsPageData[currentVideo].profilePictureLocation}"></div>
    </div>
</div>
</div>
`

creatorPageData.forEach((creator) => {
  creatorPage += `
    <div class="cp-container">
        <div class="cp-image-container">
            <img class="image" alt="Image" src="https://cdn-icons-png.flaticon.com/512/64/64572.png ">
        </div>
        <div class="cp-information-container">
            <div class="cp-information-content-container">
                <h2>${creator.name}</h2>
                <h3>${creator.prn}</h3>
                <h3>Contribution: ${creator.contribution}</h3>
            </div>
        </div>
    </div>
`
})
