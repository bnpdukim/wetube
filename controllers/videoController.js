export const home = (req, res) => res.render("home", {pageTitle:"home"});
export const search = (req, res) => res.render("search",{pageTitle:"search"});

export const videos = (req, res) => res.render("videos",{pageTitle:"videos"});
export const upload = (req, res) => res.render("upload",{pageTitle:"upload"});
export const videoDetail = (req, res) => res.render("videoDetail",{pageTitle:"videoDetails"});
export const editVideo = (req, res) => res.render("editVideo",{pageTitle:"edit"});
export const deleteVideo = (req, res) => res.render("deleteVideo",{pageTitle:"deleteVideo"});