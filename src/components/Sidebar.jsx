import React from 'react';
import '../App.css';
import { GoHome } from 'react-icons/go';
import { SiYoutubeshorts, SiYoutubestudio, SiYoutubekids, SiYoutubemusic, SiTrendmicro, SiStylelint } from 'react-icons/si';
import { MdOutlineSubscriptions, MdHistory, MdOutlineWatchLater, MdPodcasts, MdOutlineFeedback } from 'react-icons/md';
import { PiUserSquareThin, PiFilmSlateLight, PiLightbulbLight } from 'react-icons/pi';
import { IoGameControllerOutline, IoSettingsOutline, IoFlagOutline } from 'react-icons/io5';
import { AiOutlineLike } from 'react-icons/ai';
import { FaYoutube, FaRegNewspaper } from 'react-icons/fa';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { CgMediaLive } from 'react-icons/cg';
import { SiYoutubegaming } from 'react-icons/si';
import { TfiCup } from 'react-icons/tfi';
import { BiVideo } from 'react-icons/bi';
import { TbHelpHexagon } from 'react-icons/tb';
import { useUtils } from '../context/UtilsContext';
import { IoClose } from 'react-icons/io5';
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const { isSidebar, mobileShow, setMobileShow } = useUtils();
  const navigate = useNavigate();

  const sidebarItems = [
    {
      groupName: 'Home',
      groupItems: [
        { id: 1, name: 'Home', icon: <GoHome /> },
        { id: 2, name: 'Shorts', icon: <SiYoutubeshorts /> },
        { id: 3, name: 'Subscriptions', icon: <MdOutlineSubscriptions /> },
      ],
    },
    {
      groupName: 'You',
      groupItems: [
        { id: 1, name: 'Your Channel', icon: <PiUserSquareThin /> },
        { id: 2, name: 'History', icon: <MdHistory /> },
        { id: 3, name: 'Playlists', icon: <MdOutlineSubscriptions /> },
        { id: 4, name: 'Your Videos', icon: <BiVideo /> },
        { id: 5, name: 'Watch later', icon: <MdOutlineWatchLater /> },
        { id: 6, name: 'Liked videos', icon: <AiOutlineLike /> },
      ],
    },
    {
      groupName: 'Explore',
      groupItems: [
        { id: 1, name: 'Trending', icon: <SiTrendmicro /> },
        { id: 2, name: 'Shopping', icon: <HiOutlineShoppingBag /> },
        { id: 3, name: 'Music', icon: <SiYoutubemusic /> },
        { id: 4, name: 'Films', icon: <PiFilmSlateLight /> },
        { id: 5, name: 'Live', icon: <CgMediaLive /> },
        { id: 6, name: 'Gaming', icon: <IoGameControllerOutline /> },
        { id: 7, name: 'News', icon: <FaRegNewspaper /> },
        { id: 8, name: 'Sport', icon: <TfiCup /> },
        { id: 9, name: 'Courses', icon: <SiStylelint /> },
        { id: 10, name: 'Fashion & beauty', icon: <PiLightbulbLight /> },
        { id: 11, name: 'Podcasts', icon: <MdPodcasts /> },
      ],
    },
    {
      groupName: 'More from Youtube',
      groupItems: [
        { id: 1, name: 'Youtube Premium', icon: <FaYoutube /> },
        { id: 2, name: 'Youtube Studio', icon: <SiYoutubestudio /> },
        { id: 3, name: 'Youtube Music', icon: <SiYoutubemusic /> },
        { id: 4, name: 'Youtube Kids', icon: <SiYoutubekids /> },
      ],
    },
    {
      groupName: 'Extras',
      groupItems: [
        { id: 1, name: 'Settings', icon: <IoSettingsOutline /> },
        { id: 2, name: 'Report History', icon: <IoFlagOutline /> },
        { id: 3, name: 'Help', icon: <TbHelpHexagon /> },
        { id: 4, name: 'Send feedback', icon: <MdOutlineFeedback /> },
      ],
    },
  ];

  const handleSidebarItemClick = (groupName, itemName) => {
  // Navigate to homepage
  if (groupName === 'Home' && itemName === 'Home') {
    navigate('/');
    setMobileShow(false);
    return;
  }

  // Navigate to search results
  if (
    groupName === 'Explore' ||
    (groupName === 'Home' && itemName !== 'Subscriptions')
  ) {
    navigate(`/search/${encodeURIComponent(itemName)}`);
    setMobileShow(false);
  }
};

 

  const SidebarContent = ({ sidebarItems,  onItemClick  }) => (
    <div className="space-y-3 items-center">
      {sidebarItems.map((group, i) => (
        <div key={i} className="mb-5">
          <h1 className="font-bold mb-1">{group.groupName}</h1>
          <hr className="border-t border-grey-300 mb-2 block xl:hidden" />
          {group.groupItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-6 hover:bg-gray-200 duration-300 rounded-xl p-1 my-3"
              onClick={() => onItemClick(group.groupName, item.name)}
            >
              <div className="text-xl cursor-pointer">{item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          ))}
        </div>
      ))}
      <br />
      <hr />
      <span className="text-xs font-semibold text-gray-500">
        About Press Copyright<br />
        Contact us Creators<br />
        Advertise Developers<br /><br />
        Terms Privacy Policy & Safety<br />
        How Youtube Works<br />
        Test new features
      </span>
      <br />
      <p className="text-xs text-gray-500 mt-3">© 2025 Rajat's Youtube</p>
    </div>
  );

  return (
    <>
      {/* Mobile Sidebar */}
      <div
        className={`xl:hidden fixed top-0 bottom-0 left-0 bg-white z-40 h-screen w-[70%] sm:w-[30%] px-2 lg:px-6 overflow-y-scroll overflow-x-hidden transition-all transform duration-300 scrollbar-thin sidebar-scroll ${mobileShow ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        {/* Close Button */}
        <div className="flex justify-end py-4 pr-2">
          <IoClose
            className="text-2xl cursor-pointer hover:text-red-500"
            onClick={() => setMobileShow(false)}
          />
        </div>
        <SidebarContent sidebarItems={sidebarItems} onItemClick={handleSidebarItemClick} />
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden xl:block static h-[calc(100vh-6.625rem)] w-[27%] px-2 lg:px-4 overflow-y-scroll overflow-x-hidden scrollbar-thin sidebar-scroll">
        <SidebarContent sidebarItems={sidebarItems} onItemClick={handleSidebarItemClick}/>
      </div>

      {/* Mobile Overlay */}
      {mobileShow && (
        <div
          className="xl:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30 transition-opacity duration-300"
          onClick={() => setMobileShow(false)}
        />
      )}
    </>
  );
}
