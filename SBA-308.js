const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  function getLearnerData(course, ag, submissions) {
    const result = [];
    submissions.forEach(submission => {
      const learnerId = submission.learner_id;
      let learnerData = result.find(data => data.id === learnerId);
      if (!learnerData) {
        learnerData = {
          id: learnerId,
          avg: 0,
          assignments: {}
        };
        result.push(learnerData);
      }
      const assignment = ag.assignments.find(a => a.id === submission.assignment_id);
      // Check for late submission and calculate the penalty
      const dueDate = new Date(assignment.due_at);
      const submittedDate = new Date(submission.submission.submitted_at);
      const daysLate = Math.max(0, Math.ceil((submittedDate - dueDate) / (1000 * 60 * 60 * 24)));
      const latePenalty = daysLate * 5; // Penalty of 5 points per day
      // Update learner data with assignment details
      learnerData.assignments[submission.assignment_id] =
        (submission.submission.score - latePenalty) / assignment.points_possible;
    });
    // Calculate average for each learner
    result.forEach(learner => {
      const assignmentCount = Object.keys(learner.assignments).length;
      const totalAssignmentScore = Object.values(learner.assignments).reduce((acc, score) => acc + score, 0);
      learner.avg = totalAssignmentScore / assignmentCount;
    });
    return result;
  }
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  console.log(result);



    function assignment_id(AssignmentGroup, CourseInfo) {
    if (AssignmentGroup.course_id != CourseInfo.id) {
        throw new error('program failed.. course ID not present in course info data. please check');
    
    } else {
        //console.log("course id match..all good");
    }

    }

   // learner id array
    function getarraylearnerid({LearnerSubmissions}) {
    const learneridArray = {};
    
    let learnerId = 0;
    for (i = 0; i < LearnerSubmissions.length; i++) {
    if  (learnerId != LearnerSubmissions[i]. learner_id){
    learnerId = LearnerSubmissions[i] . learner_id;
        learneridArray.push (learnerId);
        }

    }
    return learneridArray;
}



//Get the assignment details object
function AssignmentDetail(AssignmentGroup, assignment_id) {
    let i = 0;
}
do {
    if (assignmentCount.assignments [i]. id == assignMentId) {
        return AssignmentGroup.assignments [i];
    }
    i++;
    } while (i < AssignmentGroup.assignments.length)

function marksDate(dueDate, submittedDate) {
    if (submittedDate > dueDate){
        return 10;
    } else {
        return 0;
    }
}
//Calculate avarage
function avarage(actualMarks, totalMarks, dueDate, submittedDate) {
    let val = 0
    if  (isNaN(actualMarks) || isNaN(totalMarks)) {
        throw new error ('score and points_possible must be number only');
    }

    if (totalMarks == 0) {
        throw new error ('points possible can not be 0 check validity');
    }
    actualMarks = actualMarks - deductmarks(dueDate, submittedDate);
    try {
        val = actualMarks / totalMarks;
    } catch (error) {
        console.error(error);
    }
    return val;
    }

//learner details.
function learnerData (CourseInfo, AssignmentGroup, {LearnerSubmissions}) 
    let finalResult = [];


for (let i = 0; i < learnerId.length; i++) {
    let learner_id = learnerId[i];
    let myobject = {id: learnerID }; //create an object
    let totalMarks = 0;
    let totalPpssibleMarks = 0;
    for (let i = 0; i < LearnerSubmissions.length; i++) {
        if (LearnerSubmissions[i].learner_id == learnerID) {
            let avg = Avarage(LearnerSubmissions[i].submission.score, 
            AssignmentDetailObject(AssignmentGroup, LearnerSubmissions[i].assignment_id).points_possible,
            AssignmentDetailObject(AssignmentGroup, LearnerSubmissions[i].assignment_id).due_at,
            LearnerSubmissions[i].submission.submitted_at);
            totalMarks = totalMarks + LearnerSubmissions[i].submission.score;
            totalPpssibleMarks = totalPpssibleMarks + AssignmentDetailObject (AssignmentGroup, LearnerSubmissions[i],
            myObject[ ' ' + LearnerSubmissions[i].assignment_id] = avg;
        } else {
            continue;
        }

myobject['avg'] = totalMarks / totalPpssibleMarks
finalResult.push(myobject);
    } return finalResult;
    const learnerIDFinal=learnerData(CourseInfo,AssignmentGroup, {LearnerSubmissions});
    console.log ('program out put')
    console.log(learnerIDFinal)



}
