import express, {Express, Request, Response} from "express";
import mongoose from "mongoose";
import ArticleController from "./controllers/articleController";
import commentController from "./controllers/commentController";
import authorController from "./controllers/authorController";


const app: Express = express();
app.use(express.json());

mongoose.connect("mongodb+srv://kevinnoormets:ZlyoT2rZn5lhe4Zy@cluster0.oejohmv.mongodb.net/test");
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use('/', ArticleController);
app.use('/', commentController);
app.use('/', authorController);

app.listen(3000, () => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});