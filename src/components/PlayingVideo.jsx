import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/rapidapi";
import ReactPlayer from "react-player";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";
import SuggestedVideo from "./SuggestedVideo";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Sidebar from "./Sidebar";


function PlayingVideo() {
  const [video, setVideo] = useState();
  const [realatedVideo, setRelativeVideo] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchVideoDetails();
    fetchRelatedVideo();
  }, [id]);

  const fetchVideoDetails = () => {
    fetchData(`video/details/?id=${id}`).then((res) => {
      console.log(res);
      setVideo(res);
    });
  };
  const fetchRelatedVideo = () => {
    fetchData(`video/related-contents/?id=${id}`).then((res) => {
      console.log(res);
      setRelativeVideo(res);
    });
  };




  return (


    <div className="flex justify-center flex-row h-[calc(100%-56px)] mt-16">
      <div className="block xl:hidden">
        <Sidebar />
      </div>


      <div className="w-full max-w-[1580px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-400px)] xl:w-[calc(100%-600px)] xl:ml-32 px-4 py-3 lg:py-6 lg:ml-16">

          {/* Responsive 16:9 aspect ratio container */}
          <div className="aspect-video rounded-lg overflow-hidden ml-0 mr-0">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              width="100%"
              height="100%"
              controls
              playing={true}
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#000000",
              }}
            />
          </div>


          <div className="font-bold text-sm md:text-xl mt-4 line-clamp-2">
            {video?.title}
          </div>
          <div className="flex justify-between flex-col md:flex-row mt-4">
            <div className="flex ">
              <div className="flex items-start">
                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                  {video?.author?.avatar?.length > 0 && video.author.avatar[0]?.url ? (
                    <img
                      src={video.author.avatar[0].url}
                      alt="Author Avatar"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center text-gray-500 text-xs">
                      N/A
                    </div>
                  )}
                </div>
              </div>
              <div className="flex space-x-5    ">
                <div className="flex flex-col ml-3">
                  <div className="text-sm lg:text-md xl:text-lg font-semibold flex items-center mt-3">
                    {video?.author?.title}
                    {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                      <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                    )}
                  </div>
                  <div className="text-sm">
                    {video?.author?.stats?.subscribersText}
                  </div>
                </div>
                <span className="mt-1 text-sm lg:text-md xl:text-base text-center bg-red-500 px-3 pt-2 rounded-full text-white cursor-pointer hover:bg-red-700 duration-200 ">
                  Subscribe
                </span>
              </div>
            </div>
            <div className="flex mt-4 md:mt-0 text-sm lg:text-xl xl:text-xl md:text-base ">
              <div className="flex  items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                <AiOutlineLike className="text-xl   mr-2" />
                {`${abbreviateNumber(video?.stats?.likes, 2)} Likes`}
              </div>
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] ml-4">
                {`${abbreviateNumber(video?.stats?.views, 2)} Views`}
              </div>
            </div>
          </div>
          <div className="p-4 bg-gray-100 rounded-xl mt-4 text-sm break-words whitespace-pre-wrap overflow-hidden">
            {video?.description}
          </div>
          <div className="flex gap-x-6 font-semibold rounded-xl mt-4 text-xl">
            {video?.stats?.comments} <p>Comments</p>
          </div>
        </div>
        <div className="flex flex-col px-4 py-6 h-[calc(100vh-4.625rem)] overflow-y-scroll overflow-x-hidden lg:w-[350px] xl:w-[400px]">
          {realatedVideo?.contents?.map((item, index) => {
            if (item?.type !== "video") return false;
            return <SuggestedVideo key={index} video={item?.video} />;
          })}
        </div>
      </div>
    </div>


  );
}

export default PlayingVideo;
