export default function getCrew(crewData, job) {
  const crew = crewData.filter(crew => crew.job === job);
  let noOfCrewMem = crew.length, result = "";
  for (let i = 0; i < noOfCrewMem; i++) {
    result += crew[i].name;
    result += (i == noOfCrewMem - 1) ? "" : ", ";
  }
  return result;
}