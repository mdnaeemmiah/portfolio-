import BlogDetails from "@/components/home/BlogDetails";

const BlogDetailsPage = async({params}: {params:Promise<{blogId :string}>}) => {
    const {blogId} = await params;
    const res =await fetch(`http://localhost:5000/blog/${blogId}`);
    const blog =await res.json();
    
     return (
         <div>
             <BlogDetails blog={blog}></BlogDetails>
         </div>
     );
 };
 
 export default BlogDetailsPage;