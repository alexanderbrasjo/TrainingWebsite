let course = {
    name: "App services with CI/CD",
    category: "Azure",
    links: ["https://www.youtube.com/embed/1d1X9Wsayf0?si=7MsyOWF1jHT3YJSJ","https://www.youtube.com/embed/PLpwNDmkuw8?si=kdPrriIJfxjB-CEx"]
};

let currentVideo = 0;

function updateVideoSource() {
    let videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.src = course.links[currentVideo];
    document.getElementById("videoName").textContent = course.name;
}

updateVideoSource();