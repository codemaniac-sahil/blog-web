const User = require("../database/model/user");
const Blog = require("../database/model/blog");
const jwt = require("jsonwebtoken");
const cloudinary = require('../azuremulter/cloudinary')


require("dotenv").config();


const deleteBlog = async (req, res) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.json({ status: false });
        }

        const verifiedUser = jwt.verify(token, process.env.TOKEN_KEY);

        const userId = verifiedUser.id;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(401).json({ message: "Not Authorized" })
        }
        const blogId = req.params.blogId;
        const blog = await Blog.findById(blogId);

        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        if (blog.cloudinary_id) {
            await cloudinary.uploader.destroy(blog.cloudinary_id);
        }

        await Blog.findByIdAndDelete(blogId);

        res.status(200).json({ message: "Blog deleted successfully" });

    } catch (err) {
        res.status(500).json({ message: "Internal Server error" })
    }
}
module.exports = deleteBlog