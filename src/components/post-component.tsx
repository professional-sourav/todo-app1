"use client";

type Post = {
    id: number;
    title: string;
    body: string;
}

type Posts = {
    limit: number;
    skip: number;
    posts: Array<Post>;
    total: number;
}

export default function PostComponent({ posts }: { posts: Posts }) {
    return (
        <div className="post-card-container">
            <h2>Posts</h2>
            {posts.posts.map((post: Post) => (
                <div key={post.id} className="post-card">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}
