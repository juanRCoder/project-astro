export async function getPosts() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();
  return posts.slice(0, 5);
}

export async function getPostsId(id: string) {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return data.json();
}
