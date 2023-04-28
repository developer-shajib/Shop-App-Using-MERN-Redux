class Utils {
  /**
   * Create Custom Error
   * @param {*} msg
   * @param {*} status
   * @returns error
   */
  static createError = (msg = '', status = 500) => {
    const error = new Error();
    error.message = msg;
    error.status = status;
    return error;
  };

  /**
   * Create Slug
   * @param {*} string
   * @returns Slug
   */
  static createSlug = (string) => {
    const slug = string.toLowerCase().replace(/[^\w]/g, '-');
    return slug;
  };
}

// Export
export default Utils;
