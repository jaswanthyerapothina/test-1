import React, { Component } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { GetStyle } from './style';

class Main extends Component {
    

    /**
     * @constructor
     * @param {object} props
     */
    constructor(props) {
        super(props);
        this.state = {
            addScreen: true,
            addValue: null,
            addTotal: null,
            numb: null
        };
        const { dispatch } = this.props;
        this.dispatch = dispatch;
    }

    onHandleChange =(event)=>{
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value,
            addTotal: null,
            numb: []
        })
    }

    onAddClick = () =>{
        const { addValue } = this.state;
        let addTotal = 0;
        let numb = [];
        if(addValue){
            let splitStr = addValue.split(',');
            
            for (let i = 0; i < splitStr.length; i++) {
                addTotal += parseInt(splitStr[i], 10);
                numb.push(parseInt(splitStr[i], 10)); 
            }
        }
        this.setState({
            addScreen: false,
            addValue: null,
            addTotal,
            numb
        });
    }

    onChangeScreen = bool =>{
        this.setState({
            addScreen: bool,
            addTotal: null,
            numb: []
        });
    }

    render() {
        const { classes } = this.props;
        const { addScreen, addValue, addTotal, numb } = this.state;

        return (
            <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}><h2>Calculator</h2></Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                  <div className={classes.leftNav}>
                  <span onClick={() =>this.onChangeScreen(true)}>Add</span><br></br>
                  <span onClick={() =>this.onChangeScreen(false)}>Result</span>
                  </div></Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper className={classes.paper}><>
              { addScreen ? <div className={classes.add}>
                  <div>Add</div>
                  <input onChange={this.onHandleChange} name="addValue" value={addValue} placeholder="enter numbers seperated by comma"/>
                  <button onClick={this.onAddClick}>Add</button>
              </div> : <div>Result:
        {
            addTotal && <div>Total:{addTotal}<br /> {numb.map(num =>(
                <div>{num}</div>
            ))}</div>}
                  </div>}
              </></Paper>
            </Grid>
          </Grid>
        </div>
             );
    }
}

/**
 * This function maps the redux state to
 * connected component's props
 * @param {object} state
 * @returns {object} props
 */
const mapStateToProps = state => {
    /* istanbul ignore next */
    return {
    };
};

export default compose(
    withStyles(GetStyle, { useTheme: true }),
    connect(mapStateToProps, null),
    withRouter
)(Main);
