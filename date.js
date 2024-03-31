exports.day = function day() {
  const date = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  return date.toLocaleDateString("en-us", options);
};

exports.date1 = function date1() {
  const date = new Date();
  const options = {
    weekday: "long",
  };
  return date.toLocaleDateString("en-us", options);
};
