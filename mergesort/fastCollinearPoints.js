/*
 * Adapted from Algorithms, 4th Edition by Robert Sedgewick
 *
 * PERFORMANT COLLINEAR POINTS
 *
 * Write a program BruteCollinearPoints that examines 4 points at a time and
 * checks whether they all lie on the same line segment, returning all such
 * line segments. To check whether 4 points p, q, r, and s are collinear, check
 * whether the three slopes between p and q, between p and r, and between p and
 * s are all equal.
 *
 * class BruteCollinearPoints {
 *   brute(points)        // finds all line segments containing 4 points
 *   numberOfSegments()   // number of line segments
 *   printLineSegments()  // prints all the line segments
 * }
 *
 * The method segments() should include each line segment containing 4 points
 * exactly once. IF 4 points appear on a line segment in the order p->q->r->s,
 * then you should include either the line segment p->s or s->p (but not both)
 * and you should not include subsegments such as p->r or q->r. For simplicity,
 * there will be no input to BruteCollinearPoints that has 5 or more collinear
 * points.
 *
 * Performance requirements: The order of growth of the running time of your
 * program should be n^4 in the worst case and should use space proportional to
 * n plus the number of line segments returned.
 *
 * http://coursera.cs.princeton.edu/algs4/assignments/collinear.html
 */

let fs;

if (typeof(document) === 'undefined') {
  Point = require('./Point').Point;
  LineSegment = require('./LineSegment').LineSegment;
  mergesort = require('./augmentedMergesort').mergesort;
  fs = require('fs');
}

class FastCollinearPoints {
  constructor(data) {
    this.points = [];
    this.lineSegments = [];
    this.number = 0;

    // Clean the data to allow reading of x and y coordinates
    data.split('\n').forEach((line, lineNum) => {
      if (lineNum !== 0 && line !== '') {
        let points = line.split(' ');
        points = points.filter((data) => {
          return data !== '';
        });

        // Create a new point instance for each line of data
        let newPoint = new Point(Number(points[0]), Number(points[1]));
        this.points.push(newPoint);
        newPoint.draw();
      }
    });
  }

  distance (p,q) {
    let dx = p.x - q.x;
    let dy = p.y - q.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  shareIntersection() {
    const a = segment[1];
    const b = segment[0];

  }

  fast() {
    const points = this.points;
    const slopes = [];
    for (let i = 0; i < points.length - 1; i++) {
      for (let j = i + 1; j < points.length; j++) {
        let a = points[i];
        let b = points[j];
        slopes[i] = [a.slopeTo(b), a, b];
      const sortedSlopes = mergesort(slopes, 0, slopes.length - 1, e => e[0]);
      // console.log('sortedSlopes', sortedSlopes)
      const lowCoord = sortedSlopes
      console.log(sortedSlopes)
      }
    }
  }

  // brute() {
  //   const points = this.points;
  //   const candidates = [];
  //   const slopes = [];
  //   const index = [];
  //   for (let i = 0; i < points.length - 2; i++) {
  //     let candidate = null;
  //     for (let j = i + 1; j < points.length - 1; j++) {
  //       const slopeij = points[i].slopeTo(points[j])
  //       candidate = [points[i], points[j]];
  //       for (let k = j + 1; k < points.length; k++) {
  //         const slopejk = points[j].slopeTo(points[k]);
  //         if (slopeij === slopejk) {
  //           candidate.push(points[k])
  //           /*
  //            * The two slopes between p and q, p and r, are
  //            * equal, therefore p, q, and r are collinear. Create a line
  //            * segment between p and r.
  //            */
  //         }
  //       }
  //       if (candidate.length > 3) {
  //         const longestCandidate = candidate.reduce((a, b, i) => {
  //           // console.log(a)
  //         // console.log(a, i)
  //           if (i === 1) {
  //             console.log([a, b], i)
  //             if (a.compareTo(b) === 1) {
  //               return [a, b]
  //             }
  //             return [b, a];
  //           }
  //           if (a[0].compareTo(b) === -1) {
  //             return [b, a[1]];
  //           } else if (a[1].compareTo(b) === 1) {
  //             return [a[0], b];
  //           }
  //           return a;
  //         });
  //         const checkPointHigh = index.indexOf(longestCandidate[0]) < 0;
  //         const checkPointLow = index.indexOf(longestCandidate[1]) < 0;
  //         // console.log(checkPointHigh, checkPointLow)
  //         if (slopes.indexOf(slopeij) === -1 && checkPointLow && checkPointHigh) {
  //           slopes.push(slopeij);
  //           index.push(longestCandidate[0], longestCandidate[1])
  //           candidates.push(longestCandidate);
  //         }
  //       }
  //       // console.log(candidateCount, 'candidateCount')
  //     }
  //   }
  //   // console.log('candidates', candidates.length)
  //   // const longestCandidates = candidates.map((candidateArray) => {
  //   //   // console.log(candidateArray.length)
  //   //   return candidateArray
  //   // })
  //   // console.log('longest candidates', longestCandidates)
  //   candidates.forEach((candidate) => {
  //     let newLine = new LineSegment(candidate[0], candidate[1]);
  //     this.lineSegments.push(newLine);
  //     newLine.draw();
  //   })
  // }

  numberOfSegments() {
    return this.number;
  }

  printLineSegments() {
    this.lineSegments.forEach((line) => {
      console.log(line.toString());
    });
  }
}

if (typeof(document) === 'undefined' && !module.parent) {
  const data = fs.readFileSync('../input/mergesort/input6.txt', 'utf-8');
  const fcp = new FastCollinearPoints(data);
  fcp.fast();
  fcp.printLineSegments();
}
