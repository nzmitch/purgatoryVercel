import React, { Component } from "react";

class BackgroundVideo extends Component {
    render() {
        return (
            <div className="fullscreen-video-wrap" dangerouslySetInnerHTML={{__html: `
                <video id="bg-video" playsinline loop muted autoPlay>
                <source src="${require("../img/kaya.mp4")}" type="video/mp4" />
                Your browser does not support the video tag. I suggest you upgrade your browser.
            </video>`}}></div>
        );
    }
}

export default BackgroundVideo;
