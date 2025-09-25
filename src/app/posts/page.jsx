import getPostData from "@/lib/getPostData"
import Link from "next/link";


export default async function PostsPage() {

    const postData = await getPostData();

    return (
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-4 grid-cols-1 md:grid-cols-2">
            {
                postData.map((post) => (
                    <div key={post.id} >
                        <div className="p-4 m-4 rounded-lg shadow-lg">
                            <h2 className="text-xl font-bold">{post.title}</h2>
                            <p className="text-slate-500">{post.body}</p>
                            <Link href={`/posts/details/${post.id}`} className="text-blue-500 hover:underline">View Details</Link>
                        </div>
                    </div>
                ))
            }
        </div >
    )
}
