const request = require('supertest')
const app = require('../app')

const userData = {
    email: "samansupriadi@gmail.com",
    password: "12345"
}

const wrongData = {
    email: "wrong@gmail.com",
    password: "12345"
}

describe('GET /user', ()=>{
    test("GET /user should return arr of user", function(done){
        request(app)
        .get("/user")
        .end((err, res)=>{
            if(err) done(err)
            else{
                expect(res.status).toBe(200)
                expect( typeof res.body).toBe("object")
                done()
            }
        })
    })

    
})


describe('POST /login', () => {
    it("should return send response with 200 status code", (done)=>{

        request(app)
         .post('/login')
         .send(userData)
         .end(function(err, res){
             if(err){
                 done(err)
             }
             expect(res.status).toEqual(200);
             expect(typeof res.body).toEqual("object");
             expect(res.body).toHaveProperty("token");
             expect(typeof res.body.token).toEqual("string");
             done()
         })
    })

    it("should send response with 401 status code", (done)=>{
       
        request(app)
         .post('/user')
         .send(wrongData)
         .end(function (err, res){
             if(err){
                 done(err)
             }
             expect(res.status).toEqual(401);
             expect(typeof res.body).toEqual("object");
             done()
         })
    }) 
})