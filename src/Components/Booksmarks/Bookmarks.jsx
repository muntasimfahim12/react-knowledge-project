
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({bookmarks, readingTime}) => {
    console.log(bookmarks);
    return (
        <div className='md:w-1/3  bg-gray-300 ml-4 mt-4 pt-4 '>
            <div>
                <h3 className='text-4xl'>Reading TIme: {readingTime}</h3>
            </div>
            <h2 className='text-3xl text-center'>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};



export default Bookmarks;