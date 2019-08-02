import React, { Component } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";
import { connect } from "react-redux";

class Cookies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickProfile: false,
      clickShop: false,
      highscore: false,
      username: "",
      score: 0,
      scorer: "no one"
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        timer: this.props.cookies + 1
      });
    }, 1000);
  }

  render() {
    if (this.state.clickShop) {
      return (
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <View style={styles.shopItem}>
              <View style={styles.itemInfo}>
                <Text style={styles.information}>
                  {" "}
                  Clicker: level {this.props.clickerLevel}{" "}
                </Text>
                <Text style={styles.information}>
                  {" "}
                  Total Gold: {this.props.cookies}{" "}
                </Text>
                <Text style={styles.information}>
                  {" "}
                  Clicker Price: {this.props.clickerPrice}{" "}
                </Text>
                <Text style={styles.information}> +1 dmg for every click </Text>
              </View>

              <View style={styles.buyItem}>
                <TouchableOpacity
                  onPress={() => this.props.increaseClicker()}
                  style={styles.buyButton}
                >
                  <Text style={styles.buy}> Upgrade </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.shopItem}>
              <View style={styles.itemInfo}>
                <Text style={styles.information}>
                  {" "}
                  Elite: level {this.props.grandmaLevel}{" "}
                </Text>
                <Text style={styles.information}>
                  {" "}
                  Total Gold: {this.props.cookies}{" "}
                </Text>
                <Text style={styles.information}>
                  {" "}
                  Elite Price: {this.props.grandmaPrice}{" "}
                </Text>
                <Text style={styles.information}> x3 for every click </Text>
              </View>

              <View style={styles.buyItem}>
                <TouchableOpacity
                  onPress={() => this.props.increaseGrandma()}
                  style={styles.buyButton}
                >
                  <Text style={styles.buy}> Upgrade </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.shopItem}>
              <View style={styles.itemInfo}>
                <Text style={styles.information}>
                  {" "}
                  AutoGold: level {this.props.autoLevel}{" "}
                </Text>
                <Text style={styles.information}>
                  {" "}
                  Total Gold: {this.props.cookies}{" "}
                </Text>
                <Text style={styles.information}>
                  {" "}
                  AutoGold Price: {this.props.autoPrice}{" "}
                </Text>
                <Text style={styles.information}> x5 gold for every sec </Text>
              </View>

              <View style={styles.buyItem}>
                <TouchableOpacity
                  onPress={() => this.props.increaseAuto()}
                  style={styles.buyButton}
                >
                  <Text style={styles.buy}> Upgrade </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.shopItem}>
              <View style={styles.itemInfo}>
                <Text style={styles.information}>
                  RapidClick: level {this.props.rapidLevel}{" "}
                </Text>
                <Text style={styles.information}>
                  {" "}
                  Total Gold: {this.props.cookies}{" "}
                </Text>
                <Text style={styles.information}>
                  {" "}
                  Rapid Price: {this.props.rapidPrice}{" "}
                </Text>
                <Text style={styles.information}> x5 damage per .1 sec </Text>
              </View>

              <View style={styles.buyItem}>
                <TouchableOpacity
                  onPress={() => this.props.increaseRapid()}
                  style={styles.buyButton}
                >
                  <Text style={styles.buy}> Upgrade </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.bottomContainer}>
            <TouchableOpacity
              onPress={toggleShop.bind(this)}
              style={styles.bottomButtons}
            >
              <Text style={styles.footerButtons}>The Shop</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={toggleHighscore.bind(this)}
              style={styles.bottomButtons}
            >
              <Text style={styles.footerButtons}>Highest Score</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={toggleProfile.bind(this)}
              style={styles.bottomButtons}
            >
              <Text style={styles.footerButtons}>My Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    if (this.state.highscore) {
      return (
        <View style={styles.container}>
          <View style={styles.highscoreTopContainer}>
            <Text style={styles.leaderboardHeader}> Leaderboards </Text>
            <View style={styles.leadberboardCategory}>
              <Text style={styles.categoryText}> Name </Text>
              <Text style={styles.categoryText}> Score </Text>
            </View>
            <View style={styles.leadberboardCategory}>
              <Text style={styles.resultText}> {this.state.scorer} </Text>
              <Text style={styles.resultText}> Lvl. {this.state.score} </Text>
            </View>
          </View>

          <View style={styles.bottomContainer}>
            <TouchableOpacity
              onPress={toggleShop.bind(this)}
              style={styles.bottomButtons}
            >
              <Text style={styles.footerButtons}>The Shop</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={toggleHighscore.bind(this)}
              style={styles.bottomButtons}
            >
              <Text style={styles.footerButtons}>Highest Score</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={toggleProfile.bind(this)}
              style={styles.bottomButtons}
            >
              <Text style={styles.footerButtons}>My Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    if (this.state.clickProfile) {
      return (
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Text style={styles.cookieAmount}>{this.props.cookies}</Text>
            <TextInput
              placeholder="Enter your username"
              placeholderTextColor="gray"
              value={this.state.username}
              onChangeText={setUsername.bind(this)}
              style={styles.usernameVal}
            />
            <TouchableOpacity
              onPress={toggleProfile.bind(this)}
              style={styles.playGame}
            >
              <Text> Play Game </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomContainer}>
            <TouchableOpacity
              onPress={toggleShop.bind(this)}
              style={styles.bottomButtons}
            >
              <Text style={styles.footerButtons}>The Shop</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={toggleHighscore.bind(this)}
              style={styles.bottomButtons}
            >
              <Text style={styles.footerButtons}>Highest Score</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={toggleProfile.bind(this)}
              style={styles.bottomButtons}
            >
              <Text style={styles.footerButtons}>My Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.cookieScreen}>
            <Text style={styles.levelAmount}> LVL: {this.props.level}</Text>
            <Text style={styles.goldAmount}> Gold: {this.props.cookies} </Text>
            <TouchableOpacity onPress={() => this.props.increaseCookies()}>
              <Image
                source={{
                  uri: this.props.uri[0]
                }}
                style={{ width: 300, height: 300 }}
              />
            </TouchableOpacity>
            <Text style={styles.healthAmount}>
              {" "}
              HP: {this.props.healthPoints}{" "}
            </Text>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity
            onPress={toggleShop.bind(this)}
            style={styles.bottomButtons}
          >
            <Text style={styles.footerButtons}>The Shop</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={toggleHighscore.bind(this)}
            style={styles.bottomButtons}
          >
            <Text style={styles.footerButtons}>Highest Score</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={toggleProfile.bind(this)}
            style={styles.bottomButtons}
          >
            <Text style={styles.footerButtons}>My Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function toggleShop() {
  if (this.state.highscore) {
    return this.setState({
      highscore: !this.state.highscore,
      clickShop: !this.state.clickShop
    });
  }
  if (this.state.clickProfile) {
    return this.setState({
      clickShop: !this.state.clickShop,
      clickProfile: !this.state.clickProfile
    });
  }
  this.setState({
    clickShop: !this.state.clickShop
  });
}

function toggleHighscore() {
  if (this.state.clickProfile) {
    this.setState({
      clickProfile: !this.state.clickProfile,
      highscore: !this.state.highscore
    });
  }
  if (this.state.clickShop) {
    this.setState({
      clickShop: !this.state.clickShop,
      highscore: !this.state.highscore
    });
  }
  if (this.state.score < this.props.level) {
    this.setState({
      scorer: this.state.username,
      score: this.props.level
    });
  }
  this.setState({
    highscore: !this.state.highscore
  });
}

function toggleProfile() {
  if (this.state.highscore) {
    return this.setState({
      highscore: !this.state.highscore,
      clickProfile: !this.state.clickProfile
    });
  }
  if (this.state.clickShop) {
    return this.setState({
      clickShop: !this.state.clickShop,
      clickProfile: !this.state.clickProfile
    });
  }
  this.setState({
    clickProfile: !this.state.clickProfile
  });
}

function setUsername(user) {
  this.setState({
    username: user
  });
}

function mapStateToProps(state) {
  return {
    cookies: state.cookies,
    clickerLevel: state.clickerLevel,
    clickerPrice: state.clickerPrice,
    grandmaLevel: state.grandmaLevel,
    grandmaPrice: state.grandmaPrice,
    autoLevel: state.autoLevel,
    autoPrice: state.autoPrice,
    rapidLevel: state.rapidLevel,
    rapidPrice: state.rapidPrice,
    highscore: state.highscore,
    level: state.level,
    healthPoints: state.healthPoints,
    uri: state.uri
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCookies: () => dispatch({ type: "INCREASE_COOKIES" }),
    increaseClicker: () => dispatch({ type: "INCREASE_CLICKER" }),
    increaseGrandma: () => dispatch({ type: "INCREASE_GRANDMA" }),
    increaseAuto: () => dispatch({ type: "INCREASE_AUTO" }),
    increaseRapid: () => dispatch({ type: "INCREASE_RAPID" }),
    highscore: () => dispatch({ type: "" })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cookies);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topContainer: {
    flex: 14 / 15,
    alignItems: "center",
    justifyContent: "center"
  },
  highscoreTopContainer: {
    flex: 14 / 15,
    alignItems: "center"
  },
  bottomContainer: {
    flex: 1 / 15,
    flexDirection: "row"
  },
  cookieScreen: {
    alignItems: "center",
    justifyContent: "center"
  },
  levelAmount: {
    fontFamily: "Cochin",
    color: "gray"
  },
  cookieAmount: {
    fontFamily: "Cochin",
    fontSize: 50,
    marginBottom: 40
  },
  goldAmount: {
    fontFamily: "Cochin",
    fontSize: 25,
    marginBottom: 40
  },
  healthAmount: {
    fontFamily: "Cochin",
    fontSize: 35,
    marginTop: 30,
    color: "red"
  },
  bottomButtons: {
    flex: 1 / 3,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black"
  },
  usernameVal: {
    marginBottom: 50,
    fontFamily: "Cochin",
    fontSize: 30,
    borderBottomColor: "blue",
    borderBottomWidth: 1
  },
  playGame: {
    backgroundColor: "gold",
    fontSize: 30,
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 20,
    borderColor: "yellow",
    borderWidth: 1,
    borderRadius: 15
  },
  leaderboardHeader: {
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 40,
    fontFamily: "Cochin",
    marginTop: "30%"
  },
  leadberboardCategory: {
    flexDirection: "row",
    marginTop: 35
  },
  categoryText: {
    flex: 1 / 2,
    fontFamily: "Cochin",
    fontSize: 30,
    textAlign: "center"
  },
  resultText: {
    flex: 1 / 2,
    fontFamily: "Cochin",
    fontSize: 25,
    color: "darkgray",
    textAlign: "center"
  },
  shopItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
    width: "98%",
    borderWidth: 1,
    borderColor: "brown",
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 15
  },
  itemInfo: {
    alignItems: "center",
    width: "60%"
  },
  buyItem: {
    alignItems: "center",
    width: "40%"
  },
  buyButton: {
    backgroundColor: "green",
    fontSize: 20,
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    borderColor: "darkgreen",
    borderWidth: 1,
    borderRadius: 15
  },
  buy: {
    fontFamily: "Cochin",
    fontSize: 20,
    color: "yellow"
  },
  information: {
    fontFamily: "Cochin",
    fontSize: 20
  },
  footerButtons: {
    fontFamily: "Cochin",
    fontSize: 15
  }
});
