import { IBlogPost } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }: { blog: IBlogPost }) => {
  return (
    <div className="">
      <div className="overflow-hidden rounded-lg hover:rounded-lg">
        <Link href={`/blogs/${blog.id}`}>
          <Image
            src={blog.imageURL}
            alt="image"
            className="hover:scale-110 duration-500 hover:duration-500 rounded-lg hover:rounded-lg"
          />
        </Link>
      </div>
      <div className="py-2">
        <h1 className="text-xl font-bold">{blog.title}</h1>
        <h1>{blog.date}</h1>
      </div>
    </div>
  );
};

export default BlogCard;