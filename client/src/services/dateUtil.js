const formatTimeLeft = (endingTime) => {
  const now = new Date();
  const endDate = new Date(endingTime);
  const timeDifference = endDate - now;

  const weeks = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 7));
  const days = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
  );

  if (weeks === 0 && days <= 1) {
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );

    return `${hours} hour${hours !== 1 ? "s" : ""} ${minutes} minute${
      minutes !== 1 ? "s" : ""
    }`;
  }

  return `${weeks} week${weeks !== 1 ? "s" : ""} ${days} day${
    days !== 1 ? "s" : ""
  }`;
};

export default formatTimeLeft;
