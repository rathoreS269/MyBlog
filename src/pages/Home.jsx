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
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1  className="text-xl font-bold text-black text-center animate-compress-expand">
                               Login to read post
                            </h1>
                        </div>
                    </div>
                </Container>
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