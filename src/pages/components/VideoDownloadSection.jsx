import defaultVideoImg from '../../assets/defaultVideoImgInDownlaodSection.png'
import '../../css/VideoDownlaodSection.css'
import {DownloadSvg} from "../../util/Svg.jsx";
export var videoData;

const VideoDownloadSection = () => {
    videoData = {
        title: "Enna Yanna Apith Ekka",
        creator: "Dilu Beat",
        views: "2.3M",
        img: defaultVideoImg
    }

    return(
        <div id={"VideoDownloadSection"} className={"p-3"}>
            <img src={videoData.img} alt=""/>
            <h4 className={"mt-4"}>Title</h4>
            <h3>{videoData.title}</h3>
            <div className={"d-flex justify-content-between mt-4 mb-4"}>
                <div>
                    <h4>Creator</h4>
                    <h3>{videoData.creator}</h3>
                </div>
                <div>
                    <h4>Views</h4>
                    <h3>{videoData.views}</h3>
                </div>
            </div>
            <div className="downloadOption p-3 pt-4">
                <h4 className={"mb-3"}>Video</h4>
                <div className={"d-flex flex-column gap-3"}>
                    <div className={"d-flex justify-content-between"}>
                        <h6>1440P</h6>
                        <h6>3.6MB</h6>
                        <button>
                            <DownloadSvg/>
                        </button>
                    </div>
                    <div className={"d-flex justify-content-between"}>
                        <h6>1080P</h6>
                        <h6>13MB</h6>
                        <button>
                            <DownloadSvg/>
                        </button>
                    </div>
                    <div className={"d-flex justify-content-between"}>
                        <h6>720P</h6>
                        <h6>13MB</h6>
                        <button>
                            <DownloadSvg/>
                        </button>
                    </div>
                    <div className={"d-flex justify-content-between"}>
                        <h6>480P</h6>
                        <h6>13MB</h6>
                        <button>
                            <DownloadSvg/>
                        </button>
                    </div>
                </div>
                <h4 className={"mb-3 mt-4"}>Audio</h4>
                <div>
                    <div className={"d-flex justify-content-between"}>
                        <h6>1080P</h6>
                        <h6>13MB</h6>
                        <button>
                            <DownloadSvg/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoDownloadSection;