"use client";
import CommentsList from './CommentsList';
import useSWR from "swr"


const fetcher = url => fetch(url).then(r => r.json())
const CommentsList = () => {



    const { data, error, isLoading } = useSWR(`https://jsonplaceholder.typicode.com/comments`, fetcher, { suspense: true })

    return (
        <div className="grid grid-cols-3 gap-4 p-5 max-w-7xl mx-auto">

            {data.map(comment => (
                <div className="p-4 rounded shadow-2xl" key={comment.id}>
                    <h3 className="text-md font-bold">{comment.name}</h3>
                    <p>{comment.body}</p>
                </div>
            ))}

        </div>
    );
};

export default CommentsList;