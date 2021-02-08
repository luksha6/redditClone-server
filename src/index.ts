import { ApolloServer } from 'apollo-server-express';
import connectRedis from 'connect-redis';
import cors from 'cors';
import 'dotenv-safe/config';
import express from 'express';
import session from 'express-session';
import Redis from 'ioredis';
import path from 'path';
import "reflect-metadata";
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';
import { COOKIE_NAME, __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { Updoot } from "./entities/Updoot";
import { User } from "./entities/User";
import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";
import { UserResolver } from "./resolvers/user";
import { createUpdootLoader } from './utils/createUpdootLoader';
import { createUserLoader } from "./utils/createUserLoader";

const main = async () => {

    await createConnection({
        type: 'postgres',
        host: 'database',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'simpleblog',
        logging: true,
        synchronize: true,
        migrations: [path.join(__dirname, './migrations/*')],
        entities: [Post, User, Updoot]
    });

    // await conn.runMigrations();

     const app = express();

     const RedisStore = connectRedis(session)
     const redis = new Redis(process.env.REDIS_URL)
        
     app.use(
         cors ({
         origin: process.env.CORS_ORIGIN,
         credentials: true,
     })
     );
     app.set('proxy', 1); // NGIXN is setting in front of API
     app.use(
        session({
             name: COOKIE_NAME,
             store: new RedisStore({ 
                 client: redis,
                 disableTouch: true
                }),
             cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
                httpOnly: true,
                sameSite: 'lax', // csrf
                secure: __prod__, // cookie only works in https
                domain: __prod__ ? '.changetodomain.com' : undefined,
             },   
             saveUninitialized: false,
             secret: process.env.SESSION_SECRET, 
             resave: false,
            })  
        )

     const apolloServer = new ApolloServer({
         playground: true,
         schema:  await buildSchema({
             resolvers: [HelloResolver, PostResolver, UserResolver],
             validate: false
         }),
         context: ({req, res}) => ({ 
             req, 
             res, 
             redis, 
             userLoader: createUserLoader(),
             updootLoader: createUpdootLoader(),
             }) // accesible to resolvers
     });

     apolloServer.applyMiddleware({app, cors: false});

     app.get('/', (_,res) => {
        res.send("hello");
     });
     app.listen(parseInt(process.env.PORT), () => {
        console.log("server start on 4000");
     });
};

main().catch(err => {
    console.error(err);
});  