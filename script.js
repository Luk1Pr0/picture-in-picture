const videoElement = document.getElementById("video");
const startButton = document.getElementById("start-button");

//Prompt user to select the media stream, pass to the video element and then play
const selectMediaStream = async () => {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log(error);
    }
};

const startPicInPic = async () => {
    //Disable button after click
    startButton.disabled = true;
    //Start PicInPic
    await videoElement.requestPictureInPicture();
    // Reset button state
    startButton.disabled = false;
};

//Event listeners
startButton.addEventListener("click", startPicInPic);

//Invoke function
selectMediaStream();