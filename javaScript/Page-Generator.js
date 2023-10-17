const homeButton = document.querySelector('.js-home-button');
const videoButton = document.querySelector('.js-Video-button');
const musicButton = document.querySelector('.js-music-button');
const shortsButton = document.querySelector('.js-shorts-button');
const profileButton = document.querySelector('.js-profile-button');
const communityButton = document.querySelector('.js-community-button');
const creatorButton = document.querySelector('.js-creator-button');
const uploadButton = document.querySelector('.js-upload-button');
const contentPage = document.querySelector('.js-main-page');

contentPage.innerHTML = homePageHTML;
document.querySelector('.video-grid').innerHTML = homePage;

homeButton.addEventListener('click', () => {
  contentPage.innerHTML = homePageHTML;
  document.querySelector('.video-grid').innerHTML = homePage;
})
videoButton.addEventListener('click', () => {
  contentPage.innerHTML = videoPageHTML;
  document.querySelector('.video-recommendation').innerHTML = videoPage;
})
musicButton.addEventListener('click', () => {
  contentPage.innerHTML = musicPageHTML;
  document.querySelector('.audio-recomendation').innerHTML = musicPage;
})
shortsButton.addEventListener('click', () => {
  contentPage.innerHTML = shortsPageHTML;
  document.querySelector('.video-area').innerHTML = shortsPage;
})
profileButton.addEventListener('click', () => {
  contentPage.innerHTML = profilePageHTML;
})

communityButton.addEventListener('click', () => {
  contentPage.innerHTML = communityTabHTML;
})

uploadButton.addEventListener('click', () => {
  contentPage.innerHTML = videoUploadPageHTML;
})

creatorButton.addEventListener('click', () => {
  contentPage.innerHTML = creatorPageHTML;
})