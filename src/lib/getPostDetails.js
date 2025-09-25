export default async function getPostDetails(id) {
   const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
   const data = await response.json();
   return data;
}