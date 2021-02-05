import DataLoader from 'dataLoader';
import { User } from '../entities/User';

// [1, 12, 33, 4]
// [{id: 1, username: 'luka'}, {id: 12, username: 'test'}, {}, {}]
export const createUserLoader = () => new DataLoader<number, User>(async userIds => {
    const users = await User.findByIds(userIds as number[]);
    const userIdToUser: Record<number, User> = {};
    users.forEach(u => {
        userIdToUser[u.id] = u;
    });

    return userIds.map((userId) => userIdToUser[userId])
});