import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './index.css';

var parent = {
    width: '100%',
    overflow: 'hidden !important'
}

var paper = {
    borderRadius: '4px',
    height: '200px',
    boxShadow: 'none'
    // border: 'solid 2px blue',
}

var sponsorimg = {
    verticalAlign: 'middle',
    // border: 'solid 2px red',
    width: '30%',
    height: '60%',
    marginLeft: '30%',
    marginTop: '5%'
}

var grid = {
    marginBottom: '50px'
}

const useStyles = makeStyles(theme => ({

    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

var imgDetails = [
    {
        name: 'Adani',
        src: require('../static/sponsors/adani.png')
    }, {
        name: 'Airtel',
        src: require('../static/sponsors/airtel.png')
    }, {
        name: 'Book My Show',
        src: require('../static/sponsors/bookmyshow.jpg')
    }, {
        name: 'BPCL',
        src: require('../static/sponsors/bpcl.png')
    }, {
        name: 'Cardolite',
        src: require('../static/sponsors/cardolite.jpg')
    }, {
        name: 'COSCO',
        src: require('../static/sponsors/cosco.jpg')
    }
]

function createTable() { // two in a  row
    let rows = [];

    //total number of rows
    for (let i = 0; i < 3; i++) {
        let columns = [];

        for (let j = 0; j < 2; ++j) {
            columns.push(
                <Grid style={grid} item xs={12} sm={6} md={6} lg={6}>
                    <Paper style={paper} >
                        <img className="simg2" src={imgDetails[i * 2 + j].src} />
                    </Paper>
                </Grid>
            )
        }

        rows.push(
            <Grid container spacing={0}>
                {columns}
            </Grid>
        )
    }
    return rows
}



function createTable2() { // three in a row
    let rows = [];

    //total number of rows
    for (let i = 0; i < 2; i++) {
        let columns = [];

        for (let j = 0; j < 3; ++j) {
            columns.push(
                <Grid className="inner-grid" style={grid} item xs={12} sm={6} md={4} lg={4}>
                    {/* <Paper style={paper} > */}
                    <div className="img-container">
                    {/* <svg height="250" width="250">
                        <circle cx="50%" cy="50%" fill="transparent" r="50%" stroke="#9fe2f3" stroke-dasharray="2 9" stroke-width="8"></circle>
                    </svg> */}
                        <img className="simg3" src={imgDetails[i * 3 + j].src} />
                    </div>
                    {/* </Paper> */}
                </Grid>
            )
        }

        rows.push(
            <Grid className="outer-grid" container spacing={0}>
                {columns}
            </Grid>
        )
    }
    return rows
}

function createTable3() { // three in a row
    let rows = [];

    //total number of rows
    for (let i = 0; i < 2; i++) {
        let columns = [];

        for (let j = 0; j < 3; ++j) {
            columns.push(
                <Grid className="inner-grid" item xs={12} sm={6} md={4} lg={4}>
                    <div className="img-container">
                        {/* <svg _ngcontent-uys-c3="" height="250" width="250"><circle _ngcontent-uys-c3="" cx="50%" cy="50%" fill="transparent" r="50%" stroke="#9fe2f3" stroke-dasharray="2 9" stroke-width="8"></circle></svg> */}
                        <img className="simg3" src={imgDetails[i * 3 + j].src} />
                    </div>
                </Grid>
            )
        }

        rows.push(
            <Grid className="outer-grid" container spacing={0}>
                {columns}
            </Grid>
        )
    }
    return rows
}

function AutoGrid() {
    // const classes = useStyles();

    return (
        <div style={parent}>
            <h1> Sponsors </h1>
            <div id="root">
                
                {/* TITLE SPONSORS */}
                {/* <Grid container spacing={0}>
                    <Grid style={grid} item xs={12} sm={12} md={12} lg={12}>
                        <Paper style={paper} >
                            <img className="simg" src={require('../static/sponsors/adani.png')} />
                        </Paper>
                    </Grid>
                </Grid> */}

                {/* SECONDARY SPONSORS */}
                {/* {createTable()} */}
                {createTable2()}
                {createTable2()}

            </div>
        </div>

    );
}

export default class AutoGridClass extends React.Component{

    componentDidMount(){
        // document.body.style.background = "url('../static/sponsor.jpg')";
        document.body.style.overflow = "scroll";
    }
    componentDidUnmount(){
        document.body.style.background = "none";
        document.body.style.overflow = "hidden";
    }

    render(){
        return(
            AutoGrid()
        )
    }
}