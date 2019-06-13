import routes from "./routes"

export const localsMiddleware = (req, res, next) =>{
    res.locals.siteName = "WeTuebe";
    res.locals.routes = routes;
    next();
};