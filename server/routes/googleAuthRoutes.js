import express from "express";
import passport from "passport";

const googleAuthRouter = express.Router();

// Initiate Google OAuth2 login
googleAuthRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Handle Google OAuth2 callback
googleAuthRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/api/auth/google/failure",
  }),
  (req, res) => {
    res.json({ success: true, user: req.user });
  }
);

// Handle authentication failure
googleAuthRouter.get("/google/failure", (req, res) => {
  res
    .status(401)
    .json({ success: false, message: "Google authentication failed" });
});

export default googleAuthRouter;
