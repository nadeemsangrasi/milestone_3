import Wrapper from "@/components/shared/Wrapper";
import { blogsData } from "@/data/blogsData";
import React from "react";

const BlogsPage = () => {
  return (
    <Wrapper>
      <div className="py-16">
        <div className="my-16">
          <h1 className="text-6xl font-bold text-center my-20">
            Explore Our Blogs
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogsData.map((blog: any) => (
              <div key={blog.id}>
                <h1>{blog.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default BlogsPage;
