import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import authService from '../appwrite/auth';
import {Container, PostCard} from '../components'

function Home() {
    const [posts, setPosts] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
        
    }, [])
      
    if (posts.length === 0) {
        return (
            <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 via-gray-400 to-black">
                <div className="text-center text-white">
                <img 
                        src="https://cdn.dribbble.com/userupload/12455326/file/original-245417398f32b2f6d9bcd5919f807990.jpg?resize=400x300&vertical=center" 
                        alt="Space Logo" 
                        className="w-18 h-16 mx-auto mb-4 rounded-xl"
                    />
                    <h1 className="text-5xl font-bold text-black" style={{ fontFamily: 'Cursive, "Brush Script MT", sans-serif' }}>
                        Hi Cosmic Enthusiasts</h1>
                    <h2 className=" my-2 text-2xl font-semibold animate-pulse">Login to read post</h2>
                </div>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home       