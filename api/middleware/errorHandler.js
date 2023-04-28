// Error Handler Middleware
export const errorHandler = (error, req, res, next) => {
  const errorMessage = error.message || 'Unknown Error';
  const errorStatus = error.status || 500;
  return res.json({
    message: errorMessage,
    status: errorStatus,
    stack: error.stack,
  });
};
