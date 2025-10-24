export const catchAsyncErrors = (theFunction) => {
    return(req, res, next) => {
        Promise.resolve(theFunction(req, res, next)).catch(next);
    }
}

// It will resolve theFunction and if it gets any error then it will execute next middleware.