import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logging/logger.js"
import { User } from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User Component Yüklendi")

let logger1= new ElasticLogger()
let userService = new UserService(logger1)

let user = new User(1,"Barış","Ceylan","İzmir")
let user2 = new User(2,"Ayhan","Gelir","Adıyaman")

userService.add(user)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(2))




