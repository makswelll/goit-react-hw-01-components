import { Profile } from './Profile/Profile';
import users from './data/users.json';
import { Statistics } from './Statistics/Statistics';
import data from './data/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from './data/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json';
export const App = () => {
  return (
    <>
      <Profile
        username={users.username}
        tag={users.tag}
        location={users.location}
        avatar={users.avatar}
        stats={users.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
