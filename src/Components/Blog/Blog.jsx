import { GoBookmark } from "react-icons/go";

const Blog = ({ blog, handleAddBookmark, handleMarkAsRead }) => {
    const {id, title, cover, author_img, author, posted_date, reading_time, hashtag } = blog;
    return (
        <div className="mb-20 space-y-4">
            <img className="w-full rounded-xl mb-8" src={cover} alt={`Cover picture of the ${title} `} />
            <div className="flex justify-between mb-4 ">
                <div className="flex">
                    <img className="w-12" src={author_img} alt="" />
                    <div className="ml-6">
                        <h3 className="text-2xl">{author} </h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddBookmark(blog)}
                        className="ml-2 text-red-600 text-xl">
                        <GoBookmark></GoBookmark>
                    </button>

                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>{hashtag}</p>
            <button onClick={() => handleMarkAsRead(id, reading_time)}
              className="text-purple-800 font-bold underline"> Mark As Read</button>
        </div>
    );
};

export default Blog; <GoBookmark />