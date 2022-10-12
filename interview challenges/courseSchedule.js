const canFinish = function(numCourses, prereqs) {
  // create an array and load it full of empty objects
  var preReqByCourse = new Array(numCourses);
  for(let i =0; i<preReqByCourse.length; i++) {
    preReqByCourse[i] = {};
  }
  const addDep = function(course, prereq) {
    // helper function that defines the keys of the above object as dependencies (all the prerequesite classes)
    const deps = Object.keys(preReqByCourse[prereq]);
    // loop each dependency (prereq)
    deps.forEach(dep => {
      // if there is not a property for the course and prereq, set it true (load up the object)
      if(!preReqByCourse[course][dep]){
        preReqByCourse[course][dep] = true;
        console.log(preReqByCourse);
        // recursively call 
        addDep(course, dep);
      }
    });
  }
  for (let i=0; i<prereqs.length; i++) {
    const course = prereqs[i][0];
    console.log(course);
    const prereq = prereqs[i][1];
    console.log(prereq);
    preReqByCourse[course][prereq] = true;
    console.log(preReqByCourse);
    addDep(course,prereq);
    //this line checks if a course is its own prereq
    if(preReqByCourse[course][course]){
        return false;
    }
  }
  return true;
}
console.log(canFinish(3,[[1,0],[2,1]]));
console.log(canFinish(2,[[1,0],[0,1]]));
debugger;
