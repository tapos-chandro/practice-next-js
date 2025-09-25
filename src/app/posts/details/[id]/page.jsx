import getPostDetails from "@/lib/getPostDetails";


const Details = async ({ params }) => {
    const  {id}  = await params;
    const postDetails = await getPostDetails(id);
    return (
        <div>
            <div className="p-4 m-4 rounded-lg shadow-lg">      
                <h2 className="text-xl font-bold">{postDetails.title}</h2>
                <p className="text-slate-500">{postDetails.body}</p>
            </div>
        </div>
    );
};

export default Details;