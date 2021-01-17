import React from 'react';
import { makeStyles, Card, CardContent, Typography } from '@material-ui/core';
// import CardActions from '@material-ui/core/CardActions';
// import Button from '@material-ui/core/Button';
// import { exampleAccountData } from '../../models/data';
import './FroppaCard.css';

interface Props {
  accounts: any[];
}

const useStyles = makeStyles({
  root: {
    borderRadius: 20,
    maxWidth: 375,
    minWidth: 275,
    maxHeight: 250,
    minHeight: 200,
    backgroundColor: '#FFC807',
    position: 'relative',
  },
  title: {
    color: '#FFF8F8',
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
  content: {
    position: 'absolute',
    top: 25,
    left: 10,
    zIndex: 10,
  },
  // actions: {
  //   position: 'absolute',
  //   bottom: 3,
  //   zIndex: 99,
  // },
});

const FroppaCard = (props: Props): JSX.Element => {
  const classes = useStyles();
  const aggregateBalance = props.accounts.reduce((total, acc) => total + acc.balance.amount, 0);
  // example account balance: exampleAccountData.account[0].availableBalance.amount

  return (
    <Card className={classes.root}>
      {/* card svg graphics */}
      <svg className="froppa-card-svg red" xmlns="http://www.w3.org/2000/svg" width="170" height="156" viewBox="0 0 368 345" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M189.773 3.35747C232.232 -0.939066 279.243 -5.10452 313.765 18.002C348.273 41.0994 360.757 83.0818 366.871 121.895C372.265 156.144 357.19 188.321 345.787 221.304C334.292 254.554 329.207 291.835 300.295 314.461C270.405 337.853 228.48 349.486 189.773 343.401C153.413 337.686 134.355 302.397 103.696 283.558C71.1272 263.545 20.7995 262.824 5.02579 229.878C-10.7705 196.885 14.4583 160.27 28.5667 126.638C41.8755 94.9118 55.7123 62.9911 84.16 41.2361C113.932 18.4683 151.264 7.25418 189.773 3.35747Z" fill="#E90F0F"/>
      </svg>
      <svg className="froppa-card-svg yellow" xmlns="http://www.w3.org/2000/svg" width="155" height="167" viewBox="0 0 310 333" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M141.583 32.6746C155.315 39.5208 168.928 45.7289 182.963 51.9308C196.476 57.902 212.786 58.7127 223.508 68.8759C234.228 79.0365 234.422 96.1417 242.59 108.448C251.86 122.415 265.554 132.501 274.951 146.384C287.928 165.557 316.03 184.323 308.842 206.33C301.475 228.883 261.319 219.559 245.324 237.082C231.262 252.488 240.141 280.29 226.742 296.275C213.581 311.974 192.178 318.385 172.473 323.987C152.078 329.785 129.272 337.6 109.65 329.563C89.2556 321.209 82.1562 295.682 66.2149 280.463C53.1835 268.023 30.056 264.563 23.8472 247.65C17.0484 229.13 35.3788 209.239 32.8831 189.669C30.8294 173.565 15.6609 162.18 10.9656 146.639C5.35665 128.074 -4.82859 107.456 2.63704 89.5566C9.94319 72.0395 35.9963 70.9167 48.5028 56.64C62.7492 40.3772 59.4551 6.18611 80.3928 0.795256C102.857 -4.98851 120.823 22.3251 141.583 32.6746Z" fill="#EBF76A"/>
      </svg>
      <svg className="froppa-card-svg purple" xmlns="http://www.w3.org/2000/svg" width="209" height="181" viewBox="0 0 418 362" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M219.108 3.40233C261.4 -8.38 307.612 12.3973 343.586 35.7294C379.723 59.1671 416.523 92.1444 417.968 132.378C419.375 171.579 374.623 196.973 350.546 229.574C334.339 251.518 320.745 273.233 300.146 291.913C275.394 314.361 252.523 339.258 219.108 348.775C177.035 360.758 129.353 369.91 90.0734 351.744C48.8018 332.655 23.4699 292.576 10.4867 252.287C-2.24541 212.776 -7.60547 165.272 19.2927 132.097C45.2833 100.041 104.321 115.466 140.107 92.4178C175.222 69.8019 177.925 14.876 219.108 3.40233Z" fill="#3F3CD5"/>
      </svg>
      <svg className="froppa-card-ellipse red" xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none">
        <g filter="url(#filter0_d)">
          <ellipse cx="13.3051" cy="8.12036" rx="8.66158" ry="7.49878" fill="#F81717"/>
          <path d="M21.4667 8.12036C21.4667 11.9205 17.8827 15.1191 13.3051 15.1191C8.72752 15.1191 5.14355 11.9205 5.14355 8.12036C5.14355 4.32028 8.72752 1.12158 13.3051 1.12158C17.8827 1.12158 21.4667 4.32028 21.4667 8.12036Z" stroke="#FFFBFB"/>
        </g>
        <defs>
          <filter id="filter0_d" x="0.643555" y="0.621582" width="25.3232" height="22.9976" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
          </filter>
        </defs>
      </svg>
      <svg className="froppa-card-ellipse orange" xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
        <path d="M17.1718 8.12036C17.1718 11.9205 13.5878 15.1191 9.01021 15.1191C4.4326 15.1191 0.848633 11.9205 0.848633 8.12036C0.848633 4.32028 4.4326 1.12158 9.01021 1.12158C13.5878 1.12158 17.1718 4.32028 17.1718 8.12036Z" fill="#F08A12" stroke="white"/>
      </svg>
      <CardContent className={classes.content}>
        <Typography className={classes.title} gutterBottom>
          Tim Smith
        </Typography>
        <Typography className={classes.pos} variant="h4" component="h2">
        ${Math.round(aggregateBalance)}
        </Typography>
      </CardContent>
      {/* <CardActions className={classes.actions}>
        <Button size="small">Visit the Marketplace</Button>
      </CardActions> */}
    </Card>
  );
};

export default FroppaCard;
