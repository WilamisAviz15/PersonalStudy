const Chronometer = ({ time }: { time: number }) => {
  function getHours(): number {
    return Math.floor(time / 360000);
  }

  function getMinutes(): number {
    return Math.floor((time % 360000) / 6000);
  }

  function getSeconds(): number {
    return Math.floor((time % 6000) / 100);
  }

  function getMilliseconds() {
    return time % 100;
  }

  return (
    <p>
      {getHours()}:{getMinutes().toString().padStart(2, "0")}:
      {getSeconds().toString().padStart(2, "0")}:
      {getMilliseconds().toString().padStart(2, "0")}
    </p>
  );
};

export default Chronometer;
