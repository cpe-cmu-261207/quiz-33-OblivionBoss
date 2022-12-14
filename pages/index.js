import Comment from "../components/Comment";
import PostOwner from "../components/PostOwner";
import { comments } from "../libs/comments";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* PostOwner*/}
        <PostOwner
          imgSrc="/profileImages/uncanny.jpg"
          userName="Nutthachai Singkaewvong 640610633"
          status="..."
          likesCount="3"
          comments={[]}
        />

        {/* Comments */}
        {comments.map((c) => (
          <Comment
            imgSrc={c.userImagePath}
            userName={c.username}
            status={c.commentText}
            likesCount={c.likeNum}
            replies={c.replies}
          />
        ))}
      </div>
    </div>
  );
}
