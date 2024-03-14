import React from 'react'
import { MdArrowOutward } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function BlogCards({ thumbnail, slug, title }) {
    return (
        <div className="flex flex-col items-start gap-[15px] p-5 hover:shadow-lg rounded-md group">
            <div className="bg-white w-full h-52 p-6 flex justify-center items-center">
                <img src={thumbnail} alt="" />
            </div>
            <div className="">
                <p className='text-base lg:text-2xl font-medium overflow-hidden overflow-ellipsis whitespace-pre-line line-clamp-2'>{title}</p>
            </div>
            <Link to={"/blog/"+slug} className="text-base lg:text-lg font-semibold flex items-center text-[#DE5126]">
                Read More <MdArrowOutward className='ml-1' />
            </Link>
        </div>
    )
}
