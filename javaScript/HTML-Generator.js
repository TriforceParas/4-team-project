let homePage = '';
let videoPage = '';
let musicPage = '';
let shortsPage = '';
let profilePage = '';

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