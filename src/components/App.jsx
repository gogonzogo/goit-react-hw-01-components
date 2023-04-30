import { Profile } from './profile/Profile.jsx';
import user from './profile/user.json';
import { Statistics } from './statistics/Statistics.jsx';
import stats from './statistics/data.json';
import { FriendList } from './friends/Friends.jsx';
import friends from './friends/friends.json';
import { Transactions } from './transactions/Transactions.jsx';
import transactions from './transactions/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title={"UPLOAD STATS"}
        stats={stats} />
      <FriendList friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
};
