import React, { useEffect, useState } from "react";
import { Grid, Paper, Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import InputAdornment from "@mui/material/InputAdornment";
import person from "../images/icon-person.svg";

import dollar from "../images/icon-dollar.svg";
import logo from "../images/logo.svg";
import clsx from "clsx";

import Box from "@mui/material/Box";

import Container from "@mui/material/Container";
import useSnackBar from "../custom/Hooks/useSnackbar";
import { fontWeight } from "@mui/system";
const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: "#3c52b2",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#3c52b2",
    },
  },
  paper: {
    backgroundColor: "black",
    color: "red",
  },
  tipAmount: {
    paddingRight: 90,
    color: "#dbf0f1",
    fontWeight: 400,
  },
  totalAmount: {
    paddingRight: 120,
    color: "#dbf0f1",
    fontWeight: 400,
  },
  tipAmountText: {
    // paddingRight: 90,
    color: "#2dbda9",
    fontSize: 50,
    fontWeight: 600,
  },
  perPerson: {
    paddingRight: 115,
    color: "#649398",
    fontWeight: 400,
    fontSize: 15,
  },
  resetGrid: {
    paddingTop: 100,
    paddingBottom: 30,
  },
  resetText: {
    color: "#004349",
    fontWeight: 600,
  },
  tripPercentageText: {
    color: "#004349",
    fontWeight: 200,
  },
  resetButton: {
    borderRadius: 10,
    backgroundColor: "#21b6ae",
    padding: "18px 36px",
    fontSize: "18px",
    width: 300,
    height: 45,
  },
  bill: {
    float: "left",
    fontFamily: "Space Mono",
    fontWeight: 200,
    color: "gray",
    paddingBottom: 10,
  },
  tip: {
    float: "left",
    fontFamily: "Space Mono",
    fontWeight: 200,
    color: "gray",
  },
  billInputDiv: {
    paddingRight: 10,
  },
  peopleError: {
    color: "red",
    textAlign: "right",
    fontSize: 20,
    fontFamily: "Space Mono",
  },
  noOfPeopleInputDiv: {
    paddingRight: 10,
    paddingBottom: 20,
  },
  tipInputDiv: {
    paddingTop: 20,
  },
  tipPercentageButton: {
    borderRadius: "10 !important",
    backgroundColor: "#00474b !important",
    color: "white !important",
    width: "100% !important",
    "&:hover": {
      backgroundColor: "#9de8df !important",
      color: "#175c5c!important",
    },
  },
  tipPercentageButtonClicked: {
    borderRadius: "10 !important",
    backgroundColor: "#26c2ad !important",
    color: "#175c5c!important",
    width: "100% !important",
  },
  inputFieldForAddingTipAmount: {
    backgroundColor: "#f3f8fb !important",
    textAlign: "right !important",
    fontSize: "30 !important",
    color: "#044249 !important",
    fontFamily: "Space Mono !important",
    fontWeight: "600 !important",
  },
}));

