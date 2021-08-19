import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CircularProgress, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect } from 'react'
import { Fade } from 'react-awesome-reveal';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Dashboard from '../../containers/Dashboard'
import { setTodos } from '../../redux/actions';
import TodosWrapper from './TodosWrapper'

import { Slide } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Todos = () => {
    const { menu } = useParams();
    console.log("todoni ichida", menu);

    const dispatch = useDispatch();

    useEffect(() => {
        setTodos(dispatch, 'TODOS');
    }, [])

    const data = useSelector(state => state.todos);
    const loading = useSelector(state => state.loading)

    return (
        <TodosWrapper>
            <h1 className="mb-4">Todo</h1>

            {loading ?

                <CircularProgress size={100} />
                :
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell>userId</TableCell>
                        <TableCell>title</TableCell>
                        <TableCell>completed</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((v, i) =>
                        <Slide in={data} key={i} direction="left" timeout={i * 200}  >
                            <TableRow >
                                <TableCell>{v.id}</TableCell>
                                <TableCell>{v.userId}</TableCell>
                                <TableCell>{v.title}</TableCell>
                                <TableCell>
                                    {v.completed &&
                                        <FontAwesomeIcon icon={faCheckCircle} />
                                        || ""}
                                </TableCell>
                            </TableRow>
                        </Slide>

                    )}
                </TableBody>
                </Table>}
        </TodosWrapper>
    )
}

export default Todos