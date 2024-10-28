import { blogsData } from "@/data/blogsData";
import { IBlogPost } from "@/types/types";
import BlogClient from "./BlogClient";

//ssg implementation
export const generateStaticParams = async () => {
  return blogsData.map((blog: IBlogPost) => ({
    blog_id: blog.id,
  }));
};

const BlogPostPage = ({ params }: { params: { blog_id: string } }) => {
  return <BlogClient blog_id={params.blog_id} />;
};

export default BlogPostPage;
