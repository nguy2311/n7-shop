import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser, getAllUser } from '../../../../actions/UserAction';
import { DeleteOutlined} from '@ant-design/icons';

function User(props) {
    const {user, number} = props
    const dispatch = useDispatch()
    const handleDeleteUser = async (user) => {
        await dispatch(deleteUser(user.id))
        dispatch(getAllUser())
    }

    return (
        <tr>
            <td>{number + 1}</td>
            <td>{user.user_name}</td>
            <td>{user.email}</td>
            <td>{user.address}</td>
            <td>{user.tel}</td>
            <td className="delete-user"onClick={() => handleDeleteUser(user)}><DeleteOutlined /></td>
        </tr>
    );
}

export default User;