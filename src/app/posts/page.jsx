import getPostData from "@/lib/getPostData"


export default async function PostsPage() {

    const postData = await getPostData();

    return (
        <div>
            {
                postData.map((post) => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))
            }
        </div >
    )
}
