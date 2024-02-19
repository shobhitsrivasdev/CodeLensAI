import express from "express";
import cors from "cors";
import generateReview from "./review.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.post("/api/v1/reviews", async (req, res) => {
  const code = req.body.code;

  try {
    const review = await generateReview(code);
    return res.send({ review });
  } catch (err) {
    return res.status(500).send({
      message: "Something went wrong",
    });
  }
});

// For Vercel, export the express app
export default app;

// Keep the listen call for local development
if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}
