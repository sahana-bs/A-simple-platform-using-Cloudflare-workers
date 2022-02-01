const _posts = [
  {
    id: 1,
    title: "My first blog post",
    text: "Hi, this is pretty cool to build a simple platform using cloudflare, I had fun!!!.",
    published_at: new Date("2022-01-31")
  },
  {
    id: 2,
    title: "Maybe a lil about me",
    text: "I am doing my Masters from Virginia Tech and loving it so far. Something about me that's not on my resume,\nI am a super curious person and love learning and challenging myself. I read a lot on spirituality\nand love to keep myself positive and energised :) ",
    published_at: new Date("2022-01-31")
  }
]

export default class PostsStore {
  async all() {
    return _posts
  }

  async find(id: number) {
    return _posts.find(post => post.id.toString() === id.toString())
  }
}
