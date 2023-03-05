export function countdown(ends) {
    const endsIn = ends;
  
    let s = 1000;
    let m = 60 * s;
    let h = 60 * m;
    let d = 24 * h;
    let timeLeft;
    let daysLeft;
  
    function calculateTime() {
      const now = new Date();
      const ends = new Date(endsIn);
      timeLeft = new Date(ends.getTime() - now.getTime());
      daysLeft = Math.floor(timeLeft / d) + " days";
    };

    calculateTime();
    return daysLeft;
  };