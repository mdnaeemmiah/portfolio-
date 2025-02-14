import BlogDetails from "@/components/home/BlogDetails";

const BlogDetailsPage = async({params}: {params:Promise<{blogId :string}>}) => {
    const {blogId} = await params;
    const res =await fetch(`https://l2b4-a5-server.vercel.app/api/blog/${blogId}`);
    const blog =await res.json();
    console.log(blog.data)
    
     return (
         <div className="pt-10">
             <BlogDetails blog={blog}></BlogDetails>
         </div>
     );
 };
 
 export default BlogDetailsPage;