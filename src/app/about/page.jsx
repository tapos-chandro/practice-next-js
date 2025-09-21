import Image from 'next/image'
import abutImage from "@/../public/using-laptop.webp"


export const metadata = {
  title: "About Page",
  description: "Learn more about our company and team.",
};


export default function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      <Image src={abutImage} placeholder="blur" alt="This is about image" />
    </div>
  )
}
