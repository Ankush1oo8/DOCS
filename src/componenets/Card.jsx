import React from "react";
import { FaFilePdf } from "react-icons/fa6";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";

function Card({ data, refrence }) {
  return (
    <motion.div
      drag
      dragConstraints={refrence}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.2}
      className=" relative flex-shrink-0 overflow-hidden text-white py-10 px-8 w-60 h-72 rounded-[45px] bg-zinc-900/90 "
    >
      <FaFilePdf></FaFilePdf>
      <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
      <div className="footer absolute bottom-0  w-full  left-0">
        <div className="flex items-center py-3  px-8 justify-between mb-3">
          <h5>{data.filesize}</h5>
          {data.close ? (
            <IoIosCloseCircleOutline size="1.5em" />
          ) : (
            <MdOutlineDownloadForOffline size="1.5em" />
          )}
        </div>
        {data.tag.isOpen && (
          <div className="tag w-full py-4  bg-green-600 flex items-center justify-center">
            <h3 className="text-sm font-semibold ">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
