import toast from "react-hot-toast";

export const getBlogs = () => {
    let blogs = [];
    const storedBlogs = localStorage.getItem("blogs");
    if (storedBlogs) {
        blogs = JSON.parse(storedBlogs);
    }
    return blogs;
}

// save blog 
export const saveBlog = (blog) => {
    const blogs = getBlogs();
    const isExists = blogs.find(b => b.id === blog.id)
    if(isExists) {
        return toast.error("Already Bookmarked")
    }
    blogs.push(blog);
    localStorage.setItem("blogs", JSON.stringify(blogs));
    toast.success("Added to Bookmark successfully")
}

// delete blog from bookmark 
export const removeBookmark = (id) => {
const blogs = getBlogs();
const newBlogs = blogs.filter(b => b.id !== id);
localStorage.setItem("blogs", JSON.stringify(newBlogs));
toast.success("Removed from Bookmark successfully")
}