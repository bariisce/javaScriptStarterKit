export default class UserService
{
    constructor(loggerService)
    {
        this.users=[]
        this.loggerService=loggerService
    }
    add(user1)
    {
        this.users.push(user1)
        this.loggerService.log(user1)
    }

    list()
    {
        return this.users
    }

    getById(id)
    {
        return this.users.find(u=>u.id===id)
    }
}