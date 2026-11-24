const assignment = {
  id: 1,
  title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  due: "2021-10-10",
  completed: false,
  score: 0,
};

const module = {
    name: "Introduction to Node.js",
    description: "Learn Express HTTP routes",
    assignments: [assignment],
};

export default function WorkingWithRemoteObjects(app) {
  const getAssignment = (req, res) => {
    res.json(assignment);
  };
  const getAssignmentTitle = (req, res) => {
  res.json(assignment.title);
  };
  const setAssignmentTitle = (req, res) => {
  const { newTitle } = req.params;
  assignment.title = newTitle;
  res.json(assignment);
  };

  const getModule = (req, res) => {
    res.json(module);
  }
  const getModuleName = (req, res) => {
    res.json(module.name);
  }
  const updateModuleName = (req, res) => {
    const { newName } = req.params;
    module.name = newName;
    res.json(module);
  }
  const updateModuleDescription = (req, res) => {
    const { newDescription } = req.params;
    module.description = newDescription;
    res.json(module);
  }

 
  app.get("/lab5/assignment", getAssignment);
  
  app.get("/lab5/assignment/title", getAssignmentTitle);
  
  app.get("/lab5/assignment/title/:newTitle", setAssignmentTitle);

  app.get("/lab5/assignment/score/:newScore", (req, res) => {
  assignment.score = parseInt(req.params.newScore);
  res.json(assignment);
  });
  
  app.get("/lab5/assignment/completed/:completed", (req, res) => {
  assignment.completed = req.params.completed === "true";
  res.json(assignment);
  });

  app.get("/lab5/module", getModule);
  app.get("/lab5/module/name", getModuleName);
  app.get("/lab5/module/name/:newName", updateModuleName);
  app.get("/lab5/module/description/:newDescription", updateModuleDescription);
}