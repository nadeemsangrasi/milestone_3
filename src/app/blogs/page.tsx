"use client";
import Wrapper from "@/components/shared/Wrapper";
import { IBlogPost } from "@/types/types";

import React from "react";
import BlogCard from "./BlogCard";
import { useCart } from "@/context/CartContext";

const BlogsPage = () => {
  const { blogs } = useCart();

  return (
    <Wrapper>
      <div className="py-16">
        <div className="my-16">
          <h1 className="text-6xl font-bold text-center my-20">
            Explore Our Blogs
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog: IBlogPost) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default BlogsPage;
