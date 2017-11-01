class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    // debugger;
    let elapsed = new Date(year, 1, 1) - this.startDate;
    elapsed = elapsed / (1000 * 60 * 60 * 24 * 365);
    return Math.round(elapsed);
  }
}

class Route {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  blocksTravelled() {
    let eastWest = [
      "1st Avenue",
      "2nd Avenue",
      "3rd Avenue",
      "Lexington Avenue",
      "Park",
      "Madison Avenue",
      "5th Avenue"
    ];
    let distVert = this.end.vertical - this.start.vertical;
    let distHoriz =
      eastWest.lastIndexOf(this["end"]["horizontal"]) -
      eastWest.lastIndexOf(this["start"]["horizontal"]);
    return Math.abs(distVert) + Math.abs(distHoriz);
  }

  estimatedTime(peak) {
    // debugger;
    if (peak) {
      debugger;
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
}
