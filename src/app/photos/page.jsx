import Link from "next/link";

const photos = [
    { id: 1, title: "Sunset" },
    { id: 2, title: "Mountain" },
    { id: 3, title: "River" },
];




export default function PhotosPage() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Photo Gallery</h1>
            <ul className="grid grid-cols-3 gap-4">
                {photos.map((photo) => (
                    <li key={photo.id} className="bg-gray-100 p-3 rounded">
                        <Link href={`/photos/${photo.id}`}>
                            {photo.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
