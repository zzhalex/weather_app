import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    marginTop: 35,
    paddingLeft: 40,
    textAlign: "center",
  },
  temp: {
    fontSize: 30,
    color: "#000",
    margin: 12,
  },
  content: {
    display: "flex",
  },
  group: {
    margin: 12,
    fontSize: 13,
    width: "100%",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  right: {
    width: "50%",
  },
}));

function WCard(props) {
  const classes = useStyles();
  let card =
    props.data.city === undefined ? (
      <div></div>
    ) : (
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <img
              className="uk-border-circle"
              width="40"
              height="40"
              alt="icon"
              src={
                " http://openweathermap.org/img/wn/" +
                props.data.icon +
                "@2x.png"
              }
            />
          }
          title={<div className={classes.title}>{props.data.city}</div>}
          subheader={
            <div className={classes.subheader}>
              {props.data.weather}, {props.data.tempRange}
            </div>
          }
        />

        <CardContent>
          <div className={classes.content}>
            <div className={classes.temp}>{props.data.temp}</div>
            <div className={classes.right}>
              <div className={classes.group}>{props.data.des}</div>
              <div className={classes.group}>
                humidity:{props.data.humidity}
              </div>
            </div>
          </div>
        </CardContent>
        <CardActions disableSpacing></CardActions>
      </Card>
    );
  return card;
}

export default WCard;
