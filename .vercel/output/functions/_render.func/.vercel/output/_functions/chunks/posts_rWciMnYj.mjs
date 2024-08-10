async function getPosts() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  return data.json();
}
async function getPostsId(id) {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return data.json();
}

export { getPosts as a, getPostsId as g };
