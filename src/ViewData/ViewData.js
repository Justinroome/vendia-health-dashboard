import { CssBaseline, Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import SendIcon from "@mui/icons-material/Send";
import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import { purple } from "@mui/material/colors";
import { StatisticsReportModal } from "../ViewData/StatisticsReportModal";
import Grid from "@mui/material/Grid";

const users = ["User1", "User2"];
function UserSelectionModal(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <List sx={{ pt: 0 }}>
        {users.map((user) => (
          <ListItem button onClick={() => handleListItemClick(user)} key={user}>
            <ListItemAvatar>
              <Avatar sx={{ color: purple }}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={user} />
          </ListItem>
        ))}
        <ListItemAvatar></ListItemAvatar>
      </List>
    </Dialog>
  );
}

UserSelectionModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

function ViewData() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(users[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleStatisticsModalClose = () => {
    setOpen(false);
  };

  const handleUserModalClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const handleStatisticsReportClose = () => {
    setOpen(false);
  };

  let navigate = useNavigate();

  const routeChangeReturnHome = () => {
    navigate("/");
  };
  const columns = [
    { headerName: "Name", field: "name", width: 70 },
    { headerName: "Age", field: "age", width: 70 },
    { headerName: "Gender", field: "gender", width: 70 },
    { headerName: "Height", field: "height", width: 70 },
    { headerName: "Weight", field: "weight", width: 70 },
    { headerName: "Body Temperature", field: "bodyTemp", width: 140 },
    { headerName: "Pulse Rate", field: "pulseRate", width: 90 },
    { headerName: "Blood Pressure", field: "bloodPressure", width: 120 },
    { headerName: "Respiration Rate", field: "respirationRate", width: 130 },
    {
      headerName: "Average Exercise Per Week",
      field: "weeklyExerciseHours",
      width: 220,
    },
    { headerName: "Vacation Balance", field: "vacationBalance", width: 130 },
    { headerName: "Average Work Week", field: "workWeekHours", width: 170 },
  ];

  const rows = [
    { id: 1, name: "Snow", age: 35, gender: "Male", height: "5ft" },
    { id: 2, name: "Lannister", age: 42, gender: "Male", height: "5ft" },
    { id: 3, name: "Lannister", age: 45, gender: "Male", height: "5ft" },
    { id: 4, name: "Stark", age: 16, gender: "Male", height: "5ft" },
    { id: 5, name: "Targaryen", age: 100, gender: "Male", height: "5ft" },
    { id: 6, name: "Melisandre", age: 150, gender: "Male", height: "5ft" },
    { id: 7, name: "Clifford", age: 44, gender: "Male", height: "5ft" },
    { id: 8, name: "Frances", age: 36, gender: "Trans", height: "5ft" },
    { id: 9, name: "Roxie", age: 65, gender: "Female", height: "5ft" },
  ];

  return (
    <>
      <STYLE_1>
        <h1>Employee Data Summary</h1>
      </STYLE_1>
      <CssBaseline>
        <br />
        <Button
          variant="contained"
          color="secondary"
          sx={{
            borderRadius: 30,
            display: "flex",
          }}
          onClick={routeChangeReturnHome}
        >
          {" "}
          Return Home{" "}
        </Button>
        <br />
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClickOpen}
          endIcon={<SendIcon />}
          sx={{
            borderRadius: 30,
            display: "flex",
          }}
        >
          {" "}
          Share Selection{" "}
        </Button>
        <div>
          <UserSelectionModal
            selectedValue={selectedValue}
            open={open}
            onClose={handleUserModalClose}
          />
        </div>
        <br />
        <div>
          <StatisticsReportModal
            open={open}
            onClose={handleStatisticsModalClose}
          />
        </div>
        <br />
      </CssBaseline>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={15}
          checkboxSelection
        ></DataGrid>
      </div>
    </>
  );
}

const STYLE_1 = styled.div`
  background-image: linear-gradient(144deg, #adffd0, #8afff7 50%, #a3d9ff);
  text-align: center;
  font-family: "Ubuntu", sans-serif;
`;
export default ViewData;
