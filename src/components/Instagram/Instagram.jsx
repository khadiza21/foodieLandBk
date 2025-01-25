import { useEffect, useState } from 'react';
import './Instagram.css'
import InstaPost from './InstaPost';

const Instagram = () => {

    const [instagramPostList, setInstagramPostList] = useState([]);




    useEffect(() => {
        fetch("instapost.json")
            .then((res) => res.json())
            .then((data) => setInstagramPostList(data));
    }, []);



    console.log(instagramPostList)
    return (
        <div className='bg-gray-50 '>
            <div className=" container py-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {instagramPostList.map((post) => (
                        <InstaPost
                            key={post.id}
                            post={post}
                            className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
                        >


                        </InstaPost>
                    ))}
                </div>
                <div className="flex justify-center mt-6">
                    <button className="btn btn-primary">Visit Our Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default Instagram;