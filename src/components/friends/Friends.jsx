import PropTypes from 'prop-types';
import css from './friends.module.css';

export const FriendList = props => {
  const online = 'rgb(0, 175, 0)';
  const offline = 'rgb(229, 0, 0)';
  return (
    <ul className={css.friendList}>
      {props.friends.map(friend => (
        <li className={css.friendItem} key={friend.id}>
          <span
            className={css.friendStatus}
            style={{ backgroundColor: friend.isOnline ? online : offline }}
          ></span>
          <img
            className={css.friendAvatar}
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className={css.friendName}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
