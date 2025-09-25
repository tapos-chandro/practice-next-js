"use client";
import { useRouter } from "next/navigation";

export default function PhotoModal({ params }) {
  const router = useRouter();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded shadow-lg w-96 relative">
        <h2 className="text-xl font-bold mb-2">Photo ID: {params.id}</h2>
        <p>This is the photo detail shown as a modal overlay.</p>
        <button
          onClick={() => router.back()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}
