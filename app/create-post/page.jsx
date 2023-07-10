"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Form from "@components/Form";

const CreatePost = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    post: "",
    tag: "",
  });

  const createPost = async (e) => {
    console.log(e);
  };
  return (
    <Form
      type="create"
      setPost={setPost}
      post={post}
      submitting={submitting}
      handleSubmit={createPost}
    />
  );
};

export default CreatePost;
