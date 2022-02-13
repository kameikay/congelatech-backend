import "reflect-metadata"
import express, { NextFunction, Request, Response } from "express"
import "express-async-errors"
import { router } from "@shared/infra/http/routes"

import "@shared/infra/typeorm"

import "@shared/container"
import { AppError } from "@shared/errors/AppError"

const app = express()
const PORT = 3333

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message
    })
  }

  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`
  })
})

app.listen(PORT, () => console.log(`Server is running at PORT ${PORT}`))
