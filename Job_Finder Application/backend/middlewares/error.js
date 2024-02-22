class ErrorHandler extends Error {
        constructor(message,statusCode){
                super(message);
                this.statusCode = statusCode;
        }
}

export const errorMiddleware = (err,req,res,next) => {
        err.message = err.message || "Internal Server Error";
        err.statusCode = err.statusCode || 500;

        if(err.name === "castError"){
                const message = `Resource not fount. Envalid ${err.path}`;
                err = new ErrorHandler(message,400);
        }

        if(err.code === 11000){
                const message = `Resource not fount. Invalid ${err.path}`;
                err = new ErrorHandler(message,400);
        }

        if(err.name === "jsonWebTokenError"){
                const message = `Json Wen Token Is Expired, try again!`;
                err = new ErrorHandler(message,400);
        }

        if(err.name === "TokenExpiredError"){
                const message = `Json Web Token is expired, try Again!`;
                err = new ErrorHandler(message,400);
        }

        return res.status(err.statusCode).json({
                success:false,
                message:err.message,
        });
};


export default ErrorHandler;