const TripForm = ({}) => {
  // States
  const [billAmount, setBillAmount] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalPerson, setPerson] = useState(null);
  const [clickedButton, setClickedButton] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [deletedNotification, setDeletedNotification] = useState([]);
  const [notifyEventList, setNotifyEventList] = useState([]);
  const handleSubmit = () => {};

  //Calcualte Bill
  const handleCalcualteBill = (e) => {
    if (e.target.value < 0) {
      setBillAmount(null);
    } else setBillAmount(e.target.value);
  };

  //Calculate Tip
  const handleTipButtonClicked = (ind, amount) => {
    if (billAmount <= 0 || billAmount == null) {
      return;
    }
    const data = [...clickedButton];
    const newdata = data.map((Val) => false);
    newdata[ind] = true;

    setClickedButton(newdata);
    let tip = (amount / 100) * billAmount;
    setTipAmount(tip);
    console.log("tipAmount", amount);
  };

  //calcualte Custom tip
  const onHanldleCustomeTipChange = (e) => {
    if (billAmount <= 0 || billAmount == null) {
      return;
    }
    console.log(e.target.value);
    const data = [...clickedButton];
    const newdata = data.map((Val) => false);
    setClickedButton(newdata);
    setTipAmount((e.target.value/100)*billAmount)
  };

  //handling no  of People
  const handleNoOfPeople = (e) => {
    setPerson(e.target.value);
  };
  const classes = useStyles();
  return (
    <div>
      <div style={{ paddingTop: 50, paddingBottom: 25 }}>
        <img src={logo} alt="a"></img>
      </div>
      <Container
        className={classes.container}
        style={{ marginTop: 50, marginBottom: 200 }}
      >
        <Grid container spacing={2}>
          <Grid container item xs={12} md={6} lg={6}>
            <Grid item xs={12}>
              <div className={classes.billInputDiv}>
                <label className={classes.bill}>Bill</label>
                {billAmount == null && (
                  <label className={classes.peopleError}>
                    Bill Can't be zero
                  </label>
                )}

                <TextField
                  onChange={(e) => handleCalcualteBill(e)}
                  error={billAmount == null ? true : false}
                  value={billAmount}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={dollar} alt="a"></img>
                      </InputAdornment>
                    ),
                    inputProps: {
                      style: {
                        backgroundColor: "#f3f8fb",
                        textAlign: "right",
                        fontSize: 30,
                        color: "#044249",
                        fontFamily: "Space Mono",
                        fontWeight: 600,
                      },
                    },
                  }}
                  fullWidth
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.tipInputDiv}>
                <label className={classes.bill}>Select Tip %</label>
              </div>
            </Grid>
            <Grid
              style={{ paddingRight: 5, paddingBottom: 30 }}
              container
              rowSpacing={1}
              columnSpacing={{ xs: 4, sm: 4, md: 1 }}
            >
              <Grid item xs={6} md={4}>
                <Button
                  // style={styleForButton}
                  className={
                    clickedButton[0] == false
                      ? classes.tipPercentageButton
                      : classes.tipPercentageButtonClicked
                  }
                  size="large"
                  variant="contained"
                  onClick={(e) => handleTipButtonClicked(0, 5)}
                >
                  5%
                </Button>
              </Grid>
              <Grid item xs={6} md={4}>
                <Button
                  className={
                    clickedButton[1] == false
                      ? classes.tipPercentageButton
                      : classes.tipPercentageButtonClicked
                  }
                  size="large"
                  variant="contained"
                  onClick={(e) => handleTipButtonClicked(1, 10)}
                >
                  10%
                </Button>
              </Grid>
              <Grid item xs={6} md={4}>
                <Button
                  className={
                    clickedButton[2] == false
                      ? classes.tipPercentageButton
                      : classes.tipPercentageButtonClicked
                  }
                  size="large"
                  variant="contained"
                  onClick={(e) => handleTipButtonClicked(2, 15)}
                >
                  15
                </Button>
              </Grid>
              <Grid item xs={6} md={4}>
                <Button
                  className={
                    clickedButton[3] == false
                      ? classes.tipPercentageButton
                      : classes.tipPercentageButtonClicked
                  }
                  size="large"
                  variant="contained"
                  onClick={(e) => handleTipButtonClicked(3, 25)}
                >
                  25%
                </Button>
              </Grid>
              <Grid item xs={6} md={4}>
                <Button
                  className={
                    clickedButton[4] == false
                      ? classes.tipPercentageButton
                      : classes.tipPercentageButtonClicked
                  }
                  size="large"
                  variant="contained"
                  onClick={(e) => handleTipButtonClicked(4, 50)}
                >
                  50%
                </Button>
              </Grid>
              <Grid item xs={6} md={4}>
                <TextField
                  className={classes.billText}
                  placeholder="Custom"
                  onChange={(e) => onHanldleCustomeTipChange(e)}
                  InputProps={{
                    inputProps: {
                      style: {
                        backgroundColor: "#f3f8fb",
                        textAlign: "center",
                        fontSize: 30,
                        color: "#044249",
                        fontFamily: "Space Mono",
                        fontWeight: 600,
                        height: "10px",
                      },
                    },
                  }}
                  fullWidth
                />
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <div className={classes.noOfPeopleInputDiv}>
                <label className={classes.bill}>No Of People</label>
                {totalPerson != null && totalPerson <= 0 && (
                  <label className={classes.peopleError}>
                    People Can't be zero
                  </label>
                )}
                <TextField
                  className={classes.billText}
                  onChange={(e) => handleNoOfPeople(e)}
                  value={totalPerson == null ? 0 : totalPerson}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={person} alt="a"></img>
                      </InputAdornment>
                    ),
                    inputProps: {
                      style: {
                        backgroundColor: "#f3f8fb",
                        textAlign: "right",
                        fontSize: 30,
                        color: "#044249",
                        fontFamily: "Space Mono",
                        fontWeight: 600,
                      },
                    },
                  }}
                  fullWidth
                />
              </div>
            </Grid>
          </Grid>

          {
            ///
          }
          <Grid
            container
            style={{ backgroundColor: "#00474b", borderRadius: 15 }}
            item
            xs={12}
            md={6}
            lg={6}
          >
            <Grid className="font-link" item xs={6}>
              <div className={classes.tipAmount}>
                <label>Tip Amount</label>
              </div>
              <div className={classes.perPerson}>
                <label>/person </label>
              </div>
            </Grid>
            <Grid item xs={6}>
              {tipAmount > 0 && totalPerson > 0 && (
                <label className={classes.tipAmountText}>{`$ ${parseFloat(
                  tipAmount / totalPerson
                ).toFixed(1)}`}</label>
              )}
              {(tipAmount <= 0 || totalPerson <= 0) && (
                <label className={classes.tipAmountText}>{`$ 0`}</label>
              )}
            </Grid>

            <Grid item xs={6}>
              <div className={classes.totalAmount}>
                <label>Total</label>
              </div>
              <div className={classes.perPerson}>
                <label>/person </label>
              </div>
            </Grid>

            <Grid item xs={6}>
              {tipAmount > 0 && totalPerson > 0 && (
                <label className={classes.tipAmountText}>
                  {" "}
                  {`$ ${parseFloat(billAmount / totalPerson).toFixed(1)}`}
                </label>
              )}
              {(tipAmount <= 0 || totalPerson <= 0) && (
                <label className={classes.tipAmountText}>{`$ 0`}</label>
              )}
            </Grid>

            <Grid className={classes.resetGrid} item xs={12}>
              <Button
                style={{
                  borderRadius: 10,
                  backgroundColor: "#21b6ae",
                  padding: "18px 36px",
                  fontSize: "18px",
                  width: 300,
                  height: 45,
                }}
                size="small"
                variant="contained"
                onClick={() => {
                  setBillAmount(0);
                  setTipAmount(0);
                  setPerson(null);
                  const data = [...clickedButton];
                  const newdata = data.map((Val) => false);

                  setClickedButton(newdata);
                }}
              >
                <label className={classes.resetText}>{`    RESET     `}</label>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default TripForm;
