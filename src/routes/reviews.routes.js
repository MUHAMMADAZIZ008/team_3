import { Router } from "express"
import {
    getAllReviewController,
    getOneReviewController,
    createReviewController,
    updateReviewController,
    deleteReviewController,
} from "../controllers/index.js"
import { authGuard, roleGuard } from "../middlewares/index.js"

export const reviewRouter = Router()

reviewRouter.get("/all",authGuard, getAllReviewController)
reviewRouter.get("/one/:id",authGuard, getOneReviewController)
reviewRouter.post("/add",authGuard, createReviewController)
reviewRouter.put("/update/:id",authGuard, updateReviewController)
reviewRouter.delete("/delete/:id",authGuard, deleteReviewController)
