export async function getPosts() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  return data.json();
}

export async function getPostsId(id: string) {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return data.json();
  }
    
  