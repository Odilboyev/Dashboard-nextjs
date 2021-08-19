import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CircularProgress, Slide, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setTodos } from '../../redux/actions';
import UsersWrapper from './UsersWrapper';

const Users = () => {
    const { menu } = useParams();
    console.log("userni ichida", menu);

    const dispatch = useDispatch();

    useEffect(() => {
        setTodos(dispatch, 'USERS');
    }, [])

    const data = useSelector(state => state.users);
    console.log(data);
    const loading = useSelector(state => state.loading)

    return (
        <UsersWrapper>
            <h1 className="mb-4">Users</h1>

            {loading ?

                <CircularProgress size={100} />
                :
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Company</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((v, i) =>
                        <Slide in={data} key={i} direction="right" timeout={i * 200}  >
                            <TableRow >
                                <TableCell>{v.id}</TableCell>
                                <TableCell>{v.name}</TableCell>
                                <TableCell>{v.company.name}</TableCell>
                                <TableCell>{v.email}</TableCell>
                                <TableCell>{v.phone} </TableCell>
                            </TableRow>
                        </Slide>
                    )}
                </TableBody>
                </Table>}
        </UsersWrapper>
    )
}

export default Users

// address: {street: "Kulas Light", suite: "Apt. 556", city: "Gwenborough", zipcode: "92998-3874", geo: {…}}
// company: {name: "Romaguera-Crona", catchPhrase: "Multi-layered client-server neural-net", bs: "harness real-time e-markets"}
// email: "Sincere@april.biz"
// id: 1
// name: "Leanne Graham"
// phone: "1-770-736-8031 x56442"
// username: "Bret"
// website: "hildegard.org"