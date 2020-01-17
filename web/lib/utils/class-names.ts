export default (...classnames: string[]) =>
  [...classnames]
    .filter(name => !!name)
    .join(" ")
    .trim();
