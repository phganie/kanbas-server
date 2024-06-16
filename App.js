import express from 'express'
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import cors from "cors";
import AssignmnetsRoutes from './Kanbas/Assignments/routes.js';
import QuizzesRoutes from './Kanbas/Quizzes/routes.js';

import Hello from './Hello.js';
import QuestionsRoutes from './Kanbas/Questions/routes.js';

const app = express()
app.use(cors());    
app.use(express.json()); // do all your work after this line

AssignmnetsRoutes(app)
ModuleRoutes(app);
CourseRoutes(app);
Hello(app)
QuizzesRoutes(app)
QuestionsRoutes(app)

app.listen(process.env.PORT || 4001)

