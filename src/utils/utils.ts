const getImagePrefix = () => {
  return process.env.NODE_ENV === "production"
    ? "/Habitake/"
    : "";
};

export { getImagePrefix };
 
