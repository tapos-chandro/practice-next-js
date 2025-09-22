import Image from 'next/image'
import abutImage from "@/../public/using-laptop.webp"
import getPostData from '@/lib/getPostData';


export const metadata = {
  title: "About Page",
  description: "Learn more about our company and team.",
};


export default async function AboutPage() {

  const postData = await getPostData();
  console.log(postData,'This is post data');

  return (
    <div>
      <h1>About Us</h1>
      <Image src={abutImage} placeholder="blur" alt="This is about image" />
    </div>
  )
}
