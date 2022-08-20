import styles from './UserItem.module.css'

const UserItem = props => {
  return ( 
    <li className={`${styles.users} 'li'`}>
      {props.user.name} {props.user.age} years old
    </li>
  );
};

export default UserItem;