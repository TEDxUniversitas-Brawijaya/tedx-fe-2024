// eslint-disable-next-line import/no-anonymous-default-export, @typescript-eslint/no-explicit-any
export default (obj: { [key: string]: any }) => {
  return Object.keys(obj)
    .filter(
      (key) =>
        obj[key] !== null && obj[key] !== undefined && obj[key] !== "default",
    )
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join("&");
};
