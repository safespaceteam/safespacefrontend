import { FormHelperText } from "@material-ui/core";

// import styled from "styled-components";

// export const MyPaper = styled.div`
//   display: flex;
//   justify-content: center;
//   padding: 50px 20px;
//   align-items: center;
//   width: 100%;
// `;

// export const AuthForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   width: 30%;
//   border: 1px solid blue;
// `;

export const styles = theme => ({
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing.unit * 8,
    flexDirection: "column"
  },

  paper: {
    width: "30%",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px"
  },

  signInform: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 0",
    width: "100%"
  },

  avatar: {
    margin: "20px 0 10px 0"
  },

  textfield: {
    width: "60%",
    margin: "15px 0",
    fontSize: "16px"
  },

  signinBtn: {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    width: "60%",
    margin: "20px 0",
    fontSize: "16px",
    "&:hover": {
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.primary.main
    }
  },

  resize: {
    fontSize: 20
  },

  toggleBtn: {
    fontSize: 16,
    color: theme.palette.secondary.main
  }
});
