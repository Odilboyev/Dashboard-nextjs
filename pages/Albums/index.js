import {
  CircularProgress,
  Slide,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTodos } from "../../redux/actions";
import Dashboard from "../Dashboard";
import UsersWrapper from "../Users/UsersWrapper";

const Albums = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTodos(dispatch, "ALBUMS");
  }, []);

  const data = useSelector((state) => state.albums);
  const loading = useSelector((state) => state.loading);
  console.log(data);

  return (
    <Dashboard>
      <UsersWrapper>
        <h1 className="mb-4">Albums</h1>
        {loading ? (
          <CircularProgress size={100} />
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((v, i) => (
                <Slide in={data} direction="bottom" timeout={i * 200}>
                  <TableRow key={i}>
                    <TableCell>{v.id}</TableCell>
                    <TableCell>{v.title}</TableCell>
                  </TableRow>
                </Slide>
              ))}
            </TableBody>
          </Table>
        )}
      </UsersWrapper>
    </Dashboard>
  );
};

export default Albums;
